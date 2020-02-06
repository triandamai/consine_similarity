"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Akun extends Model {
  static get rules() {
    return {
      nama: "required",
      jenis_kelamin: "required",
      setuju: "required",
      username: "required|unique:akuns",
      email: "required|email|unique:akuns",
      password: "required",
      password_confirm: "required"
    };
  }
}

module.exports = Akun;
