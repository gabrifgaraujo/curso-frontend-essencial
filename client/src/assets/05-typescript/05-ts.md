# Capítulo 5: Generics

Generics são um dos conceitos mais poderosos do TypeScript. Eles nos permitem criar componentes, funções e classes que funcionam com uma variedade de tipos em vez de um único, mantendo a segurança de tipo. Pense neles como "variáveis de tipo".

## O que são Generics e por que são úteis?

Imagine uma função que recebe um array e retorna o primeiro elemento. Sem generics, teríamos duas opções:

1.  **Usar `any`**: Perderíamos a segurança de tipo. O TypeScript não saberia qual o tipo do elemento retornado.
    ```typescript
    function primeiroElementoAny(arr: any[]): any {
      return arr[0];
    }
    const valor = primeiroElementoAny([1, 2, 3]); // valor é do tipo 'any'
    ```

2.  **Criar múltiplas funções**: Uma para cada tipo, o que gera duplicação de código.
    ```typescript
    function primeiroElementoNumero(arr: number[]): number { return arr[0]; }
    function primeiroElementoString(arr: string[]): string { return arr[0]; }
    ```

**Generics resolvem isso!** Criamos uma função que aceita um "tipo" como parâmetro.

```typescript
function primeiroElemento<T>(arr: T[]): T | undefined {
  return arr[0];
}

// O TypeScript infere o tipo T com base no argumento
const primeiroNumero = primeiroElemento([1, 2, 3]); // T é inferido como 'number'
const primeiraString = primeiroElemento(["a", "b", "c"]); // T é inferido como 'string'

// Também podemos definir explicitamente
const primeiroBool = primeiroElemento<boolean>([true, false]);
```

A letra `T` é uma convenção para "Type", mas qualquer nome válido pode ser usado. A função agora é reutilizável e 100% segura em termos de tipo.

## Funções, Interfaces e Classes Genéricas

### Funções Genéricas

Já vimos um exemplo acima. Elas são úteis para criar utilitários que operam em coleções ou dados de forma agnóstica ao tipo.

### Interfaces Genéricas

Podemos criar interfaces que dependem de um tipo. Um exemplo clássico é a resposta de uma API.

```typescript
interface RespostaAPI<T> {
  dados: T;
  status: number;
  erro?: string;
}

interface Usuario {
  id: number;
  nome: string;
}

const respostaUsuario: RespostaAPI<Usuario> = {
  dados: { id: 1, nome: "Ana" },
  status: 200
};

const respostaErro: RespostaAPI<null> = {
  dados: null,
  status: 404,
  erro: "Usuário não encontrado"
};
```

### Classes Genéricas

Classes também podem ser genéricas, úteis para estruturas de dados.

```typescript
class Colecao<T> {
  private itens: T[] = [];

  adicionar(item: T): void {
    this.itens.push(item);
  }

  listar(): T[] {
    return this.itens;
  }
}

const colecaoDeNumeros = new Colecao<number>();
colecaoDeNumeros.adicionar(1);
colecaoDeNumeros.adicionar(2);
// colecaoDeNumeros.adicionar("3"); // Erro!

const colecaoDeStrings = new Colecao<string>();
colecaoDeStrings.adicionar("Olá");
```

## Restrições em Generics (`extends`)

Às vezes, queremos que nosso tipo genérico `T` tenha certas propriedades. Podemos usar a palavra-chave `extends` para criar uma restrição.

```typescript
interface Comprimento {
  length: number;
}

// Esta função só aceita tipos que tenham a propriedade 'length'
function logComprimento<T extends Comprimento>(arg: T): void {
  console.log(arg.length);
}

logComprimento("Olá mundo"); // OK, string tem 'length'
logComprimento([1, 2, 3]);   // OK, array tem 'length'
// logComprimento(123);      // Erro! number não tem 'length'
```

Generics são a chave para escrever código TypeScript avançado, reutilizável e robusto.

