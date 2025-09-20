C4Context
    title CRM de Cobrança - Diagrama de Contexto
    Person(usr_fin, "Equipe Financeira", "Gerencia cobranças e pagamentos")
    Person(usr_gest, "Gestores", "Acessam relatórios gerenciais")
    Person(usr_cli, "Clientes", "Consultam boletos e status de cobrança")

    System_Boundary(s1,"CRM de Cobrança") {
        System(crm, "CRM de Cobrança", "Sistema de gestão de cobranças")
    }

    System_Ext(bank, "Sistema Bancário", "Integração de boletos/pagamentos")
    System_Ext(erp, "ERP Corporativo", "Integração contábil")
    System_Ext(notify, "Gateway de Notificações", "Envio de e-mails e SMS")

    Rel(usr_fin, crm, "Gerencia cobranças")
    Rel(usr_gest, crm, "Consulta relatórios")
    Rel(usr_cli, crm, "Acessa portal do cliente")
    Rel(crm, bank, "Gera boletos e recebe retornos")
    Rel(crm, erp, "Exporta dados contábeis")
    Rel(crm, notify, "Envia notificações de cobrança")
