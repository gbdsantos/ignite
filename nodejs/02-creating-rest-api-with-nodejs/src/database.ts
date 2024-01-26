import setupKnex, { Knex } from 'knex'

import 'dotenv/config'

if (process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL env not find')
}

export const config: Knex.Config = {
  client: 'sqlite3',
  connection: {
    filename: process.env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './database/migrations',
  },
}

export const knex = setupKnex(config)
