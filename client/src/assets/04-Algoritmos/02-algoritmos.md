## Aula 2: Estruturas de Dados Lineares

Nesta aula, vamos explorar as **estruturas de dados lineares**, que são formas de organizar dados de maneira sequencial. Começaremos com uma revisão aprofundada dos arrays em JavaScript e, em seguida, mergulharemos em duas estruturas de dados fundamentais: Pilhas (Stacks) e Filas (Queues), entendendo seus conceitos, implementações e casos de uso práticos.

### Revisão de Arrays em JavaScript

Os **arrays** são, provavelmente, a estrutura de dados mais comum e fundamental em JavaScript. Eles são coleções ordenadas de valores, onde cada valor é acessado por um índice numérico.

#### Vantagens dos Arrays:

*   **Acesso Rápido por Índice (O(1)):** A principal vantagem dos arrays é a capacidade de acessar qualquer elemento diretamente pelo seu índice em tempo constante. Isso ocorre porque os elementos são armazenados em posições de memória contíguas.
    ```javascript
    const frutas = ['maçã', 'banana', 'laranja'];
    console.log(frutas[1]); // Acesso direto: 'banana' (O(1))
    ```
*   **Iteração Simples:** Percorrer arrays é direto e eficiente com loops `for`, `forEach`, `map`, `filter`, etc.
*   **Flexibilidade:** Em JavaScript, arrays podem armazenar diferentes tipos de dados e seu tamanho pode ser dinamicamente alterado.

#### Desvantagens dos Arrays:

*   **Inserção e Deleção no Início/Meio (O(n)):** Quando você insere ou remove um elemento no início ou no meio de um array, todos os elementos subsequentes precisam ser deslocados. Isso pode ser uma operação custosa, com complexidade de tempo linear (O(n)), especialmente para arrays grandes.
    ```javascript
    const numeros = [1, 2, 3, 4, 5];

    // Inserção no início
    numeros.unshift(0); // [0, 1, 2, 3, 4, 5] - O(n)

    // Deleção no início
    numeros.shift();    // [1, 2, 3, 4, 5] - O(n)

    // Inserção no meio
    numeros.splice(2, 0, 2.5); // [1, 2, 2.5, 3, 4, 5] - O(n)

    // Deleção no meio
    numeros.splice(2, 1); // [1, 2, 3, 4, 5] - O(n)
    ```
*   **Inserção e Deleção no Final (O(1) na maioria dos casos):** Inserir (`push`) ou remover (`pop`) no final de um array é geralmente uma operação de tempo constante (O(1)), pois não exige o deslocamento de outros elementos. No entanto, em algumas implementações, se o array precisar ser redimensionado, pode ocasionalmente ser O(n).
    ```javascript
    const letras = ['a', 'b'];
    letras.push('c'); // ['a', 'b', 'c'] - O(1)
    letras.pop();    // ['a', 'b'] - O(1)
    ```

### Pilhas (Stacks): Conceito LIFO (Last-In, First-Out)

Uma **Pilha** é uma estrutura de dados linear que segue o princípio **LIFO** (Last-In, First-Out), ou seja, o último elemento a ser inserido é o primeiro a ser removido. Pense em uma pilha de pratos: você sempre adiciona um prato no topo e remove o prato que está no topo.

As operações básicas de uma pilha são:

*   **Push:** Adiciona um elemento ao topo da pilha.
*   **Pop:** Remove o elemento do topo da pilha e o retorna.
*   **Peek (ou Top):** Retorna o elemento do topo da pilha sem removê-lo.
*   **isEmpty:** Verifica se a pilha está vazia.

#### Implementação de uma Pilha com um Array em JS

Podemos facilmente implementar uma pilha usando um array em JavaScript, aproveitando os métodos `push()` e `pop()` que operam no final do array, garantindo eficiência O(1) para essas operações.

```javascript
class Stack {
  constructor() {
    this.items = [];
  }

  // Adiciona um elemento ao topo da pilha
  push(element) {
    this.items.push(element); // O(1)
  }

  // Remove e retorna o elemento do topo da pilha
  pop() {
    if (this.isEmpty()) {
      return 'Underflow'; // Pilha vazia
    }
    return this.items.pop(); // O(1)
  }

  // Retorna o elemento do topo da pilha sem removê-lo
  peek() {
    if (this.isEmpty()) {
      return 'No elements in Stack';
    }
    return this.items[this.items.length - 1]; // O(1)
  }

  // Verifica se a pilha está vazia
  isEmpty() {
    return this.items.length === 0;
  }

  // Retorna o tamanho da pilha
  size() {
    return this.items.length;
  }

  // Imprime os elementos da pilha
  printStack() {
    let str = '';
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + ' ';
    }
    return str.trim();
  }
}

// Exemplo de uso:
const minhaPilha = new Stack();
console.log('Pilha vazia?', minhaPilha.isEmpty()); // true

minhaPilha.push(10);
minhaPilha.push(20);
minhaPilha.push(30);
console.log('Pilha:', minhaPilha.printStack()); // 10 20 30

console.log('Elemento no topo:', minhaPilha.peek()); // 30

console.log('Removido:', minhaPilha.pop()); // 30
console.log('Pilha:', minhaPilha.printStack()); // 10 20

console.log('Pilha vazia?', minhaPilha.isEmpty()); // false
```

#### Exemplo de Uso: Histórico de Navegação

Um exemplo clássico de uso de pilhas é o histórico de navegação de um navegador web. Quando você visita uma nova página, ela é "empilhada" (push). Quando você clica no botão "Voltar", a página atual é "desempilhada" (pop) e você retorna à página anterior.

```javascript
class NavegadorWeb {
  constructor() {
    this.historico = new Stack();
    this.paginaAtual = null;
  }

  visitar(url) {
    if (this.paginaAtual) {
      this.historico.push(this.paginaAtual);
    }
    this.paginaAtual = url;
    console.log(`Visitando: ${this.paginaAtual}`);
  }

  voltar() {
    if (!this.historico.isEmpty()) {
      this.paginaAtual = this.historico.pop();
      console.log(`Voltando para: ${this.paginaAtual}`);
    } else {
      console.log('Não há páginas anteriores no histórico.');
    }
  }

  paginaAtualUrl() {
    return this.paginaAtual;
  }
}

const navegador = new NavegadorWeb();
navegador.visitar('google.com');
navegador.visitar('youtube.com');
navegador.visitar('gemini.google.com');

console.log('Página atual:', navegador.paginaAtualUrl()); // gemini.google.com

navegador.voltar(); // Voltando para: youtube.com
console.log('Página atual:', navegador.paginaAtualUrl()); // youtube.com

navegador.voltar(); // Voltando para: google.com
console.log('Página atual:', navegador.paginaAtualUrl()); // google.com

navegador.voltar(); // Não há páginas anteriores no histórico.
```

### Filas (Queues): Conceito FIFO (First-In, First-Out)

Uma **Fila** é uma estrutura de dados linear que segue o princípio **FIFO** (First-In, First-Out), ou seja, o primeiro elemento a ser inserido é o primeiro a ser removido. Pense em uma fila de banco: a primeira pessoa a chegar é a primeira a ser atendida.

As operações básicas de uma fila são:

*   **Enqueue:** Adiciona um elemento ao final da fila.
*   **Dequeue:** Remove o elemento do início da fila e o retorna.
*   **Front (ou Peek):** Retorna o elemento do início da fila sem removê-lo.
*   **isEmpty:** Verifica se a fila está vazia.

#### Implementação de uma Fila com um Array em JS

Podemos implementar uma fila usando um array em JavaScript. Para `enqueue`, usamos `push()` (O(1)). Para `dequeue`, usamos `shift()` (O(n)), o que pode ser ineficiente para filas muito grandes. Para otimizar, em cenários de alta performance, poderíamos usar uma lista encadeada ou um array com controle de ponteiros de início e fim.

```javascript
class Queue {
  constructor() {
    this.items = [];
  }

  // Adiciona um elemento ao final da fila
  enqueue(element) {
    this.items.push(element); // O(1)
  }

  // Remove e retorna o elemento do início da fila
  dequeue() {
    if (this.isEmpty()) {
      return 'Underflow'; // Fila vazia
    }
    return this.items.shift(); // O(n) - Cuidado com a performance em grandes filas
  }

  // Retorna o elemento do início da fila sem removê-lo
  front() {
    if (this.isEmpty()) {
      return 'No elements in Queue';
    }
    return this.items[0]; // O(1)
  }

  // Verifica se a fila está vazia
  isEmpty() {
    return this.items.length === 0;
  }

  // Retorna o tamanho da fila
  size() {
    return this.items.length;
  }

  // Imprime os elementos da fila
  printQueue() {
    let str = '';
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + ' ';
    }
    return str.trim();
  }
}

// Exemplo de uso:
const minhaFila = new Queue();
console.log('Fila vazia?', minhaFila.isEmpty()); // true

minhaFila.enqueue('Tarefa 1');
minhaFila.enqueue('Tarefa 2');
minhaFila.enqueue('Tarefa 3');
console.log('Fila:', minhaFila.printQueue()); // Tarefa 1 Tarefa 2 Tarefa 3

console.log('Elemento na frente:', minhaFila.front()); // Tarefa 1

console.log('Removido:', minhaFila.dequeue()); // Tarefa 1
console.log('Fila:', minhaFila.printQueue()); // Tarefa 2 Tarefa 3

console.log('Fila vazia?', minhaFila.isEmpty()); // false
```

#### Exemplo de Uso: Gerenciamento de Tarefas

Filas são ideais para gerenciar tarefas que precisam ser processadas em uma ordem específica, como em um sistema de impressão, processamento de uploads ou gerenciamento de eventos em um jogo.

```javascript
class GerenciadorDeTarefas {
  constructor() {
    this.filaDeTarefas = new Queue();
  }

  adicionarTarefa(tarefa) {
    console.log(`Adicionando tarefa: ${tarefa}`);
    this.filaDeTarefas.enqueue(tarefa);
  }

  processarProximaTarefa() {
    if (!this.filaDeTarefas.isEmpty()) {
      const tarefa = this.filaDeTarefas.dequeue();
      console.log(`Processando tarefa: ${tarefa}`);
      // Lógica para processar a tarefa
      return tarefa;
    } else {
      console.log('Nenhuma tarefa na fila para processar.');
      return null;
    }
  }

  verProximaTarefa() {
    if (!this.filaDeTarefas.isEmpty()) {
      console.log(`Próxima tarefa: ${this.filaDeTarefas.front()}`);
      return this.filaDeTarefas.front();
    } else {
      console.log('Nenhuma tarefa na fila.');
      return null;
    }
  }
}

const gerenciador = new GerenciadorDeTarefas();
gerenciador.adicionarTarefa('Fazer café');
gerenciador.adicionarTarefa('Responder e-mails');
gerenciador.adicionarTarefa('Revisar código');

gerenciador.verProximaTarefa(); // Próxima tarefa: Fazer café

gerenciador.processarProximaTarefa(); // Processando tarefa: Fazer café
gerenciador.processarProximaTarefa(); // Processando tarefa: Responder e-mails

gerenciador.verProximaTarefa(); // Próxima tarefa: Revisar código

gerenciador.processarProximaTarefa(); // Processando tarefa: Revisar código
gerenciador.processarProximaTarefa(); // Nenhuma tarefa na fila para processar.
```

### Conclusão

Arrays, pilhas e filas são estruturas de dados fundamentais que todo desenvolvedor deve dominar. Compreender suas características, vantagens e desvantagens, bem como suas implementações e casos de uso, é crucial para escrever código eficiente e robusto. Na próxima aula, exploraremos as estruturas de dados não lineares, que oferecem formas mais complexas e poderosas de organizar informações.
