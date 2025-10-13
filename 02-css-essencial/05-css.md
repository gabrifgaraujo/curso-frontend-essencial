# Módulo 2, Aula 5: Trabalhando com Textos

**Objetivo:** Aprender as principais propriedades CSS para estilizar e formatar textos, melhorando a legibilidade e o design.

---

### Propriedades Essenciais de Fonte

*   **`font-family`:** Define a família da fonte (o tipo de letra). É uma boa prática fornecer uma lista de fontes, da mais preferida para a menos, terminando com uma família genérica (fallback).
    ```css
    body {
      /* O navegador tentará usar a 'Roboto'. Se não encontrar, tentará a 'Helvetica', depois a 'Arial', e por último, qualquer fonte sem serifa disponível. */
      font-family: 'Roboto', Helvetica, Arial, sans-serif;
    }
    ```
    *   **`serif`:** Fontes com pequenos traços nas extremidades (ex: Times New Roman).
    *   **`sans-serif`:** Fontes sem serifa, com acabamento limpo (ex: Arial, Helvetica). São as mais comuns para web.

*   **`font-size`:** Define o tamanho do texto. **Use a unidade `rem` para acessibilidade.**
    ```css
    p {
      font-size: 1rem; /* Geralmente 16px */
    }
    h1 {
      font-size: 2.5rem; /* Geralmente 40px */
    }
    ```

*   **`font-weight`:** Define o "peso" ou a "grossura" da fonte.
    *   Valores comuns: `normal` (400), `bold` (700).
    *   Pode usar números: `100`, `200`, ..., `900`. (Depende se a fonte importada suporta esses pesos).
    ```css
    .destaque {
      font-weight: bold;
    }
    ```

*   **`font-style`:** Geralmente usado para aplicar o estilo itálico.
    *   Valores: `normal`, `italic`.
    ```css
    em {
      font-style: italic;
    }
    ```

### Propriedades de Estilo de Texto

*   **`color`:** Define a cor do texto.
    ```css
    p {
      color: #333333; /* Cinza escuro para boa legibilidade */
    }
    ```

*   **`text-align`:** Alinha o texto horizontalmente dentro do seu elemento.
    *   Valores: `left` (padrão), `right`, `center`, `justify`.
    ```css
    h1 {
      text-align: center;
    }
    ```

*   **`text-decoration`:** Adiciona ou remove decorações do texto. Mais usado para remover o sublinhado de links.
    ```css
    a {
      text-decoration: none; /* Remove o sublinhado */
      color: steelblue;
    }
    /* Adiciona o sublinhado de volta quando o mouse passa por cima */
    a:hover {
      text-decoration: underline;
    }
    ```

*   **`text-transform`:** Transforma o texto para maiúsculas ou minúsculas.
    *   Valores: `none` (padrão), `uppercase`, `lowercase`, `capitalize` (primeira letra de cada palavra em maiúscula).
    ```css
    h1 {
      text-transform: uppercase;
    }
    ```

*   **`line-height`:** Define a altura da linha, ou o espaçamento entre as linhas de um texto. Para boa legibilidade em parágrafos, um valor entre `1.5` e `1.7` (sem unidade) é recomendado.
    ```css
    p {
      line-height: 1.6; /* 1.6 vezes o tamanho da fonte */
    }
    ```
