 Base de dados: `db_user_5`
--

-- --------------------------------------------------------


Estrutura da tabela `CLIENTES`
--

CREATE TABLE `CLIENTES` (
  `ID_CLIENTE` int NOT NULL,
  `NOME_RAZAO_SOCIAL` varchar(100) NOT NULL,
  `CPF_CNPJ` varchar(18) NOT NULL,
  `EMAIL` varchar(50) NOT NULL,
  `TELEFONE` varchar(11) NOT NULL,
  `DATA_CADASTRO` date NOT NULL,
  `SEGMENTO` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------


 Estrutura da tabela `Cobrancas`
--

CREATE TABLE `Cobrancas` (
  `ID_COBRANCAS` int NOT NULL,
  `ID_CONTRATO` int NOT NULL,
  `VALOR` decimal(10,2) NOT NULL,
  `DATA_EMISSAO` date NOT NULL,
  `DATA_VENCIMENTO` date NOT NULL,
  `STATUS` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------


 Estrutura da tabela `CONTAS_PAGAR`
--

CREATE TABLE `CONTAS_PAGAR` (
  `ID_CONTA` int NOT NULL,
  `FORNECEDOR` varchar(50) NOT NULL,
  `VALOR` decimal(10,2) NOT NULL,
  `VENCIMENTO` date NOT NULL,
  `STATUS` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------


 Estrutura da tabela `contas_receber`
--

CREATE TABLE `contas_receber` (
  `id_conta` int NOT NULL,
  `id_cliente` int NOT NULL,
  `valor` decimal(10,2) NOT NULL,
  `vencimento` date NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------


 Estrutura da tabela `CONTRATOS`
--

CREATE TABLE `CONTRATOS` (
  `ID_CONTRATO` int NOT NULL,
  `ID_CLIENTE` int NOT NULL,
  `DESCRICAO_SERVICO` varchar(100) NOT NULL,
  `DATA_INICIO` date NOT NULL,
  `DATA_FIM` date NOT NULL,
  `VALOR_TOTAL` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------


 Estrutura da tabela `LOGS`
--

CREATE TABLE `LOGS` (
  `ID_LOG` int NOT NULL,
  `ID_USUARIO` int NOT NULL,
  `ACAO` varchar(50) NOT NULL,
  `DATA_HORA` date NOT NULL,
  `IP` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------


Estrutura da tabela `PAGAMENTO`
--

CREATE TABLE `PAGAMENTO` (
  `ID_PAGAMENTO` int NOT NULL,
  `ID_COBRANCA` int NOT NULL,
  `VALOR_PAGO` decimal(10,2) NOT NULL,
  `DATA_PAGAMENTO` date NOT NULL,
  `FORMA_PAGAMENTO` varchar(10) NOT NULL,
  `STATUS` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------


 Estrutura da tabela `PERFIS_ACESSO`
--

CREATE TABLE `PERFIS_ACESSO` (
  `ID_PERFIL` int NOT NULL,
  `DESCRICAO` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------


Estrutura da tabela `RELATORIOS`
--

CREATE TABLE `RELATORIOS` (
  `ID_RELATORIO` int NOT NULL,
  `ID_USUARIO` int NOT NULL,
  `TIPO` varchar(50) NOT NULL,
  `PERIODO` varchar(50) NOT NULL,
  `DATA_GERACAO` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------


Estrutura da tabela `USUARIOS`
--

CREATE TABLE `USUARIOS` (
  `ID_USUARIO` int NOT NULL,
  `NOME` varchar(100) NOT NULL,
  `EMAIL` varchar(100) NOT NULL,
  `SENHA_HASH` varchar(50) NOT NULL,
  `CARGO` varchar(50) NOT NULL,
  `ID_PERFIL` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



