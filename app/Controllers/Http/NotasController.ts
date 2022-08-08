import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Nota from 'App/Models/Nota'
export default class NotasController {
  public async index() {
    return Nota.all()
  }

  /**
   *    */
  public async store({ request, response }) {
    let body = request.body()
    let nota = await Nota.create(body)
    response.status(201)
    return nota
  }

  /**
   * show
   */
  public async show({ params }: HttpContextContract) {
    let id = params.id
    let nota = Nota.findOrFail(id)
    return nota
  }

  public async destroy({ params, response }: HttpContextContract) {
    let id = params.id
    let nota = await Nota.findOrFail(id)
    response.status(204)
    return nota
  }

  public async update({ params, request, response }: HttpContextContract) {
    let body = request.body()
    let id = params.id
    let nota = await Nota.findOrFail(id)
    nota.titulo = body.titulo
    nota.corpo = body.corpo

    response.status(202)
    return nota.save()
  }
}
