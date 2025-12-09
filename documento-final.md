# PROJETO INTEGRADOR – INFOTECH CRM

**Disciplina:** Projeto de Administração de Banco de Dados  
**Entrega:** Documentação Técnica Final – Engenharia de Banco de Dados  
**Status:** Concluído

---

## 1. INTRODUÇÃO

Este documento técnico visa descrever a arquitetura, a implementação e as estratégias de integração do banco de dados desenvolvido para o projeto **InfoTech CRM**. 💾 A engenharia de dados priorizou a **integridade referencial**, o **desempenho** nas consultas e a **escalabilidade** do sistema.

A solução é baseada no **modelo relacional** e foi implementada utilizando o SGBD **MySQL**. A estrutura segue rigorosamente as formas normais, garantindo a atomicidade dos dados e a confiabilidade das transações para os módulos de Cobrança e Relatórios.

---

## 2. DIRETRIZES DE ARQUITETURA DE DADOS

Para garantir a qualidade e a manutenibilidade do código SQL, foram estabelecidas as seguintes diretrizes técnicas:

* **Padronização de Nomenclatura:** Uso consistente do padrão *snake_case* (`tabela_exemplo`, `coluna_nome`).
* **Identificadores Únicos:** Utilização de chaves primárias autoincrementais (`INT AUTO_INCREMENT PRIMARY KEY`) para todas as entidades.
* **Integridade Referencial:** Definição explícita de **Chaves Estrangeiras** (`FOREIGN KEY`) para assegurar o relacionamento entre as tabelas (Engine InnoDB).
* **Qualidade dos Dados:** Aplicação de `NOT NULL` em campos essenciais e tipagem rigorosa (`DECIMAL(10,2)` para valores monetários).
* **Normalização:** Estrutura projetada para evitar redundâncias e anomalias de dados.
* **Organização:** Scripts de criação (DDL) e migração separados e versionados.

---

## 3. MODELAGEM DE DADOS (MER/DER)

O Modelo Entidade-Relacionamento (MER) foi desenvolvido a partir da análise dos requisitos funcionais, definindo as entidades e os relacionamentos necessários para o funcionamento do CRM.

### 3.1. Entidades do Sistema

As entidades principais que compõem o esquema de banco de dados são:

* **`usuarios`**: Gestão de acesso e autenticação.
* **`clientes`**: Base de dados de cadastros.
* **`cobrancas`**: Registro de débitos, valores e status.
* **`pagamentos`**: Controle de transações e baixas financeiras.
* **`projetos_solicitacoes`**: (Se aplicável) Gestão de demandas internas.
* **`logs`**: Rastreamento de ações para auditoria.

### 3.2. Principais Relacionamentos

A cardinalidade definida é essencial para a lógica de negócio:

* **Usuário 1:N Cobranças:** Um usuário pode ser responsável pelo registro de múltiplas cobranças.
* **Cliente 1:N Cobranças:** Cada cobrança pertence a um único cliente.
* **Cliente 1:N Pagamentos:** Um cliente pode ter múltiplos pagamentos associados.

### 3.3. Justificativa da Modelagem

O modelo foi desenhado para **suportar a automação das cobranças**, **garantir controle de inadimplência** e **facilitar a geração de relatórios e *dashboards*** com alta performance.

---

## 4. INTEGRAÇÃO BACKEND E BANCO DE DADOS

O Backend foi desenvolvido em **PHP**, utilizando padrões de projeto RESTful para comunicação eficiente com o MySQL.

### 4.1. Interfaces de Programação (APIs)

A comunicação entre o sistema e o banco de dados é intermediada pelas seguintes rotas principais:

| Rota | Descrição | Operação no Banco |
| :--- | :--- | :--- |
| `/auth/login` | Login e Autenticação | `SELECT` |
| `/usuarios` | CRUD completo | `INSERT`, `SELECT`, `UPDATE`, `DELETE` |
| `/clientes` | Cadastro e Edição de Clientes | `INSERT`, `SELECT`, `UPDATE` |
| `/cobrancas` | Criação e Gerenciamento de Débitos | `INSERT`, `SELECT`, `UPDATE` |
| `/pagamentos` | Registro de Transações | `INSERT` |
| `/relatorios` | Dados Agregados | `SELECT` (SUM, COUNT, GROUP BY) |

### 4.2. Pontos Técnicos Implementados

A segurança e a consistência da integração foram asseguradas através de:

* **Conexão Segura:** Uso da biblioteca **PDO** (PHP Data Objects).
* **Prevenção de Injeção:** Utilização de ***Prepared Statements*** em todas as consultas.
* **Tratamento de Erros:** Implementação de `try/catch` para tratamento de exceções do banco.
* **Validação de Dados:** Rigorosa validação de *inputs* de entrada antes da execução das *queries*.
* **Padrão:** Separação por camadas (Controller, Service, Repository) para manter o código organizado.

---

## 5. SCRIPTS SQL (DDL E DML)

Os scripts abaixo representam a estrutura de Definição de Dados (DDL) e a Carga Inicial de Dados (DML) para o ambiente MySQL.

### 5.1. Definição das Tabelas (DDL)

```sql
-- Garante que o motor InnoDB seja usado para suportar FOREIGN KEYs
SET default_storage_engine=InnoDB; 

-- TABELA: usuarios
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(120) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL, 
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- TABELA: clientes
CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    email VARCHAR(120),
    telefone VARCHAR(20)
);

-- TABELA: cobrancas
CREATE TABLE cobrancas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    descricao TEXT,
    valor DECIMAL(10,2) NOT NULL,
    status VARCHAR(20) DEFAULT 'pendente',
    vencimento DATE NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_cliente_cobranca 
        FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

-- TABELA: pagamentos
CREATE TABLE pagamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cobranca_id INT NOT NULL,
    valor_pago DECIMAL(10,2) NOT NULL,
    data_pagamento DATE NOT NULL,
    forma_pagamento VARCHAR(50),
    CONSTRAINT fk_cobranca_pagamento 
        FOREIGN KEY (cobranca_id) REFERENCES cobrancas(id)
);

'''

6. INTEGRAÇÃO COM O FRONTEND
A comunicação entre Frontend e o MySQL é intermediada pela camada de Backend (APIs RESTful em PHP).
6.1. Fluxo de Dados
O ciclo de integração se resume nos seguintes passos:
1. Ação do Usuário: O usuário interage com o Frontend (ex: salva um cadastro).
2. Requisição: O Frontend envia a requisição para o endpoint da API em PHP.
3. Processamento: O PHP valida os dados e executa a query no MySQL.
4. Resposta: O MySQL retorna o resultado, que é formatado em JSON pelo PHP.
5. Atualização: O Frontend recebe a resposta JSON e atualiza a interface em tempo real.
6.2. Exemplos de Telas Integradas
• Dashboard Financeiro (consultas agregadas).
• Lista de Cobranças (CRUD).
• Cadastro de Clientes (CRUD).
• Relatórios de Inadimplência (consultas complexas).
7. CONCLUSÃO TÉCNICA
A engenharia do banco de dados foi fundamental para o sucesso do projeto InfoTech CRM. As principais contribuições para esta entrega foram:
• Modelagem Completa: Criação do MER/DER e sua tradução para o modelo físico MySQL.
• Base Implementada: Estruturação da base de dados com foco em desempenho e integridade.
• Suporte à Integração: Fornecimento dos scripts SQL otimizados para a equipe de Backend (PHP).
• Documentação: Organização da documentação técnica para futuras manutenções.
