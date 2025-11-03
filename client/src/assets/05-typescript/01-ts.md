# Capítulo 1: Introdução ao TypeScript

## O que é TypeScript e por que usá-lo?

**TypeScript** é um "superset" (ou superconjunto) de JavaScript desenvolvido e mantido pela Microsoft. Isso significa que todo código JavaScript válido também é um código TypeScript válido. A principal adição que o TypeScript traz ao JavaScript é a **tipagem estática opcional**.

Em JavaScript puro, os tipos de variáveis são dinâmicos. Uma variável pode começar como um número e depois receber uma string, sem nenhum erro.

```javascript
// JavaScript
let minhaVariavel = 10;       // É um número
minhaVariavel = "agora sou uma string"; // Totalmente válido!
```

Embora flexível, essa característica pode causar bugs difíceis de rastrear em aplicações grandes. O TypeScript resolve isso permitindo que você defina tipos para suas variáveis, parâmetros de função e objetos.

```typescript
// TypeScript
let minhaVariavel: number = 10;
minhaVariavel = "agora sou uma string"; // Erro! O tipo 'string' não pode ser atribuído ao tipo 'number'.
```

Este erro é detectado **antes mesmo de você rodar o código**, diretamente no seu editor, o que economiza um tempo imenso de depuração.

## Principais Vantagens

1.  **Segurança de Tipo (Type Safety)**: Reduz drasticamente a ocorrência de erros comuns, como `undefined is not a function` ou passar o tipo errado de dado para uma função.
2.  **Autocompletar e IntelliSense Aprimorados**: Como o editor de código (VS Code, por exemplo) conhece os tipos, ele oferece sugestões muito mais inteligentes e precisas enquanto você digita.
3.  **Escalabilidade e Manutenibilidade**: Em projetos grandes e com equipes de múltiplos desenvolvedores, o TypeScript funciona como uma documentação viva, tornando o código mais fácil de entender, refatorar e manter.
4.  **Acesso a Recursos Modernos do JavaScript**: O TypeScript permite que você use as funcionalidades mais recentes do ECMAScript (o padrão do JavaScript) e as compila para uma versão de JavaScript que os navegadores mais antigos entendem.

## Configurando o Ambiente

Para começar, você precisa de duas coisas:
1.  **Node.js e npm**: O Node.js é o ambiente que executa JavaScript fora do navegador, e o `npm` é seu gerenciador de pacotes. Se você não os tem, baixe-os em [nodejs.org](https://nodejs.org/).
2.  **Compilador TypeScript (`tsc`)**: Você pode instalá-lo globalmente em sua máquina com o seguinte comando:

    ```bash
    npm install -g typescript
    ```

## Seu Primeiro Código TypeScript: `hello-world.ts`

Crie um arquivo chamado `hello-world.ts` e adicione o seguinte código:

```typescript
function saudar(nome: string) {
  console.log(`Olá, ${nome}! Bem-vindo ao mundo do TypeScript.`);
}

const meuNome = "Mundo";
saudar(meuNome);
```

Note a anotação `: string` no parâmetro `nome`. Estamos dizendo à função `saudar` que ela só deve aceitar um argumento do tipo `string`.

## Compilando TypeScript para JavaScript

Navegadores não entendem TypeScript diretamente. Precisamos compilar nosso arquivo `.ts` para um arquivo `.js` que eles possam executar. Para isso, usamos o compilador `tsc`:

```bash
tsc hello-world.ts
```

Este comando criará um novo arquivo, `hello-world.js`, com o código JavaScript correspondente.

## Visão Geral do `tsconfig.json`

Gerenciar um projeto com muitos arquivos `.ts` compilando um por um é inviável. Para isso, usamos o arquivo `tsconfig.json`. Ele diz ao compilador TypeScript como tratar um projeto inteiro.

Para criar um, rode o comando na raiz do seu projeto:

```bash
tsc --init
```

Este arquivo vem com muitas opções. As mais importantes para começar são:
*   `"target"`: Define para qual versão do JavaScript o código será compilado (ex: `"ES2016"`).
*   `"outDir"`: Especifica a pasta onde os arquivos `.js` compilados serão salvos (ex: `"./dist"`).
*   `"rootDir"`: Especifica a pasta que contém os arquivos `.ts` de origem (ex: `"./src"`).
*   `"strict"`: Habilita um conjunto de regras estritas de verificação de tipo. **É altamente recomendado mantê-lo como `true`**.

Com o `tsconfig.json` no lugar, você pode compilar todo o projeto simplesmente executando `tsc` no terminal.

