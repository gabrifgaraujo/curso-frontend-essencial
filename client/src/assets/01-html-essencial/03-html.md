# Módulo 1, Aula 3: Estruturando Conteúdo com HTML

**Objetivo:** Aprender a usar as tags fundamentais para estruturar textos e listas.

---

### Títulos e Parágrafos

A hierarquia de informações em uma página é crucial para a legibilidade e para o SEO (Otimização para Mecanismos de Busca).

*   **Títulos (`<h1>` a `<h6>`):**
    *   `<h1>`: Título principal da página. **Use apenas um `<h1>` por página.**
    *   `<h2>`: Título de uma seção principal.
    *   `<h3>`: Subtítulo de uma seção.
    *   ...e assim por diante até o `<h6>`.
    *   **Importante:** Use os títulos em ordem hierárquica. Não pule de um `<h2>` para um `<h4>`, por exemplo.

*   **Parágrafos (`<p>`):**
    *   Usado para agrupar blocos de texto. O navegador adiciona automaticamente um espaço antes e depois de cada elemento `<p>`.

```html
<h1>Título Principal do Artigo</h1>
<p>Este é o parágrafo de introdução do nosso artigo.</p>

<h2>Subtítulo da Primeira Seção</h2>
<p>Conteúdo relacionado à primeira seção.</p>

<h3>Um detalhe importante</h3>
<p>Mais texto explicando o detalhe.</p>
```

### Formatação de Texto (Ênfase)

Às vezes, você quer dar um destaque especial a uma palavra ou frase.

*   `<strong>`: Indica que o texto tem **grande importância** ou seriedade. Os navegadores geralmente o exibem em **negrito**.
*   `<em>` (emphasis): Indica uma **ênfase** no texto, que muda o sentido da frase. Os navegadores geralmente o exibem em *itálico*.
*   `<b>`: Deixa o texto em negrito sem adicionar importância semântica. Use-o quando o `<strong>` não for apropriado.
*   `<i>`: Deixa o texto em itálico sem adicionar ênfase. Use para termos técnicos, nomes de navios, etc.

**Regra geral:** Prefira `<strong>` e `<em>` em vez de `<b>` e `<i>` por causa do valor semântico (o significado que eles carregam).

### Quebras e Separações

*   `  
` (break): Insere uma quebra de linha única. Use com moderação. Não use `  
` para criar espaço entre parágrafos; para isso, use CSS.
*   `<hr>` (horizontal rule): Cria uma linha horizontal e representa uma quebra temática no conteúdo (por exemplo, uma mudança de cena em uma história).

### Listas

Listas são ótimas para organizar informações.

*   **Lista Não Ordenada (`<ul>` - unordered list):** Para itens onde a ordem não importa. Usa marcadores (bullets).
    ```html
    <ul>
        <li>Café</li>
        <li>Leite</li>
        <li>Açúcar</li>
    </ul>
    ```

*   **Lista Ordenada (`<ol>` - ordered list):** Para itens onde a sequência é importante. Usa números.
    ```html
    <ol>
        <li>Primeiro, misture os ingredientes.</li>
        <li>Segundo, leve ao forno.</li>
        <li>Terceiro, espere esfriar.</li>
    </ol>
    ```

*   **Item de Lista (`<li>`):** É o elemento que representa cada item dentro de uma `<ul>` ou `<ol>`.
