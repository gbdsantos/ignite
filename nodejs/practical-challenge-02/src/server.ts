import fastify from 'fastify'

import { usersRoutes } from './routes/users'

const app = fastify()

app.addHook('preHandler', (request) => {
  console.log(`[${request.method}] ${request.url}`, )
})

app.get('/ping', (_, reply) => {
  return reply.status(201).send()
})

app.register(usersRoutes, {
  prefix: 'users'
})

app.listen({
  host: '0.0.0.0',
  port: 3333
})
.then(() => {
  console.log('🚀 HTTP Server is running')
})
