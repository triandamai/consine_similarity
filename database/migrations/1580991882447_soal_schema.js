"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class SoalSchema extends Schema {
  up() {
    this.create("soals", table => {
      //soal
      table.increments();
      table.string("judul", 255);
      table
        .integer("id_room")
        .unsigned()
        .references("id")
        .inTable("rooms");
      table.timestamps();
    });
  }

  down() {
    this.drop("soals");
  }
}

module.exports = SoalSchema;
