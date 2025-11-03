## Aula 5: Princípios de Arquitetura de Software

Nesta aula, vamos explorar princípios fundamentais de arquitetura de software que são essenciais para construir aplicações robustas, escaláveis e de fácil manutenção. Embora muitos desses princípios tenham sido formulados em contextos de backend, sua aplicação no desenvolvimento front-end, especialmente com frameworks modernos como React, é extremamente valiosa. Abordaremos os princípios **SOLID**, **DRY** e **KISS**.

### Princípios SOLID (em um contexto de front-end)

Os princípios SOLID são um conjunto de cinco princípios de design de software que visam tornar os designs de software mais compreensíveis, flexíveis e manuteníveis. Eles foram popularizados por Robert C. Martin (Uncle Bob).

#### S - Single Responsibility Principle (Princípio da Responsabilidade Única)

**Definição:** Uma classe (ou módulo, componente) deve ter apenas uma razão para mudar, ou seja, deve ter apenas uma responsabilidade.

**Contexto Front-end (React):** Um componente React deve ter uma única responsabilidade bem definida. Isso significa que um componente deve fazer uma coisa e fazê-la bem. Evite componentes "faz-tudo" que gerenciam estado, buscam dados, renderizam UI complexa e manipulam eventos.

**Exemplo Ruim:**

```javascript
// Componente que busca dados, gerencia estado e renderiza uma lista de usuários
function UserList() {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(
      "https://jsonplaceholder.typicode.com/users"
    )
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Carregando usuários...</p>;
  }

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

**Exemplo Bom (aplicando SRP):**

```javascript
// Componente responsável por buscar dados
function useFetchUsers() {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(
      "https://jsonplaceholder.typicode.com/users"
    )
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return { users, loading };
}

// Componente responsável por renderizar a lista
function UserListView({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// Componente orquestrador
function UserList() {
  const { users, loading } = useFetchUsers();

  if (loading) {
    return <p>Carregando usuários...</p>;
  }

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <UserListView users={users} />
    </div>
  );
}
```

#### O - Open/Closed Principle (Princípio Aberto/Fechado)

**Definição:** Entidades de software (classes, módulos, funções, etc.) devem ser abertas para extensão, mas fechadas para modificação.

**Contexto Front-end (React):** Componentes devem ser projetados de forma que novas funcionalidades possam ser adicionadas sem alterar o código existente do componente. Isso é frequentemente alcançado através do uso de props, slots, HOCs (Higher-Order Components) ou Render Props.

**Exemplo:** Um componente `Button` que pode ter diferentes estilos sem modificar seu código interno.

```javascript
// Componente Button genérico
function Button({ children, variant = 'primary', onClick }) {
  const baseStyle = "px-4 py-2 rounded";
  let variantStyle = "";

  switch (variant) {
    case 'primary':
      variantStyle = "bg-blue-500 text-white";
      break;
    case 'secondary':
      variantStyle = "bg-gray-300 text-gray-800";
      break;
    case 'danger':
      variantStyle = "bg-red-500 text-white";
      break;
    default:
      variantStyle = "bg-blue-500 text-white";
  }

  return (
    <button className={`${baseStyle} ${variantStyle}`} onClick={onClick}>
      {children}
    </button>
  );
}

// Uso:
// <Button variant="primary">Salvar</Button>
// <Button variant="danger">Excluir</Button>
// Para adicionar um novo estilo, basta estender o componente com uma nova prop ou um novo componente que o encapsule, sem modificar o Button original.
```

#### L - Liskov Substitution Principle (Princípio da Substituição de Liskov)

**Definição:** Objetos em um programa devem ser substituíveis por instâncias de seus subtipos sem alterar a correção do programa.

**Contexto Front-end (React):** Componentes filhos (ou componentes que implementam uma interface comum) devem ser substituíveis por seus pais sem quebrar a aplicação. Isso se aplica a como os componentes interagem via props. Se um componente espera um tipo específico de prop, qualquer componente que o substitua deve ser capaz de lidar com essa prop da mesma maneira.

**Exemplo:** Um componente `DisplayItem` que pode renderizar diferentes tipos de itens, desde que eles sigam uma estrutura de dados comum.

```javascript
// Componente base que espera um objeto com 'id' e 'name'
function DisplayItem({ item }) {
  return (
    <div className="item">
      <p>ID: {item.id}</p>
      <p>Nome: {item.name}</p>
    </div>
  );
}

// Uso com diferentes tipos de dados que seguem a mesma 

estrutura:

```javascript
// Dados de um usuário
const user = { id: 1, name: "Alice" };
// Dados de um produto
const product = { id: 101, name: "Teclado Mecânico" };

// Ambos podem ser passados para DisplayItem sem problemas
// <DisplayItem item={user} />
// <DisplayItem item={product} />
```

#### I - Interface Segregation Principle (Princípio da Segregação de Interfaces)

**Definição:** Clientes não devem ser forçados a depender de interfaces que não utilizam. Interfaces grandes devem ser divididas em interfaces menores e mais específicas.

**Contexto Front-end (React):** Props de componentes devem ser específicas e relevantes para a funcionalidade do componente. Evite passar um objeto gigante de props para um componente que só usa uma pequena parte dele. Isso torna o componente mais flexível e menos acoplado a dados desnecessários.

**Exemplo Ruim:**

```javascript
// Componente que recebe um objeto de usuário completo, mas só usa o nome
function UserGreeting({ user }) {
  return <p>Olá, {user.name}!</p>;
}

// Uso:
// const currentUser = { id: 1, name: "Alice", email: "alice@example.com", address: "..." };
// <UserGreeting user={currentUser} /> // Passando mais dados do que o necessário
```

**Exemplo Bom (aplicando ISP):**

```javascript
// Componente que recebe apenas o que precisa
function UserGreeting({ userName }) {
  return <p>Olá, {userName}!</p>;
}

// Uso:
// const currentUser = { id: 1, name: "Alice", email: "alice@example.com", address: "..." };
// <UserGreeting userName={currentUser.name} /> // Passando apenas o nome
```

#### D - Dependency Inversion Principle (Princípio da Inversão de Dependência)

**Definição:** Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações. Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.

**Contexto Front-end (React):** Componentes devem depender de abstrações (como interfaces ou funções utilitárias genéricas) em vez de implementações concretas. Isso é frequentemente visto no uso de **hooks customizados** para abstrair a lógica de negócios ou acesso a dados, permitindo que os componentes de UI sejam agnósticos à forma como esses dados são obtidos ou manipulados.

**Exemplo Ruim:**

```javascript
// Componente que depende diretamente de uma implementação específica de API
function ProductDisplay() {
  const [product, setProduct] = React.useState(null);

  React.useEffect(() => {
    // Dependência direta da função fetchProductFromAPI
    fetchProductFromAPI(123).then(data => setProduct(data));
  }, []);

  if (!product) return <p>Carregando produto...</p>;
  return <h1>{product.name}</h1>;
}

// Função de baixo nível
function fetchProductFromAPI(id) {
  return fetch(`/api/products/${id}`).then(res => res.json());
}
```

**Exemplo Bom (aplicando DIP com Custom Hook):**

```javascript
// Abstração: Custom Hook para buscar produtos
function useProduct(productId) {
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    // A dependência é de uma função abstrata (ou injetada)
    // Aqui, estamos simulando uma injeção de dependência ou um serviço abstrato
    const productService = { // Isso poderia vir de um contexto ou ser injetado
      getProduct: (id) => fetch(`/api/products/${id}`).then(res => res.json())
    };
    productService.getProduct(productId)
      .then(data => setProduct(data))
      .finally(() => setLoading(false));
  }, [productId]);

  return { product, loading };
}

// Componente de alto nível que depende da abstração (useProduct)
function ProductDisplay({ productId }) {
  const { product, loading } = useProduct(productId);

  if (loading) return <p>Carregando produto...</p>;
  if (!product) return <p>Produto não encontrado.</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
}
```

### DRY (Don't Repeat Yourself)

**Definição:** O princípio **DRY** afirma que "Cada pedaço de conhecimento deve ter uma representação única, inequívoca e autoritária dentro de um sistema". Em outras palavras, evite duplicação de código e lógica.

**Contexto Front-end:** A importância de criar componentes reutilizáveis e funções utilitárias. Se você se encontra escrevendo o mesmo bloco de código várias vezes, é um sinal de que você pode abstraí-lo em uma função, um componente ou um hook customizado.

**Exemplo:**

```javascript
// Ruim: Lógica de formatação de data duplicada
function ComponentA({ date }) {
  const formattedDate = new Date(date).toLocaleDateString("pt-BR");
  return <p>Data: {formattedDate}</p>;
}

function ComponentB({ date }) {
  const formattedDate = new Date(date).toLocaleDateString("pt-BR");
  return <p>Criado em: {formattedDate}</p>;
}

// Bom: Abstraindo a lógica em uma função utilitária
function formatarData(dateString) {
  return new Date(dateString).toLocaleDateString("pt-BR");
}

function ComponentA_DRY({ date }) {
  return <p>Data: {formatarData(date)}</p>;
}

function ComponentB_DRY({ date }) {
  return <p>Criado em: {formatarData(date)}</p>;
}
```

### KISS (Keep It Simple, Stupid)

**Definição:** O princípio **KISS** sugere que a maioria dos sistemas funciona melhor se forem mantidos simples, em vez de tornados complexos. A simplicidade deve ser um objetivo chave no design, e a complexidade desnecessária deve ser evitada.

**Contexto Front-end:** A preferência por soluções mais simples e legíveis. Evite engenharia excessiva (over-engineering). Se uma solução simples resolve o problema de forma eficaz, não introduza complexidade desnecessária com padrões de design complexos ou bibliotecas adicionais.

**Exemplo:**

```javascript
// Ruim: Lógica desnecessariamente complexa para alternar um booleano
function ToggleButtonComplex() {
  const [isOn, setIsOn] = React.useState(false);

  const handleToggle = () => {
    // Lógica complexa para algo simples
    const newState = !isOn;
    setIsOn(newState);
    if (newState) {
      console.log("Ligado!");
    } else {
      console.log("Desligado!");
    }
  };

  return <button onClick={handleToggle}>{isOn ? "ON" : "OFF"}</button>;
}

// Bom: Solução simples e direta
function ToggleButtonSimple() {
  const [isOn, setIsOn] = React.useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return <button onClick={handleToggle}>{isOn ? "ON" : "OFF"}</button>;
}
```

### Conclusão

Os princípios de arquitetura de software, como SOLID, DRY e KISS, são guias valiosos para qualquer desenvolvedor que busca construir aplicações de alta qualidade. Ao aplicá-los, mesmo em um contexto de front-end com JavaScript e React, você pode criar código mais limpo, mais fácil de entender, testar e manter. Eles promovem a modularidade, a flexibilidade e a resiliência do seu software, transformando você de um "construtor de páginas" em um verdadeiro "engenheiro de software".
