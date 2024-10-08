import { Module } from '@nestjs/common'

import { CryptographyModule } from '../cryptography/cryptography.module'
import { DatabaseModule } from '../database/database.module'
import { StorageModule } from '../storage/storage.module'

import { AnswerQuestionController } from './controllers/answer-question.controller'
import { AnswerQuestionUseCase } from '@/domain/forum/application/use-cases/answer-question'

import { AuthenticateController } from './controllers/authenticate.controller'
import { AuthenticateStudentUseCase } from '@/domain/forum/application/use-cases/authenticate-student'

import { ChooseQuestionBestAnswerController } from './controllers/choose-question-best-answer.controller'
import { ChooseQuestionBestAnswerUseCase } from '@/domain/forum/application/use-cases/choose-question-best-answer'

import { CommentOnAnswerController } from './controllers/comment-on-answer.controller'
import { CommentOnAnswerUseCase } from '@/domain/forum/application/use-cases/comment-on-answer'

import { CommentOnQuestionController } from './controllers/comment-on-question.controller'
import { CommentOnQuestionUseCase } from '@/domain/forum/application/use-cases/comment-on-question'

import { CreateQuestionController } from './controllers/create-question.controller'
import { CreateQuestionUseCase } from '@/domain/forum/application/use-cases/create-question'

import { CreateAccountController } from './controllers/create-account.controller'

import { DeleteAnswerCommentController } from './controllers/delete-answer-comment.controller'
import { DeleteAnswerCommentUseCase } from '@/domain/forum/application/use-cases/delete-answer-comment'

import { DeleteAnswerController } from './controllers/delete-answer.controller'
import { DeleteAnswerUseCase } from '@/domain/forum/application/use-cases/delete-answer'

import { DeleteQuestionController } from './controllers/delete-question.controller'
import { DeleteQuestionUseCase } from '@/domain/forum/application/use-cases/delete-question'

import { DeleteQuestionCommentController } from './controllers/delete-question-comment.controller'
import { DeleteQuestionCommentUseCase } from '@/domain/forum/application/use-cases/delete-question-comment'

import { EditAnswerController } from './controllers/edit-answer.controller'
import { EditAnswerUseCase } from '@/domain/forum/application/use-cases/edit-answer'

import { EditQuestionController } from './controllers/edit.question.controller'
import { EditQuestionUseCase } from '@/domain/forum/application/use-cases/edit-question'

import { FetchAnswerCommentsController } from './controllers/fetch-answer-comments.controller'
import { FetchAnswerCommentsUseCase } from '@/domain/forum/application/use-cases/fetch-answer-comments'

import { FetchQuestionAnswersController } from './controllers/fetch-question-answers.controller'
import { FetchQuestionsAnswersUseCase } from '@/domain/forum/application/use-cases/fetch-question-answers'

import { FetchQuestionCommentsController } from './controllers/fetch-question-comments.controller'
import { FetchQuestionCommentsUseCase } from '@/domain/forum/application/use-cases/fetch-question-comments'

import { FetchRecentQuestionsController } from './controllers/fetch-recent-questions.controller'
import { FetchRecentQuestionsUseCase } from '@/domain/forum/application/use-cases/fetch-recent-questions'

import { GetQuestionBySlugController } from './controllers/get-question-by-slug.controller'
import { GetQuestionBySlugUseCase } from '@/domain/forum/application/use-cases/get-question-by-slug'

import { ReadNotificationController } from './controllers/read-notification.controller'
import { ReadNotificationUseCase } from '@/domain/notification/application/use-cases/read-notification'

import { RegisterStudentUseCase } from '@/domain/forum/application/use-cases/register-student'
import { UploadAttachmentController } from './controllers/upload-attachment.controller'

import { UploadAndCreateAttachmentUseCase } from '@/domain/forum/application/use-cases/upload-and-create-attachment'

@Module({
  imports: [DatabaseModule, CryptographyModule, StorageModule],
  controllers: [
    AnswerQuestionController,
    AuthenticateController,
    ChooseQuestionBestAnswerController,
    CommentOnAnswerController,
    CommentOnQuestionController,
    CreateAccountController,
    CreateQuestionController,
    DeleteAnswerCommentController,
    DeleteQuestionController,
    DeleteQuestionCommentController,
    EditAnswerController,
    EditQuestionController,
    DeleteAnswerController,
    FetchAnswerCommentsController,
    FetchQuestionAnswersController,
    FetchQuestionCommentsController,
    FetchRecentQuestionsController,
    GetQuestionBySlugController,
    ReadNotificationController,
    UploadAttachmentController,
  ],
  providers: [
    AnswerQuestionUseCase,
    ChooseQuestionBestAnswerUseCase,
    CommentOnAnswerUseCase,
    CommentOnQuestionUseCase,
    CreateQuestionUseCase,
    DeleteAnswerCommentUseCase,
    DeleteAnswerUseCase,
    DeleteQuestionUseCase,
    DeleteQuestionCommentUseCase,
    EditAnswerUseCase,
    EditQuestionUseCase,
    FetchAnswerCommentsUseCase,
    FetchQuestionsAnswersUseCase,
    FetchQuestionCommentsUseCase,
    FetchRecentQuestionsUseCase,
    GetQuestionBySlugUseCase,
    AuthenticateStudentUseCase,
    ReadNotificationUseCase,
    RegisterStudentUseCase,
    UploadAndCreateAttachmentUseCase,
  ],
})
export class HttpModule {}
