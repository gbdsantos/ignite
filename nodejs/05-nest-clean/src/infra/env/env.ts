import { z } from 'zod'

export const envSchema = z.object({
  AWS_ACCESS_KEY_ID: z.string(),
  AWS_BUCKET_NAME: z.string(),
  AWS_SECRET_KEY_ID: z.string(),
  CLOUDFLARE_ACCOUNT_ID: z.string(),
  DATABASE_URL: z.string().url(),
  JWT_PRIVATE_KEY: z.string(),
  JWT_PUBLIC_KEY: z.string(),
  PORT: z.coerce.number().optional().default(3333),
  REDIS_DB: z.coerce.number().optional().default(0),
  REDIS_HOST: z.string().optional().default('127.0.0.1'),
  REDIS_PORT: z.coerce.number().optional().default(6379),
})

export type Env = z.infer<typeof envSchema>
