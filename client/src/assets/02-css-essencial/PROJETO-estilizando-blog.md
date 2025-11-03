# Projeto Prático do Módulo 2: Estilizando a Página de Blog com CSS e Flexbox

**Objetivo:** Pegar a página de blog estruturada com HTML semântico do Módulo 1 e aplicar estilos CSS, utilizando Flexbox para criar um layout moderno e agradável.

---

### Descrição

Neste projeto, você criará um arquivo `estilos.css` e o vinculará ao seu `index.html` do projeto anterior. Vamos transformar aquela página simples e sem estilo em um blog com aparência profissional, focando em layout, tipografia e espaçamento.

### Requisitos

#### 1. Preparação

*   Crie um arquivo `estilos.css` na mesma pasta do seu `index.html`.
*   No `index.html`, adicione a tag `<link>` dentro do `<head>` para conectar seu CSS:
    ```html
    <link rel="stylesheet" href="estilos.css">
    ```
*   (Opcional) Adicione uma fonte do Google Fonts (como 'Roboto' ou 'Lato') no seu HTML para melhorar a tipografia.

#### 2. Estilos Globais e Reset

*   No `estilos.css`, comece com um "reset" básico para garantir consistência entre navegadores. Use o seletor universal para aplicar `box-sizing: border-box;` e remover margens e paddings padrão.
    ```css
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    ```
*   Estilize o `body` com uma cor de fundo suave (`#f4f4f4`), uma cor de texto legível (`#333`) e defina a `font-family` principal.

#### 3. Layout Principal com Flexbox

*   O desafio é criar um layout de duas colunas: o conteúdo principal (`<main>`) e a barra lateral (`<aside>`).
*   Para isso, crie um `div` com uma classe (ex: `.container-principal`) no seu HTML que envolva o `<main>` e o `<aside>`.
*   Aplique `display: flex;` a essa classe `.container-principal`.
*   Faça o `<main>` ser flexível e ocupar mais espaço (`flex-grow: 1;` ou `flex: 1;`).
*   Defina uma largura base para o `<aside>` (ex: `flex-basis: 300px;` ou `width: 300px;`) e garanta que ele não encolha (`flex-shrink: 0;`).
*   Adicione um espaçamento entre `<main>` e `<aside>` (usando `gap` no container ou `margin` nos itens).

#### 4. Estilizando o Cabeçalho (`<header>` e `<nav>`)

*   Transforme o `<header>` em um flex container (`display: flex;`).
*   Use `justify-content: space-between;` para alinhar o título (`<h1>`) à esquerda e a navegação (`<nav>`) à direita.
*   Use `align-items: center;` para alinhá-los verticalmente.
*   Adicione `padding` ao `<header>` e uma cor de fundo.
*   Estilize a lista de navegação (`<nav> ul`) para que os itens fiquem em linha (`display: flex;`), remova os marcadores (`list-style: none;`) e estilize os links (`<a>`).

#### 5. Estilizando o Conteúdo (`<main>` e `<article>`)

*   Adicione `padding` ao `<main>` e ao `<article>` para criar respiro.
*   Defina um `max-width` para o container geral do site (ex: `1100px`) e centralize-o na página usando `margin: 0 auto;`.
*   Estilize os títulos (`h1`, `h2`) com tamanhos de fonte (`rem`), pesos (`font-weight`) e margens adequadas.
*   Ajuste a altura da linha (`line-height`) dos parágrafos (`<p>`) para melhorar a legibilidade (ex: `1.6`).
*   Garanta que as imagens (`<img>`) sejam responsivas, definindo `max-width: 100%;` e `display: block;`.

#### 6. Estilizando o Rodapé (`<footer>`)

*   Centralize o texto do rodapé (`text-align: center;`).
*   Adicione `padding` e uma cor de fundo ou borda superior para separá-lo do resto do conteúdo.

### Como Verificar seu Trabalho

Abra o `index.html` no navegador. A página agora deve ter:
*   Um cabeçalho com o título de um lado e a navegação do outro.
*   Um layout de duas colunas com o artigo principal e a barra lateral.
*   Fontes, cores e espaçamentos consistentes.
*   Um visual limpo e organizado, muito diferente da versão sem estilo.

Este projeto consolida todo o conhecimento de CSS e Flexbox, preparando você para criar layouts complexos e profissionais.
