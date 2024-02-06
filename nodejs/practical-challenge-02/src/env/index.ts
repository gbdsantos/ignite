import 'dotenv/config'
import dotenv from 'dotenv'

import { z } from 'zod'

/** 💡 Configure environment variables (.env) in project to handle
****** different environments (development, homologation, production)
**/
const nodeEnv = process.env.NODE_ENV
const envFile = `.env.${nodeEnv}`
dotenv.config({ path: envFile })

// console.log(process.env.NODE_ENV)

const envSchema = z.object({
  DATABASE_CLIENT: z.enum(['sqlite', 'postgres']),
  DATABASE_URL: z.string(),
  NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
  PORT: z.coerce.number().default(3333)
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.log('❌ Invalid environment variables.', _env.error.format())

  throw new Error('Invalid environment variables.')
}

export const env = _env.data
