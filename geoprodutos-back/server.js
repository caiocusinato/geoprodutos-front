require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { dbPromise } = require('./database');

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// Permite que o nosso React (que está na porta 5173/5174) faça requisições para cá
app.use(cors());
app.use(express.json());

// Criando a rota (Endpoint) que o React vai chamar
app.get('/api/produtos', async (req, res) => {
  try {
    const db = await dbPromise;
    const [rows] = await db.query('SELECT id, nome, preco, imagem FROM produtos ORDER BY id');
    res.json(rows);
  } catch (err) {
    console.error('Erro ao buscar produtos no MySQL:', err.message);
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
});

// Ligando o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor do Geoprodutos rodando em http://localhost:${PORT}`);
});