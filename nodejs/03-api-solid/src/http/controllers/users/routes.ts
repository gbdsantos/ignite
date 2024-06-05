import { FastifyInstance } from 'fastify'

import { authenticate } from './autenticate'
import { profile } from './profile'
import { Register } from './register'

import { verifyJWT } from '@/http/middlewares/verify-jwt'

export async function userRoutes(app: FastifyInstance) {
  app.post('/users', Register)
  app.post('/sessions', authenticate)

  /** Authenticated **/
  app.get('/me', { onRequest: [verifyJWT] }, profile)
}
