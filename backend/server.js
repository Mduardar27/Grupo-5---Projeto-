const express = require('express');
const cors = require('cors');
const db = require('./database/connection');

const clientesRoutes = require('./routes/clientes');
const contratosRoutes = require('./routes/contratos');
const cobrancasRoutes = require('./routes/cobrancas');

const app = express();
app.use(express.json());
app.use(cors());

// Rotas
app.use('/clientes', clientesRoutes);
app.use('/contratos', contratosRoutes);
app.use('/cobrancas', cobrancasRoutes);

app.listen(3000, () => {
    console.log('Servidor backend rodando na porta 3000');
});
