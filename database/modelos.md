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
