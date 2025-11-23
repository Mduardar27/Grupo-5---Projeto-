const express = require('express');
const router = express.Router();
const db = require('../database/connection');

// CREATE
router.post('/', (req, res) => {
    const { nome, cpf, telefone, email } = req.body;

    const sql = 'INSERT INTO clientes (nome, cpf, telefone, email) VALUES (?, ?, ?, ?)';
    db.query(sql, [nome, cpf, telefone, email], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Cliente criado com sucesso', id: result.insertId });
    });
});

// READ (todos)
router.get('/', (req, res) => {
    db.query('SELECT * FROM clientes', (err, rows) => {
        if (err) return res.status(500).json(err);
        res.json(rows);
    });
});

// READ (1 registro)
router.get('/:id', (req, res) => {
    db.query('SELECT * FROM clientes WHERE id = ?', [req.params.id], (err, rows) => {
        if (err) return res.status(500).json(err);
        res.json(rows[0]);
    });
});

// UPDATE
router.put('/:id', (req, res) => {
    const { nome, cpf, telefone, email } = req.body;

    const sql = 'UPDATE clientes SET nome = ?, cpf = ?, telefone = ?, email = ? WHERE id = ?';
    db.query(sql, [nome, cpf, telefone, email, req.params.id], (err) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Cliente atualizado com sucesso' });
    });
});

// DELETE
router.delete('/:id', (req, res) => {
    db.query('DELETE FROM clientes WHERE id = ?', [req.params.id], (err) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Cliente excluído com sucesso' });
    });
});

module.exports = router;
