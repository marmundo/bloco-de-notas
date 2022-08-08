/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('/nome', async () => {
  return 'Eu sou o bloco de notas'
})

Route.post('/nome', async ({ request }) => {
  let body = request.body()
  return `Olá ${body.nome}. Seja bem vindo ao bloco de notas`
})

Route.get('/notas', async () => {
  return 'NOTAS'
})

Route.get('/notas/:id', async ({ params }) => {
  let id = params.id
  return 'Nota de id ' + id
})

Route.post('/notas', async ({ request, response }) => {
  let body = request.body()
  let titulo = body.titulo
  let corpo = body.corpo
  response.status(201)
  return { titulo, corpo }
})

Route.delete('/notas/:id', async ({ params }) => {
  let id = params.id
  return `Nota ${id} deletada`
})

Route.put('/notas', async ({ request }) => {
  let body = request.body()
  return { mag: 'Nota editada', body }
})
