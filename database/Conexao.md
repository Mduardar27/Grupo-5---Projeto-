
#  Instruções de Conexão ao Banco de Dados MySQL

##  1. Como conectar

O grupo acessa o banco de dados por meio do *phpMyAdmin*.

*Passos para conexão:*
1. Acesse o site: [https://phpmyadmin.uni9.marize.us](https://phpmyadmin.uni9.marize.us)  
2. Faça login com o usuário e senha fornecidos pelo professor.  
3. No painel esquerdo, clique no banco *db_user_5*.  
4. Lá estão as tabelas do grupo (CLIENTES, USUARIOS, CONTRATOS, etc).

---

## 🧩 2. Nome do Banco do Grupo

> *Banco do grupo:* db_user_5  
> *Servidor:* mysql.marize-us.svc.cluster.local

---

## 🔐 3. Recomendações de Segurança

- Use apenas o *usuário do grupo*, não o root.  
- *Não compartilhe login e senha* com outros grupos.  
- *Desconecte-se* do phpMyAdmin ao terminar.  
- Se precisar conectar via código (exemplo em Python):

```python
import mysql.connector

conexao = mysql.connector.connect(
    host="mysql.marize-us.svc.cluster.local",
    user="db_user_5",
    password="SUA_SENHA_AQUI",
    database="db_user_5"
)

print("Conexão realizada com sucesso!")
conexao.close()
