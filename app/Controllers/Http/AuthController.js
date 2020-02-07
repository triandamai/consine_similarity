"use strict";

const Akun = use("App/Models/Akun");
const Validator = use("Validator");
const Hash = use("Hash");

class AuthController {
  async login_view({ auth, view }) {
    await auth.logout();
    return view.render("auth.auth-login", { titlepage: "Login" });
  }
  async login_event({ request, auth, response }) {
    try {
      const { email, password } = request.all();
      let login = await auth.attempt(email, password);
      if (login) {
        return response.redirect("/admin");
      } else {
        return response.redirect("/v1/auth-signin");
      }
    } catch (error) {
      return response.redirect("/v1/auth-signin");
    }

    return response.json(login);
  }
  async register_view({ view }) {
    return view.render("auth.auth-register", { titlepage: "Register" });
  }
  async register_event({ request, session, response }) {
    const data = request.all();
    const validasi = await Validator.validate(data, Akun.rules);

    if (validasi.fails()) {
      session.flash({
        notification:
          '<div class="alert alert-warning alert-dismissible show fade">' +
          '<div class="alert-body">' +
          '<button class="close" data-dismiss="alert">' +
          "<span>&times;</span> " +
          "</button>" +
          validasi.errors.errors +
          "</div>" +
          "</div>"
      });
      return response.redirect("/v1/auth-signup");
    } else {
      const password = await Hash.make(request.input("password"));
      const nama = request.input("nama");
      const username = request.input("username");
      const email = request.input("email");
      const bio = "Hi, Saya pengguna baru!";
      const type_akun = request.input("type");
      const jenis_kelamin = request.input("jenis_kelamin");
      const alamat = "belum ada";
      const foto = "default";
      const datasimpan = {
        nama,
        foto,
        bio,
        email,
        username,
        password,
        type_akun,
        jenis_kelamin,
        alamat
      };
      try {
        let simpan = await Akun.create(datasimpan);
        session.flash({
          notification:
            '<div class="alert alert-success alert-dismissible show fade">' +
            '<div class="alert-body">' +
            '<button class="close" data-dismiss="alert">' +
            "<span>&times;</span> " +
            "</button>Berhasil mendaftar !" +
            "</div>" +
            "</div>"
        });
        return response.redirect("/v1/auth-signin");
      } catch (error) {
        session.flash({
          notification:
            '<div class="alert alert-danger alert-dismissible show fade">' +
            '<div class="alert-body">' +
            '<button class="close" data-dismiss="alert">' +
            "<span>&times;</span> " +
            "</button>" +
            "Gagal mendaftar!</div>" +
            "</div>"
        });
        return response.redirect("/v1/auth-signup");
      }
    }
  }
}

module.exports = AuthController;
