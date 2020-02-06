"use strict";

class TeacherViewController {
  async index({ view }) {
    return view.render("admin.home", { titlepage: "Login" });
  }
}

module.exports = TeacherViewController;
