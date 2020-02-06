"use strict";

class StudentViewController {
  async index({ view }) {
    return view.render("admin.home", { titlepage: "Login" });
  }
}

module.exports = StudentViewController;
