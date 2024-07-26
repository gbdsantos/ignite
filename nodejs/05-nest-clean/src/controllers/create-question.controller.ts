import { Controller, Post, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import { CurrentUser } from 'src/auth/current-user-decorator'
import { UserPayLoad } from 'src/auth/jwt.strategy'

@Controller('/questions')
@UseGuards(JwtAuthGuard)
export class CreateQuestionController {
  constructor() {}

  @Post()
  async handle(@CurrentUser() user: UserPayLoad) {
    console.log(user)

    return 'ok'
  }
}
