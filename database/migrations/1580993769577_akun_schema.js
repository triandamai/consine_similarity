"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AkunSchema extends Schema {
  up() {
    this.alter("akuns", table => {
      // alter table
      table
        .enu("jenis_kelamin", ["LAKI-LAKI", "PEREMPUAN"])
        .defaultTo("LAKI-LAKI");
      table.text("alamat");
    });
  }

  down() {
    this.table("akuns", table => {
      // reverse alternations
    });
  }
}

module.exports = AkunSchema;
