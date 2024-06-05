import { FastifyInstance } from 'fastify'

import { create } from './create'
import { nearby } from './nearby'
import { search } from './search'

import { verifyJWT } from '@/http/middlewares/verify-jwt'
import { verifyUserRole } from '@/http/middlewares/verify-user-role'

export async function gymRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)

  app.post('/gyms', { onRequest: [verifyUserRole('ADMIN')] }, create)

  app.get('/gyms/nearby', nearby)
  app.get('/gyms/search', search)
}
