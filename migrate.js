//akun
table.increments();
table.string("nama", 255).notNullable();
table.string("foto", 255);
table.string("bio", 255);
table
  .string("email", 100)
  .unique()
  .notNullable();
table
  .string("username", 254)
  .unique()
  .notNullable();
table.string("password", 80).notNullable();
table.enu("type_akun", ["STUDENT", "TEACHER", "ADMIN"]).defaultTo("STUDENT");
table.timestamps();

//kelas
table.increments();
table
  .integer("owner", 50)
  .references("id")
  .inTable("akuns")
  .onDelete("CASCADE");
table.string("kode_kelas", 100).unique();
table.string("nama_kelas", 100);
table.integer("max_user", 100);
table.text("foto_kelas");
table.text("keterangan");
table.enu("status", ["OPEN", "CLOSE", "PENDING"]).defaultTo("CLOSE");
table.timestamps();

//peserta
table.increments();
table
  .integer("id_akun", 100)
  .references("id")
  .inTable("akuns")
  .onDelete("CASCADE");
table
  .integer("id_kelas", 100)
  .references("id")
  .inTable("classes")
  .onDelete("CASCADE");
table.string("status", 255);
table.timestamps();

//room
table.increments();
table
  .integer("id_kelas", 100)
  .unsigned()
  .references("id")
  .inTable("kelas")
  .onDelete("CASCADE");
table.string("status", 255);
table.string("waktu_mulai", 255);
table.string("waktu_selesai", 255);
table.timestamps();
//soal
table.increments();
table.string("judul", 255);
table
  .integer("id_room", 36)
  .unsigned()
  .references("id")
  .inTable("rooms")
  .onDelete("CASCADE");
table.timestamps();

//pertanyaan
table.increments();
table
  .integer("id_soal", 100)
  .references("id")
  .inTable("rooms")
  .onDelete("CASCADE");
table.text("pertanyaan");
table.text("jawaban");
table.timestamps();

//hasil
table.increments();
table
  .integer("id_akun", 100)
  .references("id")
  .inTable("akuns")
  .onDelete("CASCADE");
table
  .integer("id_soal", 100)
  .references("id")
  .inTable("soals")
  .onDelete("CASCADE");
table.string("hasil", 255);
table.timestamps();

//detail_hasil
table.increments();
table
  .integer("id_hasil", 100)
  .unsigned()
  .references("id")
  .inTable("hasils");
table.text("jawaban");
table.string("nilai", 255);
table.timestamps();
