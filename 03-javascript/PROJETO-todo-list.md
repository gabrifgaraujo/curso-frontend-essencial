# Projeto Prático do Módulo 3: Lista de Tarefas (To-Do List) Interativa

**Objetivo:** Unir todos os conceitos de JavaScript, manipulação do DOM e eventos para criar uma aplicação web clássica e funcional: uma lista de tarefas.

---

### Descrição

Você construirá uma aplicação de "To-Do List" do zero. O usuário poderá digitar uma nova tarefa em um campo de texto, adicioná-la à lista pressionando um botão ou a tecla "Enter", e marcar tarefas como concluídas ou removê-las da lista.

### Funcionalidades Requeridas

1.  **Adicionar Tarefa:**
    *   Um campo de input de texto para o usuário digitar a nova tarefa.
    *   Um botão "Adicionar".
    *   Quando o botão for clicado ou a tecla "Enter" for pressionada no input, a nova tarefa deve ser adicionada à lista na tela.
    *   O campo de input deve ser limpo após a adição.
    *   Não deve ser possível adicionar uma tarefa vazia.

2.  **Exibir Tarefas:**
    *   As tarefas adicionadas devem aparecer em uma lista não ordenada (`<ul>`).
    *   Cada item da lista (`<li>`) deve conter o texto da tarefa e dois botões: "Concluir" e "Remover".

3.  **Concluir Tarefa:**
    *   Ao clicar no botão "Concluir" de uma tarefa, o elemento `<li>` correspondente deve receber uma classe (ex: `.concluida`).
    *   No seu CSS, essa classe deve aplicar um estilo visual, como riscar o texto (`text-decoration: line-through;`) e talvez mudar a cor.
    *   Clicar novamente no botão deve remover a classe, "desmarcando" a tarefa. (Dica: `classList.toggle()`).

4.  **Remover Tarefa:**
    *   Ao clicar no botão "Remover", o elemento `<li>` inteiro correspondente àquela tarefa deve ser removido do DOM.

### Estrutura Sugerida

**HTML (`index.html`):**
*   Um `<header>` com um `<h1>` para o título da aplicação.
*   Um `<form>` contendo o `<input type="text">` e o `<button type="submit">`. Usar um formulário é bom para capturar o evento "Enter".
*   Uma `<ul>` vazia que servirá como o contêiner para as tarefas.

**CSS (`estilos.css`):**
*   Estilos básicos para o layout, o formulário e os botões.
*   Uma classe `.concluida` para estilizar as tarefas finalizadas.

**JavaScript (`script.js`):**
Este é o coração do projeto.

1.  **Seleção de Elementos:** Comece selecionando os elementos principais do DOM com `querySelector`: o formulário, o input e a lista `<ul>`.

2.  **Event Listener Principal:** Adicione um `addEventListener` ao evento `submit` do formulário.
    *   Dentro do callback, não se esqueça de usar `event.preventDefault()` para impedir que a página recarregue.
    *   Pegue o valor do input (`input.value`).
    *   Verifique se o valor não está vazio (`.trim()`).
    *   Chame uma função para criar e adicionar o novo item da tarefa na tela.
    *   Limpe o input (`input.value = '';`) e coloque o foco de volta nele (`input.focus();`).

3.  **Função para Criar Tarefa:** Crie uma função separada (ex: `adicionarTarefa(texto)`) que:
    *   Cria os elementos necessários com `document.createElement()`: `<li>`, o texto da tarefa, e os dois botões.
    *   Configura os elementos: adiciona texto, classes, etc.
    *   Anexa os botões ao `<li>` e, em seguida, anexa o `<li>` à `<ul>`.

4.  **Delegação de Eventos:** Adicione **um único** `addEventListener` de `click` na `<ul>`.
    *   Dentro do callback, use `event.target` para verificar se o elemento clicado foi um botão de "Concluir" ou "Remover" (verificando suas classes).
    *   Se for "Concluir", pegue o elemento `<li>` pai e use `classList.toggle('concluida')`.
    *   Se for "Remover", pegue o elemento `<li>` pai e use `.remove()`.

### Desafios Adicionais (Opcional)

*   **Salvar no Local Storage:** Pesquise sobre `localStorage` para que as tarefas não desapareçam quando a página for recarregada.
*   **Filtros:** Adicione botões para filtrar a visualização entre "Todas", "Ativas" e "Concluídas".
*   **Edição de Tarefas:** Permita que o usuário clique no texto de uma tarefa para editá-la.

Este projeto é um excelente portfólio inicial, pois demonstra competência em todas as áreas fundamentais do JavaScript para o front-end.
