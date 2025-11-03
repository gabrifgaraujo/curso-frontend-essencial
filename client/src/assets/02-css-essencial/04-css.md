# Módulo 2, Aula 4: Cores e Unidades

**Objetivo:** Aprender as diferentes formas de representar cores em CSS e entender as unidades de medida mais comuns para dimensionamento e tipografia.

---

### Representando Cores em CSS

Existem várias maneiras de definir uma cor. As mais comuns são:

1.  **Nomes de Cores (Keywords):**
    Existem mais de 140 nomes de cores predefinidos. São ótimos para testes rápidos.
    ```css
    .alerta {
      color: red;
      background-color: lightyellow;
    }
    ```

2.  **HEX (Hexadecimal):**
    A forma mais comum na web. É representada por `#` seguido de 6 caracteres (0-9, a-f). Os pares representam Vermelho, Verde e Azul (RGB).
    ```css
    /* #RRGGBB */
    .titulo {
      color: #0000FF; /* Azul puro */
    }
    /* Forma abreviada com 3 dígitos se os pares forem iguais */
    .subtitulo {
      color: #00F; /* Mesmo que #0000FF */
    }
    .fundo {
      background-color: #333; /* Mesmo que #333333 (cinza escuro) */
    }
    ```

3.  **RGB (Red, Green, Blue):**
    Define a cor pela intensidade de vermelho, verde e azul, com valores de 0 a 255.
    ```css
    .caixa {
      background-color: rgb(51, 51, 51); /* Mesmo que #333 */
    }
    ```

4.  **RGBA (Red, Green, Blue, Alpha):**
    Igual ao RGB, mas com um quarto valor, o **Alpha**, que controla a **transparência/opacidade**. O valor de Alpha vai de `0.0` (totalmente transparente) a `1.0` (totalmente opaco).
    ```css
    .overlay {
      /* Fundo preto com 50% de opacidade */
      background-color: rgba(0, 0, 0, 0.5);
    }
    ```

### Unidades de Medida em CSS

As unidades definem o tamanho de fontes, larguras, margens, etc. Elas se dividem em duas categorias: **absolutas** e **relativas**.

#### Unidades Absolutas

Têm um tamanho fixo e não mudam. São boas para elementos que você quer que tenham sempre o mesmo tamanho, independentemente do contexto.

*   **`px` (Pixels):** A unidade mais comum. 1px é um "ponto" na tela. É uma unidade de referência sólida, mas pode ser problemática para acessibilidade (não escala bem com as configurações do navegador do usuário).

#### Unidades Relativas

São flexíveis e se adaptam a outros valores, como o tamanho da fonte do elemento pai ou o tamanho da tela. **São essenciais para criar designs responsivos e acessíveis.**

*   **`%` (Porcentagem):** Relativa ao valor da mesma propriedade no elemento pai.
    ```css
    .pai { width: 500px; }
    .filho { width: 50%; } /* O filho terá 250px de largura */
    ```

*   **`em`:** Relativa ao `font-size` do **elemento pai**. Se o pai tem `font-size: 16px`, então `2em` será `32px`. É útil para criar componentes escaláveis.

*   **`rem` (Root EM) - A Melhor Unidade para Fontes e Espaçamentos:**
    Relativa ao `font-size` do **elemento raiz** (a tag `<html>`). Por padrão, nos navegadores, isso é `16px`.
    *   `1rem = 16px`
    *   `1.5rem = 24px`
    *   `0.5rem = 8px`
    **Por que é tão bom?** Se um usuário configurar seu navegador para exibir fontes maiores por questões de acessibilidade, todo o seu layout e tipografia definidos com `rem` escalarão proporcionalmente, mantendo a harmonia do design. **É a unidade preferida para `font-size`, `margin`, `padding`, `width` e `height` em componentes.**

*   **`vw` (Viewport Width) e `vh` (Viewport Height):**
    Relativas ao tamanho da "viewport" (a área visível da janela do navegador).
    *   `1vw` = 1% da largura da viewport.
    *   `1vh` = 1% da altura da viewport.
    *   `width: 100vw;` faz um elemento ter a largura exata da tela.
    *   `min-height: 100vh;` faz uma seção ocupar pelo menos a altura inteira da tela.
