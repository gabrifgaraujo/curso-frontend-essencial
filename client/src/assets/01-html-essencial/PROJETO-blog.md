# Projeto Prático do Módulo 1: Criar a Estrutura de uma Página de Blog

**Objetivo:** Aplicar todos os conceitos de HTML aprendidos para construir a estrutura semântica de uma página de blog.

---

### Descrição

Neste projeto, você criará um único arquivo HTML, `index.html`, que representará a página de um post de blog. A página ainda não terá nenhum estilo visual (cores, fontes, etc.) — nosso foco é 100% na **estrutura correta e semântica** do conteúdo.

### Requisitos

Crie um arquivo `index.html` e siga os requisitos abaixo.

1.  **Estrutura Básica:**
    *   O arquivo deve começar com a declaração `<!DOCTYPE html>`.
    *   Deve conter as tags `<html>`, `<head>` e `<body>`.
    *   Dentro de `<head>`, inclua:
        *   A metatag `charset="UTF-8"`.
        *   A metatag `name="viewport"`.
        *   Um `<title>` para a página (ex: "Post do Blog: Minha Jornada no Desenvolvimento").

2.  **Cabeçalho (`<header>`):**
    *   Crie um `<header>` no topo do `<body>`.
    *   Dentro dele, adicione um `<h1>` com o nome do seu blog (ex: "Blog do Desenvolvedor").
    *   Abaixo do `<h1>`, adicione uma tag `<nav>` para a navegação principal.
    *   Dentro da `<nav>`, crie uma lista não ordenada (`<ul>`) com pelo menos três itens de lista (`<li>`).
    *   Cada item da lista deve conter um link (`<a>`). Os links podem apontar para `"#"` por enquanto (ex: `<a href="#">Home</a>`).

3.  **Conteúdo Principal (`<main>`):**
    *   Após o `<header>`, crie a tag `<main>`.
    *   Dentro de `<main>`, adicione uma tag `<article>` para o post do blog.
    *   O `<article>` deve conter:
        *   Um `<h2>` com o título do post.
        *   Pelo menos dois parágrafos (`<p>`) com texto simulado ("Lorem ipsum...").
        *   Uma imagem (`<img>`) com os atributos `src` e `alt` preenchidos. Você pode usar uma imagem de placeholder como `https://via.placeholder.com/600x300`.
        *   Uma lista (ordenada ou não ordenada ) com alguns pontos chave do post.

4.  **Barra Lateral (`<aside>`):**
    *   Após o `<main>`, adicione uma tag `<aside>`.
    *   Dentro dela, coloque um `<h3>` com o título "Posts Relacionados".
    *   Crie uma `<ul>` com links (`<a>`) para outros posts fictícios.

5.  **Rodapé (`<footer>`):**
    *   No final do `<body>`, crie uma tag `<footer>`.
    *   Dentro dela, adicione um parágrafo (`<p>`) com uma nota de copyright (ex: `&copy; 2025 Nome do Blog`).

### Como Verificar seu Trabalho

Abra o arquivo `index.html` no seu navegador. A página parecerá muito simples e sem estilo. Isso é o esperado! O importante é que a estrutura do conteúdo esteja correta. Use as "Ferramentas de Desenvolvedor" (`F12`) na aba "Elements" para inspecionar seu código e ver como o navegador interpretou a hierarquia das suas tags.
