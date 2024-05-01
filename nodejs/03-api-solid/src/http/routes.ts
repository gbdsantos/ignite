import { FastifyInstance } from 'fastify'

import { authenticate } from './controllers/autenticate.controller'
import { Register } from './controllers/register.controller'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', Register)
  app.post('/sessions', authenticate)
}
