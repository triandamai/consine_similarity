"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class RoomSchema extends Schema {
  up() {
    this.create("rooms", table => {
      //room
      table.increments();
      table
        .integer("id_kelas")
        .unsigned()
        .references("id")
        .inTable("kelas");
      table.string("status", 255);
      table.string("waktu_mulai", 255);
      table.string("waktu_selesai", 255);
      table.timestamps();
    });
  }

  down() {
    this.drop("rooms");
  }
}

module.exports = RoomSchema;
