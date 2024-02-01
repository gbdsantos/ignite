import setupKnex, { Knex } from 'knex'

export const config: Knex.Config = {
  client: "",
  connection: "",
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './database/migrations'
  }
}

export const knex = setupKnex(config)
