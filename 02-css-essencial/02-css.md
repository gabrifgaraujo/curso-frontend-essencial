# Módulo 2, Aula 2: Seletores Básicos e Combinadores

**Objetivo:** Aprender a selecionar precisamente os elementos HTML que você deseja estilizar usando os seletores mais comuns.

---

Seletores são a base do CSS. Dominá-los significa ter controle total sobre a estilização da sua página.

### Seletores Básicos

1.  **Seletor de Tipo (ou de Tag):** Seleciona todos os elementos de um determinado tipo.
    ```css
    /* Estiliza todos os parágrafos */
    p {
      line-height: 1.6;
    }
    /* Estiliza todos os links */
    a {
      text-decoration: none;
    }
    ```

2.  **Seletor de Classe (`.`):** Seleciona todos os elementos que possuem um determinado atributo `class`. Este é o seletor **mais usado e versátil**.
    *No HTML:*
    ```html
    <p class="destaque">Este parágrafo é importante.</p>
    <button class="btn-primario">Comprar</button>
    ```
    *No CSS:*
    ```css
    /* O ponto (.) indica que é uma classe */
    .destaque {
      background-color: yellow;
    }
    .btn-primario {
      background-color: blue;
      color: white;
    }
    ```
    Um elemento pode ter múltiplas classes: `<div class="card produto destaque">`.

3.  **Seletor de ID (`#`):** Seleciona **um único elemento** que possui um determinado atributo `id`. Lembre-se: um `id` deve ser **único** na página.
    *No HTML:*
    ```html
    <header id="cabecalho-principal"></header>
    ```
    *No CSS:*
    ```css
    /* A cerquilha (#) indica que é um ID */
    #cabecalho-principal {
      padding: 20px;
    }
    ```
    **Cuidado:** Use IDs com moderação. Eles têm alta "especificidade" e não são reutilizáveis como as classes. São mais comuns para âncoras de página ou para manipulação com JavaScript.

4.  **Seletor Universal (`*`):** Seleciona **todos** os elementos da página.
    ```css
    /* Geralmente usado para resets ou configurações globais */
    * {
      box-sizing: border-box; /* Veremos isso em breve! */
      margin: 0;
      padding: 0;
    }
    ```

### Combinadores de Seletores

Combinadores permitem criar seletores mais específicos baseados na relação entre os elementos no HTML.

1.  **Combinador Descendente (espaço):** Seleciona um elemento que está *dentro* de outro, em qualquer nível de aninhamento.
    ```css
    /* Seleciona QUALQUER link <a> que esteja DENTRO de um <nav> */
    nav a {
      color: green;
    }
    ```

2.  **Combinador de Filho Direto (`>`):** Seleciona um elemento que é *filho direto* de outro.
    ```css
    /* Seleciona APENAS o <li> que é filho DIRETO de uma <ul> */
    /* Não selecionaria um <li> dentro de outra lista aninhada */
    ul > li {
      list-style-type: square;
    }
    ```

3.  **Combinador de Irmão Adjacente (`+`):** Seleciona um elemento que vem *imediatamente depois* de outro elemento, no mesmo nível hierárquico.
    ```css
    /* Seleciona o primeiro <p> que vem LOGO APÓS um <h2> */
    h2 + p {
      font-style: italic;
      color: #555;
    }
    ```

### Agrupamento de Seletores

Você pode aplicar as mesmas regras a múltiplos seletores separando-os por vírgula.
```css
/* Aplica as mesmas regras para h1, h2 e h3 */
h1, h2, h3 {
  font-family: 'Arial', sans-serif;
  color: #333;
}
```
