# Normalização — Info Tech

### 1FN (Primeira Forma Normal):
- Todos os atributos armazenados em colunas atômicas.
- Telefones do cliente foram normalizados para a tabela clientes_telefones ao invés de várias colunas.

### 2FN (Segunda Forma Normal):
- Todas as colunas não-chave dependem totalmente da chave primária.
- Exemplo: em contratos, valor_total depende somente de id_contrato.

### 3FN (Terceira Forma Normal)
- Removemos dependências transitivas.
- Exemplo: não armazenamos o segmento_nome direto na tabela clientes; guardamos id_segmento e a tabela segmentos contém o nome.

### Casos em que flexibilizamos a normalização:
- logs: optamos por manter logs em uma tabela única (não particionada no modelo) para facilitar auditoria; em produção recomendamos particionamento por data para performance.

### Como evitamos redundâncias:
- Tabelas auxiliares (segmentos, clientes_telefones) removem repetições de texto em clientes.
- Relatórios usam tabelas associativas para evitar duplicação de metadados entre relatorios, clientes e usuarios.

### Observações finais:
- O modelo respeita 1FN, 2FN e 3FN como requisito mínimo.
- Quando houver necessidade de maior performance de leitura, aplicar desnormalização controlada com justificativa e índice/materialized views.
