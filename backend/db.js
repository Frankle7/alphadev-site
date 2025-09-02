// backend/db.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.sqlite'); // cria/abre o arquivo

// Criação da tabela
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS formulario (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT,
      email TEXT,
      telefone TEXT,
      empresa TEXT,
      rg TEXT,
      mensagem TEXT,
      aceite INTEGER
    )
  `);
});

module.exports = db;
