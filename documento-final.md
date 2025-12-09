
PROJETO INTEGRADOR – INFOTECH CRM
Disciplina: Projeto de Administração de Banco de Dados
Entrega: Documentação Técnica Final – Engenharia de Banco de Dados
1. INTRODUÇÃO
A presente documentação técnica descreve a arquitetura, implementação e integração do banco de dados desenvolvido para o projeto InfoTech CRM. O objetivo principal da engenharia de dados deste projeto foi assegurar a integridade, o desempenho e a escalabilidade do sistema.
A solução adotou o modelo relacional e foi implementada utilizando o SGBD MySQL. A estrutura foi desenhada observando as normas de normalização de dados e restrições de integridade (constraints), visando suportar os módulos de Cobrança e Relatórios com eficiência.
2. DIRETRIZES DE ARQUITETURA DE DADOS
Para garantir a qualidade e a manutenibilidade do código SQL, foram estabelecidas as seguintes diretrizes técnicas:
 * Padronização de Nomenclatura: Adoção de convenções claras para tabelas e colunas (snake_case).
 * Identificadores Únicos: Utilização de chaves primárias sequenciais (AUTO_INCREMENT) para todas as entidades.
 * Integridade Referencial: Definição rigorosa de chaves estrangeiras (FOREIGN KEY) para assegurar relacionamentos consistentes (Engine InnoDB).
 * Consistência de Dados: Aplicação da restrição NOT NULL em campos obrigatórios.
 * Normalização: Estruturação das tabelas visando a eliminação de redundâncias e anomalias de atualização.
 * Interoperabilidade: O banco foi configurado com collation utf8mb4_general_ci para suporte completo a caracteres especiais.
3. MODELAGEM DE DADOS (MER/DER)
O Modelo Entidade-Relacionamento (MER) e o Diagrama Entidade-Relacionamento (DER) foram desenvolvidos com base no levantamento de requisitos funcionais dos módulos do sistema.
> [Inserir Imagem do MER/DER aqui]
> Figura 1: Diagrama Entidade-Relacionamento do InfoTech CRM.
> 
3.1. Entidades do Sistema
O banco de dados compõe-se das seguintes entidades principais:
 * Usuários: Gestão de acesso e autenticação.
 * Clientes: Base de dados de pessoas físicas ou jurídicas atendidas.
 * Cobranças: Registro de débitos e faturas geradas.
 * Pagamentos: Controle de transações financeiras e baixas.
 * Projetos/Solicitações: Gestão de demandas.
 * Logs e Auditoria: Rastreamento de ações críticas no sistema.
3.2. Relacionamentos e Cardinalidade
A lógica de negócios impõe os seguintes relacionamentos:
 * Usuário x Cobranças (1:N): Um usuário pode registrar múltiplas cobranças.
 * Cliente x Cobrança (1:N): Uma cobrança pertence estritamente a um único cliente.
 * Cliente x Pagamentos (1:N): Um cliente pode possuir múltiplos registros de pagamentos.
3.3. Justificativa da Modelagem
A estrutura foi projetada para suportar a automação do ciclo de vida das cobranças, garantir o controle efetivo da inadimplência e fornecer dados estruturados para a geração de relatórios, permitindo escalabilidade futura.
4. INTEGRAÇÃO BACKEND E BANCO DE DADOS
A camada de aplicação (Backend) foi desenvolvida utilizando a linguagem PHP, realizando a comunicação com o banco de dados MySQL.
4.1. Interfaces de Programação (APIs)
As seguintes rotas e serviços interagem diretamente com a camada de dados:
| Recurso/Endpoint | Descrição |
|---|---|
| auth/login | Autenticação de usuários e controle de sessão. |
| usuarios | CRUD completo para gestão de operadores do sistema. |
| clientes | Cadastro, leitura e edição de dados de clientes. |
| cobrancas | Criação e gerenciamento do ciclo de vida das cobranças. |
| pagamentos | Registro e conciliação de pagamentos recebidos. |
| relatorios | Agregação de dados para visualização em dashboards. |
4.2. Implementação Técnica
A segurança e eficiência da integração foram asseguradas através de:
 * Uso da biblioteca PDO (PHP Data Objects) para abstração e segurança da conexão.
 * Utilização de Prepared Statements para prevenção de SQL Injection.
 * Tratamento de exceções com blocos try/catch.
 * Respostas padronizadas em formato JSON.
 * Gerenciamento de configurações de conexão (host, user, pass) em arquivo separado.
5. SCRIPTS SQL (DDL E DML)
Abaixo estão os scripts essenciais para a estruturação do banco de dados em sintaxe MySQL.
5.1. Definição de Tabelas (DDL)
-- Tabela de Usuários
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(120) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Clientes
CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    email VARCHAR(120),
    telefone VARCHAR(20)
);

-- Tabela de Cobranças
CREATE TABLE cobrancas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT,
    descricao TEXT,
    valor DECIMAL(10,2) NOT NULL,
    status VARCHAR(20) DEFAULT 'pendente',
    vencimento DATE NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

-- Tabela de Pagamentos
CREATE TABLE pagamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cobranca_id INT,
    valor_pago DECIMAL(10,2),
    data_pagamento DATE,
    forma_pagamento VARCHAR(50),
    FOREIGN KEY (cobranca_id) REFERENCES cobrancas(id)
);

5.2. Carga Inicial de Dados (Seed)
INSERT INTO usuarios (nome, email, senha) 
VALUES ('Administrador', 'admin@infotech.com', '123456');

6. FLUXO DE INTEGRAÇÃO COM FRONTEND
A interação do usuário final com o banco de dados ocorre de forma transparente através da arquitetura cliente-servidor:
 * Requisição: O usuário aciona uma funcionalidade no Frontend.
 * Processamento: O Frontend envia uma requisição para o script PHP correspondente.
 * Persistência: O PHP valida os dados e executa a query no MySQL.
 * Resposta: O banco retorna os dados, que são processados e enviados em JSON.
 * Renderização: O Frontend atualiza a interface em tempo real.
7. CONCLUSÃO TÉCNICA
A engenharia de banco de dados desempenhou um papel central no projeto InfoTech CRM. As contribuições realizadas nesta etapa incluíram:
 * Modelagem lógica e física completa (MER/DER);
 * Implementação da base de dados em ambiente MySQL;
 * Desenvolvimento e otimização de scripts SQL compatíveis;
 * Suporte técnico à integração com a equipe de Backend (PHP);
 * Documentação técnica para garantir a continuidade do projeto.
O resultado final é uma estrutura de dados robusta, normalizada e escalável, totalmente integrada aos módulos funcionais de Cobrança e Relatórios.
