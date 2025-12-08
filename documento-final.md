Entrega Final – Engenharia de Banco de Dados

Projeto Integrador – InfoTech CRM

10. Documentação Técnica do Banco de Dados

A arquitetura do banco de dados do InfoTech CRM foi projetada para garantir integridade, desempenho e escalabilidade.
O banco segue o modelo relacional e foi implementado em PostgreSQL, utilizando boas práticas de normalização e restrições de integridade.

Principais diretrizes utilizadas

Nomeação padronizada de tabelas e colunas
Chaves primárias sequenciais (SERIAL / IDENTITY)
Chaves estrangeiras com relacionamentos claros
Campos obrigatórios definidos com NOT NULL
Tabelas normalizadas, evitando redundância
Índices automáticos nas chaves primárias e estrangeiras
Scripts de criação e migração organizados

11. Modelo MER/DER Final

O MER/DER foi desenvolvido com base nos requisitos levantados nos módulos de Cobrança e Relatórios.

Entidades do Sistema

Usuários
Clientes
Cobranças
Pagamentos
Projetos/Solicitações (caso o grupo tenha usado)
Logs e auditoria

Principais Relacionamentos

 Um usuário pode registrar várias cobranças.
 Cada cobrança pertence a um cliente.
 Um cliente pode ter muitos pagamentos associados.
 Logs armazenam ações para rastreamento do sistema.

Justificativa da Modelagem

O modelo foi desenhado para:

  Suportar automação das cobranças
  Garantir controle de inadimplência
  Facilitar geração de relatórios e dashboards
  Permitir futura expansão do sistema para novos módulos

12. Backend, APIs e Integração com Banco de Dados

O backend foi integrado ao banco utilizando Node.js + Express com acesso via SQL ou ORM.

Principais APIs conectadas ao banco

/auth/login – login e autenticação
/usuarios – CRUD completo
/clientes – cadastro e edição
/cobrancas – criação e gerenciamento
/pagamentos– registro de pagamentos
/relatorios – dados agregados para dashboards

Pontos técnicos implementados

Conexão segura via pool de conexões
Tratamento de erros com try/catch
Validação de dados de entrada
Respostas padronizadas em JSON
Uso de variáveis de ambiente (.env)
Separação por camadas (Controller, Service, Repository)

13. Scripts SQL / Migrations

TABELA: Usuários

sql
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(120) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    criado_em TIMESTAMP DEFAULT NOW()
);


### *TABELA: Clientes*

sql
CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    email VARCHAR(120),
    telefone VARCHAR(20)
);


### *TABELA: Cobranças*

sql
CREATE TABLE cobrancas (
    id SERIAL PRIMARY KEY,
    cliente_id INT REFERENCES clientes(id),
    descricao TEXT,
    valor NUMERIC(10,2) NOT NULL,
    status VARCHAR(20) DEFAULT 'pendente',
    vencimento DATE NOT NULL,
    criado_em TIMESTAMP DEFAULT NOW()
);

TABELA: Pagamentos

sql
CREATE TABLE pagamentos (
    id SERIAL PRIMARY KEY,
    cobranca_id INT REFERENCES cobrancas(id),
    valor_pago NUMERIC(10,2),
    data_pagamento DATE,
    forma_pagamento VARCHAR(50)
);


Carga Inicial

sql
INSERT INTO usuarios (nome, email, senha)
VALUES ('Administrador', 'admin@infotech.com', '123456');


14. Integração com o Frontend

A comunicação entre frontend e banco acontece via backend (APIs REST).

Fluxo da integração

1. Usuário aciona uma função no frontend
2. Front envia requisição para a API
3. API valida os dados
4. API consulta ou grava no banco
5. API envia resposta em JSON
6. Front atualiza a tela em tempo real

Exemplos de telas integradas

* Dashboard financeiro
* Lista de cobranças
* Cadastro de clientes
* Relatórios de inadimplência
* Histórico de pagamentos

Tudo foi planejado para garantir experiência fluida e tempo de resposta rápido.

15. Conclusão Técnica da Parte de Banco de Dados

A engenharia do banco foi uma parte essencial do projeto InfoTech CRM.
Minhas principais contribuições como Engenheira de Banco de Dados foram:

Modelagem completa (MER/DER)

 Criação da base PostgreSQL

 Desenvolvimento dos scripts SQL

 Suporte à equipe do backend na integração

 Organização da documentação técnica

 Garantia de integridade e desempenho do sistema

O banco ficou estruturado, escalável e totalmente integrado com os módulos implementados (Cobrança e Relatórios).
