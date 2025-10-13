# Capítulo 3: Funções e Objetos

## Tipando Funções

A segurança de tipo em funções é um dos recursos mais poderosos do TypeScript. Podemos tipar tanto os parâmetros de entrada quanto o valor de retorno.

### Parâmetros e Retorno

A sintaxe é simples: `: tipo` após cada parâmetro e após a lista de parênteses para o retorno.

```typescript
// Esta função aceita dois números e retorna um número.
function somar(a: number, b: number): number {
  return a + b;
}

const resultado = somar(10, 5); // OK

// const erro = somar("10", 5); // Erro! Argumento do tipo 'string' não é atribuível ao parâmetro do tipo 'number'.
```

Se uma função não retorna nada (por exemplo, apenas imprime algo no console), seu tipo de retorno é `void`.

```typescript
function logMensagem(mensagem: string): void {
  console.log(mensagem);
}
```

### Tipos de Função

Podemos definir um "molde" para uma função usando um alias de tipo (`type`).

```typescript
type FuncaoMatematica = (x: number, y: number) => number;

const subtrair: FuncaoMatematica = (x, y) => {
  return x - y;
};

const multiplicar: FuncaoMatematica = (x, y) => {
  return x * y;
};
```

### Parâmetros Opcionais e Padrão

- **Opcionais**: Adicione um `?` após o nome do parâmetro para torná-lo opcional. Parâmetros opcionais devem vir depois dos obrigatórios.
  ```typescript
  function cumprimentar(nome: string, saudacao?: string) {
    if (saudacao) {
      console.log(`${saudacao}, ${nome}!`);
    } else {
      console.log(`Olá, ${nome}!`);
    }
  }

  cumprimentar("Ana"); // Olá, Ana!
  cumprimentar("Beto", "Bom dia"); // Bom dia, Beto!
  ```

- **Padrão**: Atribua um valor padrão a um parâmetro. Ele será usado se nenhum argumento for fornecido.
  ```typescript
  function criarBotao(texto: string, cor: string = "blue") {
    console.log(`Criando botão com texto "${texto}" e cor "${cor}".`);
  }

  criarBotao("Enviar"); // Usa a cor padrão "blue"
  criarBotao("Cancelar", "red"); // Usa a cor "red"
  ```

## Tipando Objetos

Podemos definir a estrutura de um objeto diretamente na anotação de tipo.

```typescript
function exibirCoordenadas(ponto: { x: number; y: number }) {
  console.log(`As coordenadas são X: ${ponto.x} e Y: ${ponto.y}`);
}

exibirCoordenadas({ x: 3, y: 7 });
// exibirCoordenadas({ x: 3 }); // Erro! Falta a propriedade 'y'.
```

Essa abordagem é útil para objetos simples, mas para estruturas mais complexas e reutilizáveis, usamos `Interfaces` e `Types`, que veremos no próximo capítulo.

