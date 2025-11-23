const mysql = require('mysql2');

// Dados fornecidos pelo professor
const connection = mysql.createConnection({
    host: 'phpmyadmin.uni9.marize.us',
    user: 'user_5',
    password: 'Twq7e9YE-5!',
    database: 'user_5'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('Conexão ao MySQL bem-sucedida!');
});

module.exports = connection;
