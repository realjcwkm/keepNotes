'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TarefasSchema extends Schema {
  up () {
    this.create('tarefas', (table) => {
      table.increments()
      table.string('descricao', 200)
      table.boolean('finalizada')
      table.timestamps()
    })
  }

  down () {
    this.drop('tarefas')
  }
}

module.exports = TarefasSchema
