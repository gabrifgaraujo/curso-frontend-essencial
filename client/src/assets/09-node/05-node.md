# Módulo 4: Tópicos Avançados e Boas Práticas

## Tópico 4.5: Práticas Modernas para 2025

O ecossistema Node.js está em constante evolução, com novas funcionalidades e melhores práticas surgindo regularmente. Para manter suas aplicações atualizadas, seguras e eficientes, é fundamental adotar as práticas mais modernas. Este tópico aborda o uso de APIs nativas da Web, tratamento de erros robusto e monitoramento de vulnerabilidades.

### Uso de APIs Nativas da Web, como `fetch`

Historicamente, para fazer requisições HTTP em Node.js, era comum usar módulos como `http` (nativo, mas de baixo nível) ou bibliotecas de terceiros como `axios` ou `node-fetch`. No entanto, com a evolução do Node.js, muitas APIs que antes eram exclusivas do navegador estão sendo implementadas nativamente no ambiente de tempo de execução do servidor. Uma das mais notáveis é a `Fetch API`.

#### `Fetch API` em Node.js

A `Fetch API` oferece uma interface moderna e baseada em Promises para fazer requisições de rede. Ela é familiar para desenvolvedores frontend e agora está disponível nativamente no Node.js (a partir da versão 18, sem a necessidade de instalar pacotes adicionais).

**Vantagens:**
*   **Padronização:** Mesma API usada no navegador, facilitando o desenvolvimento full-stack.
*   **Baseado em Promises:** Integra-se naturalmente com `async/await`, tornando o código assíncrono mais limpo.
*   **Streaming:** Suporte a streams para lidar com grandes volumes de dados de forma eficiente.

**Exemplo de Uso:**

```javascript
// src/services/apiService.js
async function fetchData(url, options = {}) {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      // Lidar com erros HTTP (4xx, 5xx)
      const errorData = await response.json();
      throw new Error(`Erro HTTP: ${response.status} - ${errorData.message || response.statusText}`);
    }

    // Verifica o tipo de conteúdo para parsear corretamente
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return await response.json();
    } else {
      return await response.text(); // Ou response.blob(), response.arrayBuffer()
    }
  } catch (error) {
    console.error("Erro na requisição fetch:", error.message);
    throw error; // Re-lança o erro para ser tratado pelo chamador
  }
}

// Exemplo de uso em um controlador
// src/controllers/externalDataController.js
async function getExternalUsers(req, res) {
  try {
    const users = await fetchData("https://jsonplaceholder.typicode.com/users");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Falha ao buscar usuários externos", error: error.message });
  }
}

// Exemplo de POST
async function postNewData(req, res) {
  try {
    const newData = { title: "foo", body: "bar", userId: 1 };
    const result = await fetchData("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: "Falha ao enviar dados", error: error.message });
  }
}

module.exports = { fetchData, getExternalUsers, postNewData };
```

### Tratamento de Erros e `Graceful Shutdown`

Um tratamento de erros robusto e um `graceful shutdown` (desligamento gracioso) são essenciais para a estabilidade e confiabilidade de aplicações em produção. Erros não tratados podem derrubar sua aplicação, e um desligamento abrupto pode levar à perda de dados ou estados inconsistentes.

#### Tratamento de Erros

1.  **`try...catch` para Código Síncrono e `async/await`:** Use `try...catch` para capturar exceções em blocos de código síncrono e dentro de funções `async` que usam `await`.

    ```javascript
    // Exemplo em um controlador
    exports.createProduct = async (req, res) => {
      try {
        // ... lógica de criação de produto ...
      } catch (error) {
        console.error("Erro ao criar produto:", error);
        res.status(500).json({ message: "Erro interno do servidor" });
      }
    };
    ```

2.  **Middlewares de Erro no Express:** Para erros que ocorrem em middlewares ou rotas, o Express.js pode encaminhá-los para um middleware de tratamento de erros especial (com 4 argumentos: `(err, req, res, next)`).

    ```javascript
    // src/middlewares/errorHandler.js
    const errorHandler = (err, req, res, next) => {
      console.error(err.stack); // Loga o stack trace do erro

      const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
      res.status(statusCode).json({
        message: err.message,
        // Em produção, não envie o stack trace para o cliente
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
      });
    };

    module.exports = errorHandler;

    // Em app.js, adicione no final, após todas as rotas e outros middlewares
    const errorHandler = require("./middlewares/errorHandler");
    app.use(errorHandler);
    ```

3.  **Captura de Exceções Não Tratadas:** Para erros que não são capturados por `try...catch` ou middlewares, Node.js fornece eventos globais.

    *   `process.on('uncaughtException')`: Captura exceções síncronas não tratadas.
    *   `process.on('unhandledRejection')`: Captura Promises rejeitadas que não foram tratadas com `.catch()`.

    ```javascript
    // Em server.js ou um arquivo de configuração de erro
    process.on("uncaughtException", (err) => {
      console.error("Erro síncrono não tratado! Desligando...");
      console.error(err.name, err.message, err.stack);
      // Opcional: Enviar log para um serviço de monitoramento
      process.exit(1); // Encerra o processo
    });

    process.on("unhandledRejection", (err, promise) => {
      console.error("Rejeição de Promise não tratada! Desligando...");
      console.error(err.name, err.message, err.stack);
      // Opcional: Enviar log para um serviço de monitoramento
      process.exit(1); // Encerra o processo
    });
    ```

#### `Graceful Shutdown`

Um `graceful shutdown` permite que sua aplicação termine as requisições em andamento e feche conexões com bancos de dados ou outros serviços antes de ser encerrada. Isso evita perda de dados e estados inconsistentes.

```javascript
// Em server.js
const app = require("./src/app");
const connectDB = require("./src/config/db"); // Se estiver usando DB

// Conecta ao banco de dados (se aplicável)
connectDB();

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// Lidar com desligamento do processo (Ctrl+C, SIGTERM, etc.)
process.on("SIGTERM", () => {
  console.log("SIGTERM recebido. Iniciando desligamento gracioso...");
  server.close(() => {
    console.log("Servidor HTTP fechado.");
    // Fechar conexão com o banco de dados
    if (connectDB.connection) {
      connectDB.connection.close(false, () => {
        console.log("Conexão com o banco de dados fechada.");
        process.exit(0);
      });
    } else {
      process.exit(0);
    }
  });
});

process.on("SIGINT", () => {
  console.log("SIGINT recebido. Iniciando desligamento gracioso...");
  server.close(() => {
    console.log("Servidor HTTP fechado.");
    if (connectDB.connection) {
      connectDB.connection.close(false, () => {
        console.log("Conexão com o banco de dados fechada.");
        process.exit(0);
      });
    } else {
      process.exit(0);
    }
  });
});

// Para MongoDB com Mongoose, você pode usar:
// mongoose.connection.close(() => { console.log('Mongoose connection disconnected'); process.exit(0); });
```

### Monitoramento de Vulnerabilidades com `npm audit`

Manter as dependências do seu projeto atualizadas e livres de vulnerabilidades é uma prática de segurança crucial. O `npm audit` é uma ferramenta integrada ao npm que verifica seu projeto em busca de vulnerabilidades de segurança conhecidas nas suas dependências.

#### Como Usar `npm audit`

Execute o comando no diretório raiz do seu projeto:

```bash
npm audit
```

O `npm audit` irá:
*   Analisar seu `package-lock.json`.
*   Comparar as dependências com um banco de dados de vulnerabilidades conhecido.
*   Gerar um relatório detalhado sobre quaisquer vulnerabilidades encontradas, incluindo a severidade, o pacote afetado e a solução proposta.

#### Solucionando Vulnerabilidades

*   **`npm audit fix`:** Tenta corrigir automaticamente as vulnerabilidades instalando versões compatíveis das dependências que não possuem as falhas. Isso geralmente funciona para vulnerabilidades de baixa e média severidade.

    ```bash
    npm audit fix
    ```

*   **`npm audit fix --force`:** Se `npm audit fix` não conseguir resolver todas as vulnerabilidades devido a conflitos de dependência, você pode tentar `--force`. No entanto, isso pode instalar versões que quebram a compatibilidade com seu código, então use com cautela e teste exaustivamente.

*   **Atualização Manual:** Para vulnerabilidades mais complexas ou quando `npm audit fix` não funciona, você pode precisar atualizar manualmente as dependências para versões que corrigem a vulnerabilidade. Isso pode envolver a atualização de dependências diretas ou transitivas.

*   **Ignorar (com cautela):** Em casos raros, se uma vulnerabilidade não for aplicável ao seu caso de uso ou se não houver uma correção disponível, você pode optar por ignorá-la. No entanto, isso deve ser feito com extrema cautela e após uma análise de risco completa.

#### Boas Práticas de Segurança de Dependências

*   **Execute `npm audit` regularmente:** Integre-o ao seu pipeline de CI/CD.
*   **Mantenha as dependências atualizadas:** Use `npm outdated` para verificar dependências desatualizadas e atualize-as regularmente.
*   **Revise as dependências:** Antes de adicionar uma nova dependência, verifique sua reputação, número de downloads, problemas abertos e histórico de segurança.
*   **Use ferramentas de segurança:** Considere ferramentas de segurança de terceiros que oferecem monitoramento contínuo de vulnerabilidades e alertas.

### Conclusão

Adotar práticas modernas no desenvolvimento Node.js é fundamental para construir aplicações robustas, seguras e eficientes. O uso de APIs nativas como `fetch` simplifica o código e padroniza a experiência. Um tratamento de erros abrangente e um `graceful shutdown` garantem a resiliência da aplicação. Por fim, o monitoramento contínuo de vulnerabilidades com `npm audit` e a manutenção de dependências atualizadas são essenciais para proteger sua aplicação contra ameaças de segurança. Ao incorporar essas práticas, você estará construindo aplicações Node.js prontas para os desafios de 2025 e além.

---

