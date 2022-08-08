import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Notas from 'App/Models/Nota'
export default class NotasController {
  public async index() {
    return Notas.all()
  }

  /**
   *    */
  public async store({ request, response }) {
    let body = request.body()
    response.status(201)
    return { msg: 'Nota criada', body }
  }

  /**
   * show
   */
  public async show({ params }: HttpContextContract) {
    let id = params.id
    return 'Nota de id ' + id
  }

  public async destroy({ params }: HttpContextContract) {
    let id = params.id
    return `Nota ${id} deletada`
  }

  public async update({ params, request }: HttpContextContract) {
    let body = request.body()
    let id = params.id
    return { mag: 'Nota editada', body }
  }
}
