# Capítulo 6: Tipos Avançados e Mapeados

O TypeScript oferece um conjunto de ferramentas avançadas para manipular tipos. Elas permitem criar tipos complexos a partir de tipos existentes, tornando seu código mais flexível e DRY (Don't Repeat Yourself).

## Tipos Utilitários (Utility Types)

O TypeScript já vem com vários tipos utilitários globais para transformações comuns.

### `Partial<T>`
Cria um tipo onde todas as propriedades de `T` são opcionais. Útil para objetos de atualização, onde você só envia os campos que mudaram.

```typescript
interface Tarefa {
  id: number;
  titulo: string;
  concluida: boolean;
}

function atualizarTarefa(id: number, atualizacoes: Partial<Tarefa>) {
  // ...lógica para atualizar a tarefa no banco de dados
}

atualizarTarefa(1, { concluida: true }); // OK
atualizarTarefa(2, { titulo: "Novo Título", concluida: false }); // OK
```

### `Readonly<T>`
Cria um tipo onde todas as propriedades de `T` são `readonly`.

```typescript
const tarefa: Readonly<Tarefa> = {
  id: 1,
  titulo: "Aprender TypeScript",
  concluida: false,
};

// tarefa.titulo = "Mudar título"; // Erro!
```

### `Pick<T, K>`
Cria um tipo selecionando um conjunto de propriedades `K` do tipo `T`.

```typescript
type ResumoTarefa = Pick<Tarefa, "id" | "titulo">;

const resumo: ResumoTarefa = {
  id: 1,
  titulo: "Aprender TypeScript",
  // concluida: false // Erro! 'concluida' não existe em ResumoTarefa
};
```

### `Omit<T, K>`
O oposto de `Pick`. Cria um tipo omitindo um conjunto de propriedades `K` do tipo `T`.

```typescript
type InfoCriacaoTarefa = Omit<Tarefa, "id" | "concluida">;

const novaTarefa: InfoCriacaoTarefa = {
  titulo: "Praticar mais",
};
```

## Tipos Mapeados (`in keyof`)

Tipos mapeados permitem criar novos tipos iterando sobre as chaves de um tipo existente. É a tecnologia por trás de `Partial` e `Readonly`.

```typescript
type PropriedadesBooleanas<T> = {
  [P in keyof T]: boolean;
};

interface Permissoes {
  ler: boolean;
  escrever: boolean;
  deletar: boolean;
}

// O tipo Flags terá as mesmas chaves de Permissoes, mas todas serão do tipo boolean.
type Flags = PropriedadesBooleanas<Permissoes>;
// type Flags = { ler: boolean; escrever: boolean; deletar: boolean; }
```

## Tipos Condicionais (`extends ? TrueType : FalseType`)

Permitem criar tipos que mudam com base em uma condição.

```typescript
type CheckString<T> = T extends string ? "É uma string" : "Não é uma string";

type A = CheckString<"hello">; // O tipo A é "É uma string"
type B = CheckString<123>;     // O tipo B é "Não é uma string"
```

Um exemplo prático é o tipo utilitário `NonNullable<T>`, que remove `null` e `undefined` de um tipo.

```typescript
// Implementação simplificada
type MeuNonNullable<T> = T extends null | undefined ? never : T;

type TipoComNulo = string | number | null | undefined;
type TipoSemNulo = MeuNonNullable<TipoComNulo>; // O tipo é string | number
```

## `typeof` e `keyof`

- **`typeof`**: Usado no contexto de tipos, captura o tipo de uma variável.
  ```typescript
  const pessoa = { nome: "Leo", idade: 25 };
  type TipoPessoa = typeof pessoa; // { nome: string; idade: number; }
  ```

- **`keyof`**: Pega as chaves de um tipo de objeto e cria um tipo de união de strings com elas.
  ```typescript
  type ChavesPessoa = keyof TipoPessoa; // "nome" | "idade"
  ```

Essas ferramentas avançadas são a chave para modelar dados complexos e criar abstrações seguras em TypeScript.

