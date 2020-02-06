"use strict";

class AdminViewController {
  async index({ view }) {
    return view.render("admin.home", { titlepage: "Login" });
  }
  async profil({ view }) {
    return view.render("admin.auth-login", { titlepage: "Login" });
  }
}

module.exports = AdminViewController;
