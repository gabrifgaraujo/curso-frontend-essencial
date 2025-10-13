# Módulo 1, Aula 5: HTML Semântico - A Base de um Site Profissional

**Objetivo:** Entender a importância do HTML semântico e aprender a usar as tags estruturais que dão significado ao conteúdo.

---

### O que é e por que usar HTML Semântico?

HTML semântico significa usar as tags HTML corretas para o propósito correto. Em vez de usar a tag `<div>` para tudo, usamos tags que descrevem o tipo de conteúdo que elas contêm.

**Por que isso é tão importante?**

1.  **Acessibilidade:** Leitores de tela, usados por pessoas com deficiência visual, utilizam a semântica para navegar pela página. Uma tag `<nav>` diz a eles "isto é a navegação principal", enquanto um `<h1>` diz "este é o título mais importante".
2.  **SEO (Search Engine Optimization):** Motores de busca como o Google analisam a estrutura semântica para entender a hierarquia e o contexto do seu conteúdo, o que pode melhorar seu ranking nos resultados de busca.
3.  **Manutenção:** Um código semântico é muito mais fácil de ler e entender para outros desenvolvedores (e para você mesmo no futuro). Fica óbvio qual parte do código é o cabeçalho, qual é o rodapé, etc.

### As Tags Estruturais Semânticas

O HTML5 introduziu várias tags para definir as diferentes partes de uma página web.

*   `<header>`: Representa o cabeçalho de uma página ou de uma seção. Geralmente contém o logo, o título principal (`<h1>`) e a navegação principal.
*   `<nav>`: Usada para agrupar os links de navegação principais do site.
*   `<main>`: Define o conteúdo **principal e único** da página. Todo o conteúdo dentro de `<main>` deve ser exclusivo daquela página. **Só pode haver um `<main>` por página.**
*   `<article>`: Representa um bloco de conteúdo completo e autossuficiente que poderia, em teoria, ser distribuído de forma independente. Exemplos: um post de blog, uma notícia, um comentário de fórum.
*   `<section>`: Agrupa conteúdos relacionados tematicamente. Geralmente, cada `<section>` tem seu próprio título (ex: `<h2>`).
*   `<aside>`: Define um conteúdo que está relacionado ao conteúdo principal, mas não é parte essencial dele. Exemplos: uma barra lateral (sidebar) com links relacionados, biografias de autor, publicidade.
*   `<footer>`: Representa o rodapé de uma página ou de uma seção. Geralmente contém informações de copyright, links para políticas de privacidade, etc.
*   `<figure>` e `<figcaption>`: `<figure>` é usada para agrupar mídias como imagens, diagramas ou vídeos. `<figcaption>` fornece uma legenda para essa mídia.

### Exemplo de Estrutura Semântica

```html
<body>
    <header>
        <h1>Meu Blog de Tecnologia</h1>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/sobre.html">Sobre</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <article>
            <h2>O que é HTML Semântico?</h2>
            <p>Parágrafos explicando o conceito...</p>
            <figure>
                <img src="code.jpg" alt="Exemplo de código HTML semântico.">
                <figcaption>Estrutura de uma página com tags semânticas.</figcaption>
            </figure>
        </article>

        <section>
            <h2>Comentários</h2>
            <p>Deixe seu comentário abaixo!</p>
        </section>
    </main>

    <aside>
        <h3>Posts Relacionados</h3>
        <ul>
            <li><a href="#">O que é CSS?</a></li>
            <li><a href="#">O que é JavaScript?</a></li>
        </ul>
    </aside>

    <footer>
        <p>&copy; 2025 Meu Blog de Tecnologia. Todos os direitos reservados.</p>
    </footer>
</body>
```

### `<div>` vs. Tags Semânticas

A tag `<div>` ainda é muito útil, mas deve ser seu último recurso. Use-a quando não houver uma tag semântica mais apropriada. Seu principal uso hoje é para agrupar elementos com o único propósito de aplicar estilos CSS (por exemplo, criar um container para centralizar o layout).
