import { AppModule } from '@/infra/app.module'
import { DatabaseModule } from '@/infra/database/database.module'

import { INestApplication } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Test } from '@nestjs/testing'
import request from 'supertest'

import { Slug } from '@/domain/forum/enterprise/entities/value-objects/slug'

import { AttachmentFactory } from 'test/factories/make-attachment'
import { QuestionFactory } from 'test/factories/make-question'
import { StudentFactory } from 'test/factories/make-student'
import { QuestionAttachmentFactory } from 'test/factories/make-question-attachments'

describe('Get question by slug (E2E)', () => {
  let app: INestApplication
  let attachmentFactory: AttachmentFactory
  let questionAttachmentFactory: QuestionAttachmentFactory
  let questionFactory: QuestionFactory
  let studentFactory: StudentFactory
  let jwt: JwtService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule, DatabaseModule],
      providers: [
        AttachmentFactory,
        QuestionAttachmentFactory,
        QuestionFactory,
        StudentFactory,
      ],
    }).compile()

    app = moduleRef.createNestApplication()

    attachmentFactory = moduleRef.get(AttachmentFactory)
    questionAttachmentFactory = moduleRef.get(QuestionAttachmentFactory)
    questionFactory = moduleRef.get(QuestionFactory)
    studentFactory = moduleRef.get(StudentFactory)
    jwt = moduleRef.get(JwtService)

    await app.init()
  })

  test('[GET] /questions/:slug', async () => {
    const user = await studentFactory.makePrismaStudent({
      name: 'John Doe',
    })

    const accessToken = jwt.sign({ sub: user.id.toString() })

    const question = await questionFactory.makePrismaQuestion({
      authorId: user.id,
      title: 'Question 01',
      slug: Slug.create('question-01'),
    })

    const attachment = await attachmentFactory.makePrismaAttachment({
      title: 'Some attachment',
    })

    await questionAttachmentFactory.makePrismaQuestionAttachment({
      attachmentId: attachment.id,
      questionId: question.id,
    })

    const response = await request(app.getHttpServer())
      .get(`/questions/question-01`)
      .set('Authorization', `Bearer ${accessToken}`)
      .send()

    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({
      question: expect.objectContaining({
        title: 'Question 01',
        author: 'John Doe',
        attachments: [
          expect.objectContaining({
            title: 'Some attachment',
          }),
        ],
      }),
    })
  })
})
