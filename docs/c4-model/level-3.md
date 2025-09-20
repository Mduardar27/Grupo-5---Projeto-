```mermaid
C4Component
    title CRM de Cobrança - Nível 3 (Componentes)

    Container_Boundary(crm, "CRM de Cobrança") {
        Component(fin, "Módulo Financeiro", "Gerencia cobranças, boletos e pagamentos")
        Component(rep, "Módulo de Relatórios", "Geração de dashboards, relatórios PDF/Excel")
        Component(auth, "Autenticação e Permissões", "Gerencia login, perfis e autorizações")
        Component(api, "API REST", "Exposição de serviços para frontend e integrações")
        Component(db, "Banco de Dados", "Armazena clientes, cobranças, pagamentos e relatórios")
    }

    System_Ext(bank, "Sistema Bancário", "Integração de boletos e retorno CNAB")
    System_Ext(erp, "ERP Corporativo", "Integração contábil")
    System_Ext(notify, "Gateway de Notificações", "Envio de e-mails e SMS")

    Rel(api, fin, "Envia/recebe dados financeiros")
    Rel(api, rep, "Consulta e gera relatórios")
    Rel(api, auth, "Autentica e autoriza usuários")
    Rel(fin, db, "Registra cobranças e pagamentos")
    Rel(rep, db, "Consulta dados consolidados")
    Rel(auth, db, "Gerencia credenciais e perfis")

    Rel(fin, bank, "Integra boletos e retorno bancário")
    Rel(rep, erp, "Exporta relatórios contábeis")
    Rel(fin, notify, "Dispara notificações de cobrança")

