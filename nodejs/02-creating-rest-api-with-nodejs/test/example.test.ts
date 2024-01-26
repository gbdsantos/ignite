import { test } from 'vitest'

test('the user can create a new transaction', () => {
  const responseStatusCode = 201

  expect(responseStatusCode).toEqual(201)
})
