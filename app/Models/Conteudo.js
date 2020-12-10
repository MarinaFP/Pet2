'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Conteudo extends Model {
    Pet(){
        return this.belongsTo("App/Models/Pet")
    }
    
    User(){
        return this.belongsTo("App/Models/User")
    }
}
module.exports = Conteudo
