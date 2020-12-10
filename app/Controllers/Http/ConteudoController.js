'use strict'

const Conteudo = require('../../Models/Conteudo');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Conteudo = use("App/Models/Conteudo")
/**
 * Resourceful controller for interacting with conteudos
 */
class ConteudoController {
  /**
   * Show a list of all conteudo.
   * GET conteudo
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const conteudo = await Conteudo.all();
    return conteudo;
  }

  
  /**
   * Create/save a new conteudo.
   * POST conteudos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request }) {
      const data = request.only(['Texto', 'id user', 'id pet', 'Imagem' ])
      const conteudo = await conteudo.create(data);
      return conteudo;
  }

  /**
   * Display a single conteudo.
   * GET conteudos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const conteudo = await Conteudo.findOrFail(params.id)
    return conteudo;
  }

  /**
   * Update conteudo details.
   * PUT or PATCH conteudos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const conteudo = await Conteudo.findOrFail(params.id)
    const { Texto, id_user, id_pet, Imagem} = request.only([
      "Texto",
      "id_user",
      "id_pet",
      "Imagem",
    ]);
    conteudo.Texto = Texto;
    conteudo.id_user = id_user;
    conteudo.id_pet = id_pet;
    conteudo.Imagem = Imagem;
    conteudo.save()
    return conteudo;
  }

  /**
   * Delete a conteudo with id.
   * DELETE conteudo/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const conteudo = await Conteudo.findOrFail(params.id);
    await conteudo.delete();
    return conteudo;
  }
}

module.exports = ConteudoController 
