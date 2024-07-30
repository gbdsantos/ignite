import { QuestionsRepository } from '@/domain/forum/application/repositories/question-repository'
import { CreateQuestionUseCase } from '@/domain/forum/application/use-cases/create-question'
import { Injectable } from '@nestjs/common'

/**
 * Example how to do using Clean Architecture pure to not add NestJS code (@Injectable() in line 23) in domain layer in
 * @domain/forum/application/use-cases/create-question.ts
 * **/
@Injectable()
export class NestCreateQuestionUseCase extends CreateQuestionUseCase {
  constructor(questionsRepository: QuestionsRepository) {
    super(questionsRepository)
  }
}
