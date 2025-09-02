// backend/server.js
const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json()); // para interpretar JSON no body

// Rota para salvar dados
app.post('/formulario', (req, res) => {
  const { nome, email, telefone, empresa, rg, mensagem, aceite } = req.body;

  const query = `
    INSERT INTO formulario (nome, email, telefone, empresa, rg, mensagem, aceite)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.run(query, [nome, email, telefone, empresa, rg, mensagem, aceite ? 1 : 0], function (err) {
    if (err) {
      console.error('Erro ao inserir:', err);
      return res.status(500).json({ status: 'error', message: 'Erro ao salvar.' });
    }

    res.json({ status: 'success', id: this.lastID });
  });
});

// Rota para listar todos os dados
app.get('/formulario', (req, res) => {
  db.all('SELECT * FROM formulario', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ status: 'error', message: 'Erro ao buscar.' });
    }
    res.json(rows);
  });
});

// Inicia o servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
