# Diagrama de Containers (Nível 2) - API Backend do CRM

Este diagrama detalha a arquitetura interna do sistema CRM, focando nos contêineres que compõem a solução. Ele destaca a interação entre os principais usuários — representantes de vendas, gestores e equipe de Help Desk — e os componentes do sistema.

O diagrama mostra o **Web App** como interface principal para módulos de vendas, estoque e relatórios, que consome a **API Backend**, responsável por expor rotas de negócio via REST ou GraphQL. O backend acessa bancos de dados distintos para clientes, projetos e finanças, além de integrar-se com serviços externos como ERP, autenticação e serviço de e-mail. Também utiliza um serviço de mensageria para envio de notificações à equipe de Help Desk.

Este nível de detalhamento facilita a compreensão da estrutura modular e as interações entre os contêineres do sistema.

```mermaid
%% C4 Model - Level 2: Container Diagram focado na API Backend
graph TB
    %% ====== Estilos ======
    classDef person fill:#EBF5FB,stroke:#2980B9,stroke-width:2px;
    classDef container fill:#D6EAF8,stroke:#2471A3,stroke-width:2px;
    classDef external fill:#EAF2F8,stroke:#5DADE2,stroke-dasharray: 5 5;

    %% ====== Usuários ======
    SalesRep["<b>Representante de Vendas</b>"]:::person
    Manager["<b>Gestor</b>"]:::person
    Operator["<b>Equipe de Help Desk</b>"]:::person

    %% ====== Contêineres Internos ======
    WebApp["<b>Web App</b><br/>Interface para Vendas, Estoque, Relatórios"]:::container
    Backend["<b>API Backend</b><br/>Expõe rotas de negócio (REST/GraphQL)"]:::container
    DB_Clientes["<b>BD - Clientes</b>"]:::container
    DB_Projetos["<b>BD - Projetos e Produção</b>"]:::container
    DB_Financeiro["<b>BD - Financeiro / RH / Logística</b>"]:::container
    Queue["<b>Serviço de Mensageria</b><br/>Notificações para Help Desk"]:::container

    %% ====== Sistemas Externos ======
    ERP["<b>ERP Corporativo</b>"]:::external
    Email["<b>Serviço de E-mail</b>"]:::external
    Auth["<b>Serviço de Autenticação</b>"]:::external

    %% ====== Relacionamentos ======
    SalesRep -->|<b>Usa via navegador</b>| WebApp
    Manager -->|<b>Acessa dashboards</b>| WebApp
    Operator -->|<b>Recebe alertas</b>| Queue

    WebApp -->|<b>Chama rotas</b>| Backend
    Backend -->|<b>Lê/grava</b>| DB_Clientes
    Backend -->|<b>Lê/grava</b>| DB_Projetos
    Backend -->|<b>Lê/grava</b>| DB_Financeiro

    Backend -->|<b>Publica mensagens</b>| Queue
    Backend -->|<b>Autentica usuários</b>| Auth
    Backend -->|<b>Sincroniza dados</b>| ERP
    Backend -->|<b>Envia e-mails</b>| Email
