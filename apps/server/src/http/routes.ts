import { FastifyInstance } from 'fastify'
import { registerUser } from './controller/registerUser'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', registerUser)
}
