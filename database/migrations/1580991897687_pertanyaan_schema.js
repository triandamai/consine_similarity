"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class PertanyaanSchema extends Schema {
  up() {
    this.create("pertanyaans", table => {
      //pertanyaan
      table.increments();
      table
        .integer("id_soal")
        .unsigned()
        .references("id")
        .inTable("soals");
      table.text("pertanyaan");
      table.text("jawaban");
      table.timestamps();
    });
  }

  down() {
    this.drop("pertanyaans");
  }
}

module.exports = PertanyaanSchema;
