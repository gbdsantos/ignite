import { Injectable } from '@nestjs/common'

import { Question } from '@/domain/forum/enterprise/entities/question'
import { QuestionDetails } from '@/domain/forum/enterprise/entities/value-objects/question-details'

import { CacheRepository } from '@/infra/cache/cache-repository'
import { QuestionAttachmentsRepository } from '@/domain/forum/application/repositories/question-attachments-repository'
import { QuestionsRepository } from '@/domain/forum/application/repositories/question-repository'

import { PrismaQuestionMapper } from '../mappers/prisma-question-mapper'
import { PrismaQuestionDetailsMapper } from '../mappers/prisma-question-details-mapper'

import { PaginationParams } from '@/core/repositories/pagination-params'
import { PrismaService } from '../prisma.service'
import { DomainEvents } from '@/core/events/domain-events'

@Injectable()
export class PrismaQuestionsRepository implements QuestionsRepository {
  constructor(
    private cacheRepository: CacheRepository,
    private prisma: PrismaService,
    private questionAttachmentsRepository: QuestionAttachmentsRepository,
  ) {}

  async create(question: Question): Promise<void> {
    const data = PrismaQuestionMapper.toPrisma(question)

    await this.prisma.question.create({
      data,
    })

    await this.questionAttachmentsRepository.createMany(
      question.attachments.getItems(),
    )

    DomainEvents.dispatchEventsForAggregate(question.id)
  }

  async delete(question: Question): Promise<void> {
    const data = PrismaQuestionMapper.toPrisma(question)

    await this.prisma.question.delete({
      where: {
        id: data.id,
      },
    })
  }

  async findById(id: string): Promise<Question | null> {
    const question = await this.prisma.question.findUnique({
      where: {
        id,
      },
    })

    if (!question) {
      return null
    }

    return PrismaQuestionMapper.toDomain(question)
  }

  async findBySlug(slug: string): Promise<Question | null> {
    const question = await this.prisma.question.findUnique({
      where: {
        slug,
      },
    })

    if (!question) {
      return null
    }

    return PrismaQuestionMapper.toDomain(question)
  }

  async findDetailsBySlug(slug: string): Promise<QuestionDetails | null> {
    const cacheHit = await this.cacheRepository.get(`question:${slug}:details`)

    if (cacheHit) {
      const cachedData = JSON.parse(cacheHit)

      return PrismaQuestionDetailsMapper.toDomain(cachedData)
    }

    const question = await this.prisma.question.findUnique({
      where: {
        slug,
      },
      include: {
        author: true,
        attachments: true,
      },
    })

    if (!question) {
      return null
    }

    await this.cacheRepository.set(
      `question:${slug}:details`,
      JSON.stringify(question),
    )

    const questionDetails = PrismaQuestionDetailsMapper.toDomain(question)

    return questionDetails
  }

  async findManyRecent({ page }: PaginationParams): Promise<Question[]> {
    const questions = await this.prisma.question.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      take: 20,
      skip: (page - 1) * 20,
    })

    return questions.map(PrismaQuestionMapper.toDomain)
  }

  async save(question: Question): Promise<void> {
    const data = PrismaQuestionMapper.toPrisma(question)

    await Promise.all([
      this.prisma.question.update({
        where: {
          id: data.id,
        },
        data,
      }),

      this.questionAttachmentsRepository.createMany(
        question.attachments.getNewItems(),
      ),

      this.questionAttachmentsRepository.deleteMany(
        question.attachments.getRemovedItems(),
      ),
      this.cacheRepository.delete(`question:${data.slug}:details`),
    ])

    DomainEvents.dispatchEventsForAggregate(question.id)
  }
}
