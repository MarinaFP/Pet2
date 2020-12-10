'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ConteudoSchema extends Schema {
  up () {
    this.create('conteudos', (table) => {
      table.increments()
      table.text("Texto")
      table.integer("id user").unsigned().references("id").inTable("User").onUpdate("cascade").onDelete("cascade")
      .notNullable()
      table.integer("id pet").unsigned().references("id").inTable("pet").onUpdate("cascade").onDelete("cascade")
      .notNullable()
      table.string("Imagem")
      table.timestamps()
    })
  }

  down () {
    this.drop('conteudos')
  }
}

module.exports = ConteudoSchema
