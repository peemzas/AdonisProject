'use strict'

const Schema = use('Schema')

class CardsTableSchema extends Schema {

  up () {
    this.create('cards', (table) => {
      table.increments()
      table.string('username').references('username').inTable('users')
      table.string('topic')
      table.text('contents')
      table.timestamps()
    })
  }

  down () {
    this.drop('cards')
  }

}

module.exports = CardsTableSchema
