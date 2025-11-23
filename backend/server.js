const express = require('express');
const cors = require('cors');
const db = require('./database/connection');

const app = express();
app.use(express.json());
app.use(cors());

// Rota simples para testar conexão
app.get('/test', (req, res) => {
    db.query('SELECT 1 + 1 AS result', (err, rows) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao consultar o banco' });
        }
        res.json({ message: 'Backend funcionando!', dbResult: rows[0] });
    });
});

// Porta do servidor
app.listen(3000, () => {
    console.log('Servidor backend rodando na porta 3000');
});
