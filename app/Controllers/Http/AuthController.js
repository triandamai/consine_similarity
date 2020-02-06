"use strict";

class AuthController {
  async login_view({ view }) {
    return view.render("auth.auth-login", { titlepage: "Login" });
  }
  async login_event({ request, response }) {}
  async register_view({ view }) {
    return view.render("auth.auth-register", { titlepage: "Login" });
  }
  async register_event({ request, response }) {}
}

module.exports = AuthController;
