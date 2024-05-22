import { FastifyInstance } from 'fastify'

import { authenticate } from './controllers/autenticate.controller'
import { profile } from './controllers/profile.controller'
import { Register } from './controllers/register.controller'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', Register)
  app.post('/sessions', authenticate)

  /** Authenticated **/
  app.get('/me', profile)
}
