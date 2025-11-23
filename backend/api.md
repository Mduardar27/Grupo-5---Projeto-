# 📘 Documentação da API – CRM de Cobrança

Esta documentação descreve os endpoints disponibilizados pelo backend do sistema CRM de Cobrança.  
Todas as requisições e respostas utilizam o formato **JSON**.

Base URL padrão (ambiente local):

http://localhost:3000


---

# 📂 Entidades Documentadas
- **Clientes**
- **Contratos**
- **Cobranças**

---

# ------------------------------------
# 1) CLIENTES
# ------------------------------------

## ➤ **GET /clientes**
Retorna todos os clientes cadastrados.

### ✔ Exemplo de resposta
```json
[
  {
    "id": 1,
    "nome": "João Silva",
    "cpf": "12345678900",
    "telefone": "11999990000",
    "email": "joao@email.com"
  }
]
```

## ➤ **GET /clientes/:id**
Retorna um cliente específico.

### ✔ Exemplo de resposta
```json
{
  "id": 1,
  "nome": "João Silva",
  "cpf": "12345678900",
  "telefone": "11999990000",
  "email": "joao@email.com"
}
```

## ➤ **POST /clientes**
Cria um novo cliente.

### ✔ Body (JSON)
```json
{
  "nome": "João Silva",
  "cpf": "12345678900",
  "telefone": "11999990000",
  "email": "joao@email.com"
}
```
### ✔ Exemplo de resposta
```json
{
  "message": "Cliente criado com sucesso",
  "id": 7
}
```

## ➤ **PUT /clientes/:id**
Atualiza os dados de um cliente.

### ✔ Body (JSON)
```json
{
  "nome": "João Atualizado",
  "cpf": "98765432100",
  "telefone": "11988887777",
  "email": "joao@novoemail.com"
}
```
### ✔ Exemplo de resposta
```json
{
  "message": "Cliente atualizado com sucesso"
}
```

## ➤ **DELETE /clientes/:id**
Remove um cliente do sistema.
### ✔ Exemplo de resposta
```json
{
  "message": "Cliente excluído com sucesso"
}
```

# ------------------------------------
# 1) CONTRATOS
# ------------------------------------

## ➤ **GET /contratos**
Retorna todos os contratos.

## ➤ **GET /contratos/:id**
Retorna um contrato específico.

## ➤ **POST /contratos**
Cria um novo contrato.

### ✔ Body (JSON)
```json
{
  "cliente_id": 1,
  "descricao": "Contrato de financiamento",
  "valor": 4500.00,
  "data_inicio": "2025-01-20",
  "data_fim": "2025-12-20"
}
```

## ➤ **PUT /contratos/:id**
Atualiza um contrato existente.

## ➤ **DELETE /contratos/:id**
Remove um contrato.

# ------------------------------------
# 1) COBRANÇAS
# ------------------------------------

## ➤ **GET /cobrancas**
Retorna todas as cobranças.

## ➤ **GET /cobrancas/:id**
Retorna uma cobrança específica.

## ➤ **POST /cobrancas**
Cria uma nova cobrança.

### ✔ Body (JSON)
```json
{
  "contrato_id": 1,
  "valor": 300.50,
  "data_vencimento": "2025-02-15",
  "status": "pendente"
}
```

## ➤ **PUT /cobrancas/:id**
Atualiza os dados de uma cobrança.

## ➤ **DELETE /cobrancas/:id**
Exclui uma cobrança.
