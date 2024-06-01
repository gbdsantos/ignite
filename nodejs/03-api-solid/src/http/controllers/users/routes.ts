import { FastifyInstance } from 'fastify'

import { authenticate } from './autenticate.controller'
import { profile } from './profile.controller'
import { Register } from './register.controller'
import { verifyJWT } from '@/http/middlewares/verify-jwt'


export async function userRoutes(app: FastifyInstance) {
  app.post('/users', Register)
  app.post('/sessions', authenticate)

  /** Authenticated **/
  app.get('/me', { onRequest: [verifyJWT] }, profile)
}
