# Diagrama de Componentes (Nível 3) - API Backend do CRM

Este diagrama detalha os componentes internos do contêiner **API Backend** do sistema CRM, mapeando os principais módulos e suas responsabilidades.

Os componentes incluem:

- **Módulo de Autenticação**, responsável por login, controle de acesso e permissões;
- **Módulo de Gestão de Clientes**, que realiza operações de CRUD e mantém o histórico de clientes;
- **Módulo de Projetos e Tarefas**, para gerenciamento das atividades e prazos;
- **Módulo de Controle de Produção**, que acompanha fluxos produtivos e gera relatórios;
- Integrações com sistemas externos, como **ERP**, **Mensageria** (para notificações), e **Serviço de E-mail**;
- **Camada de Acesso a Dados**, que abstrai a comunicação com os bancos de dados.

Este nível oferece uma visão detalhada da arquitetura do backend, facilitando o entendimento das responsabilidades de cada módulo e suas interações.

```mermaid
graph TB
    %% ====== Estilos ======
    classDef component fill:#D6EAF8,stroke:#2471A3,stroke-width:2px;
    classDef external fill:#EAF2F8,stroke:#5DADE2,stroke-dasharray: 5 5;

    %% ====== Componentes ======
    Auth["<b>Módulo de Autenticação</b><br/>Login, controle de acesso"]:::component
    Clientes["<b>Módulo de Gestão de Clientes</b><br/>CRUD e histórico"]:::component
    Projetos["<b>Módulo de Projetos e Tarefas</b><br/>Gerenciamento de atividades"]:::component
    Producao["<b>Módulo de Controle de Produção</b><br/>Fluxos produtivos e relatórios"]:::component
    DataAccess["<b>Camada de Acesso a Dados</b><br/>Comunicação com bancos de dados"]:::component

    %% ====== Serviços Externos ======
    ERP["<b>ERP Corporativo</b>"]:::external
    MsgQueue["<b>Serviço de Mensageria</b>"]:::external
    EmailService["<b>Serviço de E-mail</b>"]:::external

    %% ====== Relacionamentos ======
    Auth --> DataAccess
    Clientes --> DataAccess
    Projetos --> DataAccess
    Producao --> DataAccess

    Clientes --> MsgQueue
    Projetos --> MsgQueue

    Auth --> ERP
    Clientes --> ERP
    Producao --> ERP

    Projetos --> EmailService
    Producao --> EmailService
