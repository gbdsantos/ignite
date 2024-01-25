import setupKnex from 'knex'

export const knex = setupKnex({
  client: 'sqlite3',
  connection: {
    filename: './src/database/app.sqlite',
  },
})
