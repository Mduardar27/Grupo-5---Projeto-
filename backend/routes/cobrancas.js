const express = require('express');
const router = express.Router();
const db = require('../database/connection');

// CREATE
router.post('/', (req, res) => {
    const { contrato_id, valor, data_vencimento, status } = req.body;

    const sql = `
        INSERT INTO cobrancas (contrato_id, valor, data_vencimento, status)
        VALUES (?, ?, ?, ?)
    `;
    db.query(sql, [contrato_id, valor, data_vencimento, status], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Cobrança criada com sucesso', id: result.insertId });
    });
});

// READ (todos)
router.get('/', (req, res) => {
    db.query('SELECT * FROM cobrancas', (err, rows) => {
        if (err) return res.status(500).json(err);
        res.json(rows);
    });
});

// READ (1 registro)
router.get('/:id', (req, res) => {
    db.query('SELECT * FROM cobrancas WHERE id = ?', [req.params.id], (err, rows) => {
        if (err) return res.status(500).json(err);
        res.json(rows[0]);
    });
});

// UPDATE
router.put('/:id', (req, res) => {
    const { contrato_id, valor, data_vencimento, status } = req.body;

    const sql = `
        UPDATE cobrancas 
        SET contrato_id = ?, valor = ?, data_vencimento = ?, status = ?
        WHERE id = ?
    `;

    db.query(sql, [contrato_id, valor, data_vencimento, status, req.params.id], (err) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Cobrança atualizada com sucesso' });
    });
});

// DELETE
router.delete('/:id', (req, res) => {
    db.query('DELETE FROM cobrancas WHERE id = ?', [req.params.id], (err) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Cobrança excluída com sucesso' });
    });
});

module.exports = router;
