# Capítulo 4: Interfaces e Tipos (Type Aliases)

Para definir formas de objetos ou outras estruturas de dados complexas, o TypeScript nos oferece duas ferramentas principais: `interface` e `type`.

## Interfaces

Uma `interface` é uma forma poderosa de definir um "contrato" para a estrutura de um objeto. Se um objeto pretende implementar uma interface, ele deve ter todas as propriedades e métodos definidos nela.

```typescript
interface Usuario {
  id: number;
  nome: string;
  email: string;
}

function exibirUsuario(usuario: Usuario) {
  console.log(`Nome: ${usuario.nome}, Email: ${usuario.email}`);
}

const meuUsuario: Usuario = {
  id: 1,
  nome: "Carlos Silva",
  email: "carlos@exemplo.com"
};

exibirUsuario(meuUsuario);
```

### Propriedades Opcionais e `readonly`

- **Opcionais (`?`)**: Nem todas as propriedades de um objeto precisam ser obrigatórias.
- **Somente Leitura (`readonly`)**: Impede que uma propriedade seja alterada após a criação do objeto.

```typescript
interface Produto {
  readonly id: string;
  nome: string;
  descricao?: string; // Descrição é opcional
}

let notebook: Produto = {
  id: "abc-123",
  nome: "Notebook Pro"
};

notebook.nome = "Notebook Ultra Pro"; // OK
// notebook.id = "def-456"; // Erro! 'id' é uma propriedade somente leitura.
```

### Estendendo Interfaces (`extends`)

Interfaces podem herdar propriedades de outras, tornando o código mais modular (DRY - Don't Repeat Yourself).

```typescript
interface Entidade {
  readonly id: number;
}

interface Post extends Entidade {
  titulo: string;
  conteudo: string;
}

const meuPost: Post = {
  id: 101,
  titulo: "Guia de TypeScript",
  conteudo: "..."
};
```

## Tipos (Type Aliases)

Um `type alias` permite criar um novo nome (um apelido) para qualquer tipo, não apenas para objetos.

```typescript
type ID = string | number; // Um ID pode ser string ou número

function buscarPorId(id: ID) {
  // ...
}

type Ponto = {
  x: number;
  y: number;
};

const meuPonto: Ponto = { x: 10, y: 20 };
```

### Tipos de União (`|`) e Interseção (`&`)

- **União (`|`)**: Permite que uma variável seja de um tipo **OU** de outro.
  ```typescript
  type Status = "sucesso" | "erro" | "carregando";
  let statusAtual: Status = "carregando";
  ```

- **Interseção (`&`)**: Combina múltiplos tipos em um só. O novo tipo terá **TODAS** as propriedades dos tipos combinados.
  ```typescript
  type InfoBasica = { nome: string; };
  type InfoContato = { email: string; telefone: string; };

  type ClienteCompleto = InfoBasica & InfoContato;

  const cliente: ClienteCompleto = {
    nome: "Fernanda",
    email: "fe@email.com",
    telefone: "9999-8888"
  };
  ```

## `interface` vs `type`: Qual usar?

- **Use `interface`** quando estiver definindo a forma de um objeto ou de uma classe. A capacidade de "declaration merging" (onde múltiplas declarações de interface com o mesmo nome são unidas) é uma vantagem chave.
- **Use `type`** quando precisar de tipos de união, interseção, tuplas ou para criar apelidos para tipos primitivos.

Para consistência, muitas equipes escolhem usar `interface` para objetos e `type` para todo o resto.

