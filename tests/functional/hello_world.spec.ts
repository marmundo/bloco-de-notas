import { test } from '@japa/runner'
import User from 'App/Models/User'

test('sitema está online', async ({ client }) => {
  const user = await User.find(1)
  const response = await client.get('/api/notas').guard('api').loginAs(user)

  response.assertStatus(200)
})
