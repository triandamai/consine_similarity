"use strict";

const Akun = use("App/Models/Akun");
const Validator = use("Validator");
const Hash = use("Hash");

class AuthController {
  async login_view({ view }) {
    return view.render("auth.auth-login", { titlepage: "Login" });
  }
  async login_event({ request, response }) {}
  async register_view({ view }) {
    return view.render("auth.auth-register", { titlepage: "Register" });
  }
  async register_event({ request, session, response }) {
    const data = request.all();
    const validasi = await Validator.validate(data, Akun.rules);

    if (validasi.fails()) {
      //return response.json(validasi.errors.errors);
      session.flash({ notification: validasi.errors.errors });
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
        session.flash({ notification: "Berhasil!" });
        return response.redirect("/v1/auth-signin");
      } catch (error) {
        session.flash({ notification: error });
        return response.redirect("/v1/auth-signup");
      }
    }
  }
}

module.exports = AuthController;
