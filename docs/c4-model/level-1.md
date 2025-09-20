# Diagrama de Contexto (Nível 1) - CRM

Este diagrama apresenta o contexto geral do sistema **CRM - Sistema Principal**, destacando os principais usuários e sistemas externos que interagem com ele. Os atores internos incluem usuários externos (clientes), representantes de vendas e gerentes, que acessam o sistema para diferentes finalidades, como registrar clientes, acompanhar métricas e realizar consultas.

Além disso, o sistema CRM se integra com sistemas externos relevantes, como o **ERP Corporativo** para troca de dados contábeis e logísticos, e um **Serviço de E-mail** para o envio de notificações aos usuários. Este diagrama ajuda a compreender as fronteiras do sistema e as principais interações com o ambiente ao seu redor.

```mermaid
%% C4 Model - Level 1: System Context Diagram (CRM)
graph TB
    %% ====== Class Definitions ======
    classDef person fill:#EBF5FB,stroke:#2980B9,stroke-width:2px;
    classDef system fill:#D6EAF8,stroke:#2471A3,stroke-width:2px;
    classDef external fill:#EAF2F8,stroke:#5DADE2,stroke-dasharray: 5 5;

    %% ====== Atores Internos e Externos ======
    Client["<b>Usuário Externo</b>"]:::person
    SalesRep["<b>Representante de Vendas</b>"]:::person
    Manager["<b>Gerente</b>"]:::person

    %% ====== Sistema Principal ======
    CRM["<b>CRM - Sistema Principal</b>"]:::system

    %% ====== Sistemas Externos ======
    ERP["<b>Sistema ERP</b>"]:::external
    Email["<b>Serviço de E-mail</b>"]:::external

    %% ====== Relações ======
    Client -->|<b>Interações via portal</b>| CRM
    SalesRep -->|<b>Registra e consulta clientes</b>| CRM
    Manager -->|<b>Acompanha métricas e relatórios</b>| CRM

    CRM -->|<b>Consulta e envia dados</b>| ERP
    CRM -->|<b>Envia notificações</b>| Email
