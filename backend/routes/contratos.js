const express = require('express');
const router = express.Router();
const db = require('../database/connection');

// CREATE
router.post('/', (req, res) => {
    const { cliente_id, descricao, valor, data_inicio, data_fim } = req.body;

    const sql = `
        INSERT INTO contratos (cliente_id, descricao, valor, data_inicio, data_fim)
        VALUES (?, ?, ?, ?, ?)
    `;
    db.query(sql, [cliente_id, descricao, valor, data_inicio, data_fim], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Contrato criado com sucesso', id: result.insertId });
    });
});

// READ (todos)
router.get('/', (req, res) => {
    db.query('SELECT * FROM contratos', (err, rows) => {
        if (err) return res.status(500).json(err);
        res.json(rows);
    });
});

// READ (1 registro)
router.get('/:id', (req, res) => {
    db.query('SELECT * FROM contratos WHERE id = ?', [req.params.id], (err, rows) => {
        if (err) return res.status(500).json(err);
        res.json(rows[0]);
    });
});

// UPDATE
router.put('/:id', (req, res) => {
    const { cliente_id, descricao, valor, data_inicio, data_fim } = req.body;

    const sql = `
        UPDATE contratos 
        SET cliente_id = ?, descricao = ?, valor = ?, data_inicio = ?, data_fim = ?
        WHERE id = ?
    `;

    db.query(sql, [cliente_id, descricao, valor, data_inicio, data_fim, req.params.id], (err) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Contrato atualizado com sucesso' });
    });
});

// DELETE
router.delete('/:id', (req, res) => {
    db.query('DELETE FROM contratos WHERE id = ?', [req.params.id], (err) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Contrato excluído com sucesso' });
    });
});

module.exports = router;
