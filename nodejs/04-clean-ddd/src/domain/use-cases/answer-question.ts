import { Answer } from "../entities/answer"

interface AnswerQuestionUseCaseRequest {
  content: string
  instructorId: string
  questionId: string
}

export class AnswerQuestionUseCase {
  execute({ instructorId, questionId, content }: AnswerQuestionUseCaseRequest) {
    const answer = new Answer(content)

    return answer
  }
}
