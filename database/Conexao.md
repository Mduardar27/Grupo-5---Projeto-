
```python
import mysql.connector

conexao = mysql.connector.connect(
    host="mysql.marize-us.svc.cluster.local",
    user="db_user_5",
    password="Twq7e9YE-5!",
    database="user_5"
)

print("Conexão realizada com sucesso!")
conexao.close()
