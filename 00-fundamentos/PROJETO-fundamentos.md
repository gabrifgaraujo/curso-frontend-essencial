# Módulo 4: Arquitetura, Estruturas de Dados e Algoritmos

## PROJETO: Refatorando a Lista de Tarefas

Este projeto prático tem como objetivo consolidar os conhecimentos adquiridos sobre estruturas de dados, algoritmos e princípios de arquitetura de software, aplicando-os na refatoração de um projeto existente. Você pegará o projeto "Lista de Tarefas" desenvolvido no Módulo 3 e o transformará em uma aplicação mais robusta, manutenível e eficiente.

### Descrição do Projeto Base

Você deve ter um projeto de "Lista de Tarefas" funcional do Módulo 3, que provavelmente manipula o DOM diretamente para adicionar, remover e marcar tarefas como concluídas. O objetivo agora é evoluir essa aplicação, aplicando os conceitos de estado, funções puras e algoritmos de busca.

### Tarefas a Serem Realizadas

#### Tarefa 1: Estrutura de Dados - Gerenciamento de Estado

**Objetivo:** Modificar a lógica da aplicação para que o estado da lista de tarefas seja mantido em um array de objetos em JavaScript, em vez de manipular o DOM diretamente a cada evento. A interface do usuário deve ser uma renderização desse estado.

**Detalhes:**

1.  **Estado Centralizado:** Crie um array de objetos JavaScript que representará todas as suas tarefas. Cada objeto de tarefa deve ter, no mínimo, as seguintes propriedades:
    *   `id`: Um identificador único para a tarefa (você pode usar `Date.now()` ou um contador simples para gerar IDs).
    *   `texto`: A descrição da tarefa.
    *   `concluida`: Um booleano indicando se a tarefa foi concluída (`true` ou `false`).
2.  **Renderização Baseada no Estado:** A interface do usuário (a lista de tarefas exibida na tela) deve ser gerada **inteiramente** a partir deste array de estado. Sempre que o estado for alterado (uma tarefa é adicionada, removida ou marcada como concluída), você deve "renderizar" novamente a lista de tarefas no DOM, refletindo o estado atual.
3.  **Evitar Manipulação Direta do DOM:** As funções que modificam as tarefas não devem mais interagir diretamente com os elementos HTML. Elas devem apenas modificar o array de estado. A atualização visual será uma consequência da renderização baseada no estado.

**Exemplo de Estrutura de Estado:**

```javascript
let tarefas = [
  { id: 1, texto: "Aprender Estruturas de Dados", concluida: false },
  { id: 2, texto: "Refatorar Projeto Lista de Tarefas", concluida: true },
  { id: 3, texto: "Estudar Princípios SOLID", concluida: false },
];

// Função de renderização (exemplo simplificado)
function renderizarTarefas() {
  const listaUl = document.getElementById("lista-de-tarefas");
  listaUl.innerHTML = ""; // Limpa a lista atual
  tarefas.forEach(tarefa => {
    const li = document.createElement("li");
    li.textContent = tarefa.texto;
    if (tarefa.concluida) {
      li.style.textDecoration = "line-through";
    }
    // Adicionar botões de ação e eventos aqui
    listaUl.appendChild(li);
  });
}

// Chamar renderizarTarefas() sempre que o array 'tarefas' for modificado.
```

#### Tarefa 2: Arquitetura - Funções Puras e Princípios DRY/SRP

**Objetivo:** Separar a lógica de manipulação das tarefas em funções puras e bem definidas, seguindo os princípios DRY (Don't Repeat Yourself) e SRP (Single Responsibility Principle).

**Detalhes:**

1.  **Funções Puras:** Crie funções que recebem o estado atual (o array de tarefas) e os dados necessários para a operação, e retornam um **novo** estado modificado, sem causar efeitos colaterais (ou seja, sem modificar o array original diretamente). Isso torna o código mais previsível e fácil de testar.
2.  **Responsabilidade Única:** Cada função deve ter uma única responsabilidade. Por exemplo, uma função `adicionarTarefa` deve apenas adicionar uma tarefa, não deve renderizar a UI ou buscar dados.
3.  **Exemplos de Funções:**
    *   `adicionarTarefa(estadoAtual, textoTarefa)`: Recebe o array de tarefas e o texto da nova tarefa. Retorna um novo array com a tarefa adicionada.
    *   `removerTarefa(estadoAtual, idTarefa)`: Recebe o array de tarefas e o ID da tarefa a ser removida. Retorna um novo array sem a tarefa.
    *   `toggleTarefa(estadoAtual, idTarefa)`: Recebe o array de tarefas e o ID da tarefa a ser alternada (concluída/não concluída). Retorna um novo array com o status da tarefa atualizado.

**Exemplo de Função Pura:**

```javascript
function adicionarTarefa(estadoAtual, textoTarefa) {
  const novaTarefa = {
    id: Date.now(), // ID único
    texto: textoTarefa,
    concluida: false,
  };
  return [...estadoAtual, novaTarefa]; // Retorna um novo array com a nova tarefa
}

// Como usar:
// tarefas = adicionarTarefa(tarefas, "Comprar pão");
// renderizarTarefas();
```

#### Tarefa 3: Algoritmos - Funcionalidade de Busca

**Objetivo:** Adicionar uma funcionalidade de busca que permita ao usuário filtrar as tarefas exibidas. O aluno deve implementar uma busca simples e explicar sua complexidade.

**Detalhes:**

1.  **Campo de Busca:** Adicione um campo de input (texto) na interface do usuário para que o usuário possa digitar termos de busca.
2.  **Filtragem Dinâmica:** À medida que o usuário digita, a lista de tarefas exibida deve ser filtrada para mostrar apenas as tarefas cujo texto contenha o termo de busca (case-insensitive).
3.  **Implementação:** Utilize o método `Array.prototype.filter()` do JavaScript para implementar a lógica de busca. Esta é uma forma prática de aplicar um algoritmo de busca linear.
4.  **Análise de Complexidade:** No arquivo `PROJETO-refatorando-a-lista-de-tarefas.md` (este arquivo), adicione uma seção explicando a complexidade de tempo da sua implementação de busca. Mencione que `filter()` percorre o array, resultando em uma complexidade O(n) para cada operação de filtragem.

**Exemplo de Lógica de Busca:**

```javascript
function filtrarTarefas(estadoAtual, termoBusca) {
  if (!termoBusca) {
    return estadoAtual; // Se não houver termo, retorna todas as tarefas
  }
  const termoLower = termoBusca.toLowerCase();
  return estadoAtual.filter(tarefa =>
    tarefa.texto.toLowerCase().includes(termoLower)
  );
}

// Como usar:
// const tarefasFiltradas = filtrarTarefas(tarefas, "estudar");
// renderizarTarefas(tarefasFiltradas); // Renderiza a lista filtrada
```

**Análise de Complexidade da Busca:**

A funcionalidade de busca implementada utilizando `Array.prototype.filter()` possui uma complexidade de tempo de **O(n)**, onde `n` é o número total de tarefas no array de estado. Isso ocorre porque o método `filter()` precisa iterar sobre cada elemento do array para verificar se ele corresponde ao critério de busca (`includes(termoLower)`). No pior caso, se o termo de busca não for encontrado ou se todos os elementos corresponderem, o `filter()` percorrerá o array inteiro. Para cada caractere digitado no campo de busca, essa operação O(n) é executada novamente para atualizar a lista filtrada.

### Instruções Finais

Ao final deste projeto, você terá uma aplicação de lista de tarefas que demonstra um entendimento sólido de:

*   **Gerenciamento de Estado:** Como manter o estado da aplicação de forma centralizada e reativa.
*   **Programação Funcional:** Uso de funções puras para manipular o estado, promovendo imutabilidade.
*   **Princípios de Arquitetura:** Aplicação dos princípios DRY e SRP para um código mais modular e manutenível.
*   **Algoritmos de Busca:** Implementação e compreensão da complexidade de um algoritmo de busca linear.

Certifique-se de que seu código esteja bem comentado e que a estrutura de arquivos do projeto final reflita a organização proposta no curso. Boa sorte!
