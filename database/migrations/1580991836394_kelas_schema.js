"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class KelasSchema extends Schema {
  up() {
    this.create("kelas", table => {
      //kelas
      table.increments();
      table
        .integer("id_akun")
        .unsigned()
        .references("id")
        .inTable("akuns");
      table.string("kode_kelas", 100).unique();
      table.string("nama_kelas", 100);
      table.integer("max_user", 100);
      table.text("foto_kelas");
      table.text("keterangan");
      table.enu("status", ["OPEN", "CLOSE", "PENDING"]).defaultTo("CLOSE");
      table.timestamps();
    });
  }

  down() {
    this.drop("kelas");
  }
}

module.exports = KelasSchema;
