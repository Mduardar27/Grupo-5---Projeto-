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
