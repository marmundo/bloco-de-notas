import { test } from '@japa/runner'
import User from 'App/Models/User'

import Database from '@ioc:Adonis/Lucid/Database'

test.group('Group name', (group) => {
  group.each.setup(async () => {
    await Database.beginGlobalTransaction()
    return () => Database.rollbackGlobalTransaction()
  })
})

test('sitema está online', async ({ client }) => {
  let user = await User.findOrFail(1)
  if (!user) {
    let response = await client.get('/api/notas').guard('api').loginAs(user)
    response.assertStatus(200)
  } else {
    return
  }
})
