import { AnswerQuestionUseCase } from './answer-question'
import { AnswerRepository } from '../repositories/answers-repository'
import { Answer } from '../entities/answer'

const fakeAnswerRepository: AnswerRepository = {
  create: async (answer: Answer) => {
    return;
  }
}

test('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswerRepository)

  const answer = await answerQuestion.execute({
    content: 'Nova resposta',
    instructorId: '1',
    questionId: '1',
  })

  expect(answer.content).toEqual('Nova resposta')
})
