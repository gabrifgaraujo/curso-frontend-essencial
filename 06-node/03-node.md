# Módulo 2: Frameworks e Construção de APIs RESTful

## Tópico 2.3: Construindo uma API RESTful Completa

Após entender os fundamentos do Express.js e os padrões de arquitetura, é hora de aplicar esse conhecimento na construção de uma API RESTful completa. Uma API RESTful (Representational State Transfer) é um conjunto de princípios arquitetônicos para projetar serviços web. Ela se baseia em recursos (resources) e utiliza métodos HTTP padrão para realizar operações sobre esses recursos.

### Princípios RESTful

*   **Recursos (Resources):** Tudo é um recurso (ex: usuários, produtos, pedidos). Cada recurso é identificado por uma URI única (Uniform Resource Identifier).
*   **Métodos HTTP:** Utiliza os métodos HTTP padrão (GET, POST, PUT, DELETE, PATCH) para realizar operações CRUD (Create, Read, Update, Delete) nos recursos.
    *   `GET /recursos`: Recupera uma lista de recursos.
    *   `GET /recursos/{id}`: Recupera um recurso específico.
    *   `POST /recursos`: Cria um novo recurso.
    *   `PUT /recursos/{id}`: Atualiza completamente um recurso existente.
    *   `PATCH /recursos/{id}`: Atualiza parcialmente um recurso existente.
    *   `DELETE /recursos/{id}`: Remove um recurso específico.
*   **Stateless (Sem Estado):** Cada requisição do cliente para o servidor deve conter todas as informações necessárias para entender a requisição. O servidor não deve armazenar nenhum estado do cliente entre as requisições.
*   **Uniform Interface (Interface Uniforme):** A forma como os clientes interagem com a API deve ser consistente, facilitando a compreensão e o uso.
*   **HATEOAS (Hypermedia as the Engine of Application State):** Opcional, mas recomendado. Os recursos devem conter links para outros recursos relacionados, guiando o cliente através da aplicação.

### Exemplo Prático: API de Produtos

Vamos construir uma API simples para gerenciar produtos. Para simplificar, inicialmente usaremos um array em memória para armazenar os produtos, e depois veremos como integrar com um banco de dados no próximo módulo.

#### Estrutura do Projeto (Revisão)

```
meu-projeto-api/
├── src/
│   ├── controllers/
│   │   └── productController.js
│   ├── routes/
│   │   └── productRoutes.js
│   ├── app.js
│   └── server.js
├── package.json
└── ...
```

#### 1. `server.js` (Ponto de Entrada)

```javascript
const app = require("./src/app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
```

#### 2. `app.js` (Configuração do Express)

```javascript
const express = require("express");
const productRoutes = require("./routes/productRoutes");

const app = express();

// Middleware para parsear JSON no corpo das requisições
app.use(express.json());

// Rotas da API de produtos
app.use("/api/products", productRoutes);

// Rota padrão para 404
app.use((req, res, next) => {
  res.status(404).json({ message: "Rota não encontrada" });
});

// Middleware de tratamento de erros (exemplo básico)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Erro interno do servidor" });
});

module.exports = app;
```

#### 3. `productController.js` (Lógica de Negócios e Manipulação de Dados)

```javascript
let products = [
  { id: "1", name: "Laptop", price: 1200, description: "Powerful laptop for work and gaming" },
  { id: "2", name: "Mouse", price: 25, description: "Ergonomic wireless mouse" },
  { id: "3", name: "Keyboard", price: 75, description: "Mechanical keyboard with RGB lighting" },
];

// Função utilitária para gerar IDs simples (para o exemplo em memória)
const generateId = () => {
  return String(products.length > 0 ? Math.max(...products.map(p => parseInt(p.id))) + 1 : 1);
};

// GET /api/products - Listar todos os produtos
exports.getAllProducts = (req, res) => {
  res.status(200).json(products);
};

// GET /api/products/:id - Obter um produto por ID
exports.getProductById = (req, res) => {
  const { id } = req.params;
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Produto não encontrado" });
  }
  res.status(200).json(product);
};

// POST /api/products - Criar um novo produto
exports.createProduct = (req, res) => {
  const { name, price, description } = req.body;

  // Validação básica
  if (!name || !price || !description) {
    return res.status(400).json({ message: "Nome, preço e descrição são obrigatórios" });
  }

  const newProduct = { id: generateId(), name, price, description };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

// PUT /api/products/:id - Atualizar um produto existente (completo)
exports.updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, price, description } = req.body;

  const productIndex = products.findIndex(p => p.id === id);

  if (productIndex === -1) {
    return res.status(404).json({ message: "Produto não encontrado" });
  }

  // Validação básica
  if (!name || !price || !description) {
    return res.status(400).json({ message: "Nome, preço e descrição são obrigatórios para atualização completa" });
  }

  products[productIndex] = { id, name, price, description };
  res.status(200).json(products[productIndex]);
};

// DELETE /api/products/:id - Deletar um produto
exports.deleteProduct = (req, res) => {
  const { id } = req.params;
  const initialLength = products.length;
  products = products.filter(p => p.id !== id);

  if (products.length === initialLength) {
    return res.status(404).json({ message: "Produto não encontrado" });
  }
  res.status(204).send(); // 204 No Content para deleção bem-sucedida
};
```

#### 4. `productRoutes.js` (Definição das Rotas)

```javascript
const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.post("/", productController.createProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
```

### Recebendo e Validando Dados

#### `req.body`

Para receber dados enviados no corpo da requisição (geralmente em requisições POST, PUT, PATCH), o Express.js precisa de um middleware para parsear esse corpo. `express.json()` é o middleware mais comum para JSON.

```javascript
// Em app.js
app.use(express.json());

// Em um controller (ex: createProduct)
const { name, price, description } = req.body;
```

#### `req.params`

Usado para capturar valores de segmentos dinâmicos na URL (parâmetros de rota).

```javascript
// Rota: /api/products/:id
// URL: /api/products/123
const { id } = req.params; // id será "123"
```

#### `req.query`

Usado para capturar parâmetros de consulta na URL (após o `?`).

```javascript
// URL: /api/products?category=electronics&limit=10
const { category, limit } = req.query; // category será "electronics", limit será "10"
```

#### Validação de Dados

É crucial validar os dados recebidos do cliente para garantir a integridade da aplicação e prevenir ataques. No exemplo acima, fizemos uma validação básica. Em aplicações reais, você usaria bibliotecas como `Joi`, `Yup` ou `express-validator`.

```javascript
// Exemplo de validação com express-validator (requer instalação: npm install express-validator)
const { body, validationResult } = require("express-validator");

// Middleware de validação para criação de produto
const validateProduct = [
  body("name").notEmpty().withMessage("Nome é obrigatório"),
  body("price").isFloat({ gt: 0 }).withMessage("Preço deve ser um número positivo"),
  body("description").isLength({ min: 10 }).withMessage("Descrição deve ter no mínimo 10 caracteres"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// No productRoutes.js
router.post("/", validateProduct, productController.createProduct);
```

### Retornando Dados e Códigos de Status HTTP Corretos

Uma API RESTful deve sempre retornar códigos de status HTTP apropriados para indicar o resultado de uma operação. Isso ajuda os clientes a entenderem o que aconteceu com a requisição.

#### Códigos de Status HTTP Comuns:

*   **`200 OK`**: Requisição bem-sucedida (GET, PUT, PATCH).
*   **`201 Created`**: Recurso criado com sucesso (POST).
*   **`204 No Content`**: Requisição bem-sucedida, mas sem conteúdo para retornar (DELETE).
*   **`400 Bad Request`**: Requisição malformada ou inválida (erros de validação).
*   **`401 Unauthorized`**: Autenticação necessária ou falhou.
*   **`403 Forbidden`**: Cliente autenticado, mas não tem permissão para acessar o recurso.
*   **`404 Not Found`**: Recurso não encontrado.
*   **`409 Conflict`**: Conflito com o estado atual do recurso (ex: tentar criar um recurso que já existe).
*   **`500 Internal Server Error`**: Erro genérico no servidor.

```javascript
// Exemplos no productController.js
res.status(200).json(products); // OK
res.status(201).json(newProduct); // Created
res.status(204).send(); // No Content
res.status(400).json({ message: "Erro de validação" }); // Bad Request
res.status(404).json({ message: "Produto não encontrado" }); // Not Found
res.status(500).json({ message: "Erro interno do servidor" }); // Internal Server Error
```

### Boas Práticas para o Design de APIs

*   **Nomes de Recursos no Plural:** Use nomes de recursos no plural (ex: `/products`, `/users`) para representar coleções.
*   **URIs Descritivas:** As URIs devem ser claras e refletir a hierarquia dos recursos (ex: `/users/{userId}/orders`).
*   **Versionamento da API:** Para permitir mudanças futuras sem quebrar clientes existentes, considere versionar sua API (ex: `/v1/products`, `/v2/products`).
*   **Paginação, Filtragem e Ordenação:** Para APIs que retornam grandes coleções, implemente parâmetros de query para paginação (`?page=1&limit=10`), filtragem (`?status=active`) e ordenação (`?sort=name:asc`).
*   **Documentação:** Documente sua API usando ferramentas como Swagger/OpenAPI para facilitar o consumo por outros desenvolvedores.
*   **Segurança:** Implemente autenticação, autorização e valide todas as entradas do usuário.

### Conclusão

Construir uma API RESTful completa envolve mais do que apenas definir rotas. Requer uma compreensão dos princípios REST, uma estrutura de projeto organizada, validação robusta de dados e o uso correto dos códigos de status HTTP. Ao seguir essas diretrizes e boas práticas, você pode criar APIs que são eficientes, seguras, fáceis de usar e manuteníveis, formando a base sólida para qualquer aplicação web moderna.

---

