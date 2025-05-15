import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'events'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('user_id').references('id').inTable('users').onDelete('cascade').notNullable()

      table.string('categorie').notNullable()
      table.string('image').notNullable()
      table.string('title').notNullable()
      table.string('description').notNullable()
      table.date('begin_date').notNullable()
      table.string('begin_hour').notNullable()
      table.string('location').notNullable()
      table.date('end_date').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
