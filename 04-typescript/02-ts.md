# Capítulo 2: Tipos Primitivos e Inferência de Tipo

## Tipos Básicos

O TypeScript expande os tipos primitivos do JavaScript com anotações de tipo explícitas.

- **`string`**: Para textos.
  ```typescript
  let nome: string = "Alice";
  ```
- **`number`**: Para todos os tipos de números (inteiros e de ponto flutuante).
  ```typescript
  let idade: number = 30;
  let preco: number = 19.99;
  ```
- **`boolean`**: Para valores verdadeiros ou falsos.
  ```typescript
  let ativo: boolean = true;
  ```
- **`null` e `undefined`**: Representam a ausência de valor. Podem ser atribuídos a outros tipos se a opção `"strictNullChecks"` estiver desativada no `tsconfig.json` (não recomendado).
  ```typescript
  let nulo: null = null;
  let indefinido: undefined = undefined;
  ```

## Arrays e Tuplas

- **Arrays**: Para listas de valores de um mesmo tipo. A sintaxe pode ser `tipo[]` ou `Array<tipo>`.
  ```typescript
  let numeros: number[] = [1, 2, 3];
  let nomes: Array<string> = ["Carlos", "Diana"];
  ```

- **Tuplas (Tuples)**: Para arrays com um número fixo de elementos, onde cada elemento pode ter um tipo diferente. A ordem dos tipos é importante.
  ```typescript
  let pessoa: [string, number];
  pessoa = ["João", 35]; // OK
  // pessoa = [35, "João"]; // Erro!
  ```

## Os Tipos `any` e `unknown`

- **`any`**: É o "escape" do sistema de tipos. Uma variável do tipo `any` pode receber qualquer valor, e você pode realizar qualquer operação nela sem verificação de tipo. Use com extrema cautela, pois anula a segurança do TypeScript.
  ```typescript
  let variavelQualquer: any = 4;
  variavelQualquer = "agora sou string";
  variavelQualquer.metodoQueNaoExiste(); // Nenhum erro em tempo de compilação, mas falhará em execução.
  ```

- **`unknown`**: Uma alternativa mais segura ao `any`. Você pode atribuir qualquer valor a uma variável `unknown`, mas não pode realizar operações nela sem antes verificar seu tipo (usando `typeof`, `instanceof`, etc.).
  ```typescript
  let variavelDesconhecida: unknown = "Isso pode ser qualquer coisa";
  
  // console.log(variavelDesconhecida.toUpperCase()); // Erro! O objeto é do tipo 'unknown'.

  if (typeof variavelDesconhecida === 'string') {
    console.log(variavelDesconhecida.toUpperCase()); // OK, agora o TS sabe que é uma string.
  }
  ```

## Inferência de Tipo

Na maioria das vezes, você não precisa anotar os tipos explicitamente. O TypeScript é inteligente o suficiente para **inferir** o tipo com base no valor que você atribui à variável na sua inicialização.

```typescript
let framework = "React"; // O TypeScript infere que 'framework' é do tipo string.
// framework = 123; // Erro! O tipo 'number' não pode ser atribuído ao tipo 'string'.

let ano = 2024; // O TypeScript infere que 'ano' é do tipo number.
```

A inferência de tipo torna o código mais limpo e legível, mantendo a segurança. A regra geral é: **se o TypeScript consegue inferir o tipo, deixe-o fazer o trabalho.**

