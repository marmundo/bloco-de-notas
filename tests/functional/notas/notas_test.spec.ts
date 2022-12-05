import { test } from '@japa/runner'
import User from 'App/Models/User'

test.group('Notas', () => {
  test('listagem de notas', async ({ client }) => {
    let user = await User.findOrFail(1)
    if (!user) {
      let response = await client.get('/api/notas').guard('api').loginAs(user)
      response.assertStatus(200)
    } else {
      return
    }
  })
})
