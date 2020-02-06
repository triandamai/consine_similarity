"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class HasilSchema extends Schema {
  up() {
    this.create("hasils", table => {
      //hasil
      table.increments();
      table
        .integer("id_akun")
        .unsigned()
        .references("id")
        .inTable("akuns");
      table
        .integer("id_soal")
        .unsigned()
        .references("id")
        .inTable("soals");
      table.string("hasil", 255);
      table.timestamps();
    });
  }

  down() {
    this.drop("hasils");
  }
}

module.exports = HasilSchema;
