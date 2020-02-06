"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class PesertaSchema extends Schema {
  up() {
    this.create("pesertas", table => {
      //peserta
      table.increments();
      table
        .integer("id_akun")
        .unsigned()
        .references("id")
        .inTable("akuns");
      table
        .integer("id_kelas")
        .unsigned()
        .references("id")
        .inTable("kelas");
      table.string("status", 255);
      table.timestamps();
    });
  }

  down() {
    this.drop("pesertas");
  }
}

module.exports = PesertaSchema;
