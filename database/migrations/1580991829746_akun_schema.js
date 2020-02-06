"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AkunSchema extends Schema {
  up() {
    this.create("akuns", table => {
      table.increments();
      table.string("nama", 255).notNullable();
      table.string("foto", 255);
      table.string("bio", 255);
      table
        .string("email", 100)
        .unique()
        .notNullable();
      table
        .string("username", 254)
        .unique()
        .notNullable();
      table.string("password", 80).notNullable();
      table
        .enu("type_akun", ["STUDENT", "TEACHER", "ADMIN"])
        .defaultTo("STUDENT");
      table.timestamps();
    });
  }

  down() {
    this.drop("akuns");
  }
}

module.exports = AkunSchema;
