import { FastifyInstance } from "fastify";

export async function usersRoutes(app: FastifyInstance) {
  app.get('/', (_, reply) => {
    return reply.status(201).send()
  })
}
