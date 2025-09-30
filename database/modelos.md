# Diagrama Entidade-Relacionamento (DER) – Info Tech

O **Diagrama Entidade-Relacionamento (DER)** do sistema **Info Tech** foi construído para atender aos módulos de **Cobrança** e **Relatórios**, além de sustentar integrações com sistemas externos.

---
## Entidades Principais
- **Clientes** → Informações cadastrais (nome, CNPJ/CPF, e-mail, telefone, segmento).  
- **Contratos** → Associados a clientes, contendo serviços, valores e vigência.  
- **Cobranças** → Emissão de boletos, PIX e faturas, vinculadas a contratos.  
- **Pagamentos** → Registro de pagamentos com valor, data e forma de quitação.  
- **Contas a Pagar/Receber** → Controle financeiro interno da empresa.  
- **Usuários** → Pessoas que acessam o sistema (colaboradores, gestores, suporte).  
- **Perfis de Acesso** → Permissões de acesso ao sistema (admin, financeiro, suporte, marketing).  
- **Relatórios** → Dados analíticos para visualização.  
- **Logs** → Auditoria das ações realizadas.  
- **Integrações** → Serviços externos (ex: PIX via Omie, ERP, e-mail).  

---
## Relacionamentos
- Um **Cliente** possui vários **Contratos** (1:N).  
- Um **Contrato** pode gerar várias **Cobranças** (1:N).  
- Cada **Cobrança** pode ter vários **Pagamentos** (1:N).  
- **Contas a Pagar/Receber** podem se relacionar tanto a **Clientes** quanto a **Fornecedores** (N:N, via tabela intermediária).  
- Um **Usuário** pertence a um único **Perfil de Acesso** (N:1).  
- **Relatórios** podem estar associados a vários **Clientes** e **Usuários** (N:N).


---
# Modelo Entidade-Relacionamento (MER) – Info Tech

O **Modelo Entidade-Relacionamento (MER)** detalha as entidades, atributos e relacionamentos com foco no banco de dados relacional que sustentará o sistema Info Tech.

---
## Entidades e Atributos

| Entidade | Atributos |
|----------|-----------|
| **Clientes** | id_cliente (PK, int), nome_razao_social (varchar, NOT NULL), cpf_cnpj (varchar UNIQUE), email (varchar), telefone (varchar), data_cadastro (date DEFAULT CURRENT_DATE), segmento (varchar) |
| **Contratos** | id_contrato (PK, int), id_cliente (FK), descricao_servico (varchar), data_inicio (date), data_fim (date), valor_total (decimal(10,2)) |
| **Cobranças** | id_cobranca (PK, int), id_contrato (FK), valor (decimal(10,2)), data_emissao (date), data_vencimento (date), status (enum: pendente, pago, atrasado) |
| **Pagamentos** | id_pagamento (PK, int), id_cobranca (FK), valor_pago (decimal(10,2)), data_pagamento (date), forma_pagamento (enum: boleto, pix, cartão), status (varchar) |
| **Contas_Receber** | id_conta (PK, int), id_cliente (FK), valor (decimal(10,2)), vencimento (date), status (varchar) |
| **Contas_Pagar** | id_conta (PK, int), fornecedor (varchar), valor (decimal(10,2)), vencimento (date), status (varchar) |
| **Usuários** | id_usuario (PK, int), nome (varchar), email (varchar UNIQUE), senha_hash (varchar), cargo (varchar), id_perfil (FK) |
| **Perfis_Acesso** | id_perfil (PK, int), descricao (enum: admin, financeiro, suporte, marketing) |
| **Relatórios** | id_relatorio (PK, int), id_usuario (FK), tipo (varchar), periodo (varchar), data_geracao (timestamp) |
| **Logs** | id_log (PK, int), id_usuario (FK), acao (varchar), data_hora (timestamp DEFAULT CURRENT_TIMESTAMP), ip (varchar) |
| **Integrações** | id_integracao (PK, int), tipo (varchar), descricao (varchar), chave_api (varchar), ativo (boolean) |

---
## Justificativa dos Relacionamentos
- **Clientes → Contratos (1:N)**: um cliente pode firmar vários contratos ao longo do tempo.  
- **Contratos → Cobranças (1:N)**: cada contrato gera diversas cobranças recorrentes.  
- **Cobranças → Pagamentos (1:N)**: uma cobrança pode ser quitada em várias parcelas/pagamentos.  
- **Contas a Pagar/Receber (N:N)**: transações podem estar ligadas a diferentes clientes e fornecedores.  
- **Usuários → Perfis de Acesso (N:1)**: cada usuário possui apenas um perfil ativo.  
- **Relatórios (N:N com Usuários e Clientes)**: relatórios podem ser filtrados por cliente e gerados por múltiplos usuários.  
- **Logs → Usuários (N:1)**: cada log está atrelado a um usuário responsável pela ação.  

---
## Exemplos de Tabelas por Módulo

| Módulo | Exemplos de Tabelas |
|--------|---------------------|
| **Clientes** | Clientes, Segmentos |
| **Financeiro** | Contratos, Cobranças, Pagamentos, Contas_Pagar, Contas_Receber |
| **Usuários e Segurança** | Usuários, Perfis_Acesso, Logs |
| **Relatórios** | Relatórios, Visualizacoes |
| **Integrações** | Integrações (PIX, ERP, e-mail) |


---
# Diagrama/Modelo visual das entidades e relacionamentos:
<img width="1176" height="860" alt="DER-MER" src="https://github.com/user-attachments/assets/f4af8ef5-e44e-4bbb-a0ba-1f212cf4cdf0" />
