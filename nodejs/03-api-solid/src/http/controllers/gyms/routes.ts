import { FastifyInstance } from 'fastify'

import { create } from './create'
import { nearby } from './nearby'
import { search } from './search'

import { verifyJWT } from '@/http/middlewares/verify-jwt'

export async function gymRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)

  app.post('/gyms', create)

  app.get('/gyms/nearby', nearby)
  app.get('/gyms/search', search)
}
