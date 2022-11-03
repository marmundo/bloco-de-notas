import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Nota from 'App/Models/Nota'
export default class NotasController {
  public async index({ auth }) {
    const user = await auth.authenticate()
    return await user.related('notas').query()
  }

  /**
   *    */
  public async store({ auth, request, response }) {
    const user = await auth.authenticate()
    let body = request.body()
    let nota = await Nota.create(body)
    await user.related('notas').save(nota)
    response.status(201)
    return nota
  }

  /**
   * show
   */
  public async show({ auth, params }: HttpContextContract) {
    let id = params.id
    const user = await auth.authenticate()
    let nota = await user.related('notas').query().where('id', '=', id)
    return nota
  }

  public async destroy({ auth, params, response }: HttpContextContract) {
    const user = await auth.authenticate()
    let id = params.id
    let nota = await Nota.query().where('user_id', user.id).where('id', id).delete()
    response.status(204)
    return nota
  }

  public async update({ auth, params, request, response }: HttpContextContract) {
    const user = await auth.authenticate()
    // const nota = await Nota.query().where('id', params.id).where('user_id', user.id).firstOrFail()
    const nota = await Nota.query()
      .whereHas('user', (usersQuery) => {
        usersQuery.where('user_id', user.id)
      })
      .firstOrFail()
    let body = request.body()
    if (nota) {
      nota.titulo = body.titulo
      nota.corpo = body.corpo
      if (await nota.save()) {
        response.status(202)
        return nota
      }
    }
    response.status(401)
    return response
  }
}
