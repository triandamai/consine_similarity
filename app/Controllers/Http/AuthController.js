"use strict";

const Akun = use("App/Models/Akun");
const Validator = use("Validator");

class AuthController {
  async login_view({ view }) {
    return view.render("auth.auth-login", { titlepage: "Login" });
  }
  async login_event({ request, response }) {}
  async register_view({ view }) {
    return view.render("auth.auth-register", { titlepage: "Register" });
  }
  async register_event({ request, response }) {
    return response.json(request.all());
  }
}

module.exports = AuthController;
