import { CryptographyModule } from '../cryptography/cryptography.module'
import { DatabaseModule } from '../database/database.module'
import { Module } from '@nestjs/common'

import { AnswerQuestionController } from './controllers/answer-question.controller'
import { AnswerQuestionUseCase } from '@/domain/forum/application/use-cases/answer-question'

import { AuthenticateController } from './controllers/authenticate.controller'
import { AuthenticateStudentUseCase } from '@/domain/forum/application/use-cases/authenticate-student'

import { CreateQuestionController } from './controllers/create-question.controller'
import { CreateQuestionUseCase } from '@/domain/forum/application/use-cases/create-question'

import { CreateAccountController } from './controllers/create-account.controller'

import { DeleteAnswerController } from './controllers/delete-answer.controller'
import { DeleteAnswerUseCase } from '@/domain/forum/application/use-cases/delete-answer'

import { DeleteQuestionController } from './controllers/delete-question.controller'
import { DeleteQuestionUseCase } from '@/domain/forum/application/use-cases/delete-question'

import { EditAnswerController } from './controllers/edit-answer.controller'
import { EditAnswerUseCase } from '@/domain/forum/application/use-cases/edit-answer'

import { EditQuestionController } from './controllers/edit.question.controller'
import { EditQuestionUseCase } from '@/domain/forum/application/use-cases/edit-question'

import { FetchRecentQuestionsController } from './controllers/fetch-recent-questions.controller'
import { FetchRecentQuestionsUseCase } from '@/domain/forum/application/use-cases/fetch-recent-questions'

import { GetQuestionBySlugController } from './controllers/get-question-by-slug.controller'
import { GetQuestionBySlugUseCase } from '@/domain/forum/application/use-cases/get-question-by-slug'

import { RegisterStudentUseCase } from '@/domain/forum/application/use-cases/register-student'

@Module({
  imports: [DatabaseModule, CryptographyModule],
  controllers: [
    AnswerQuestionController,
    AuthenticateController,
    CreateAccountController,
    CreateQuestionController,
    DeleteQuestionController,
    EditAnswerController,
    EditQuestionController,
    DeleteAnswerController,
    FetchRecentQuestionsController,
    GetQuestionBySlugController,
  ],
  providers: [
    AnswerQuestionUseCase,
    CreateQuestionUseCase,
    DeleteAnswerUseCase,
    DeleteQuestionUseCase,
    EditAnswerUseCase,
    EditQuestionUseCase,
    FetchRecentQuestionsUseCase,
    GetQuestionBySlugUseCase,
    AuthenticateStudentUseCase,
    RegisterStudentUseCase,
  ],
})
export class HttpModule {}
