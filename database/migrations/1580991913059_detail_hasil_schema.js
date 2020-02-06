"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class DetailHasilSchema extends Schema {
  up() {
    this.create("detail_hasils", table => {
      //detail_hasil
      table.increments();
      table
        .integer("id_hasil")
        .unsigned()
        .references("id")
        .inTable("hasils");
      table.text("jawaban");
      table.string("nilai", 255);
      table.timestamps();
    });
  }

  down() {
    this.drop("detail_hasils");
  }
}

module.exports = DetailHasilSchema;
