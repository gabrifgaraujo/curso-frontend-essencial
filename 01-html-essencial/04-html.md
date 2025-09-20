# Módulo 1, Aula 4: Links e Imagens

**Objetivo:** Aprender a conectar páginas usando links e a incorporar imagens em seu documento.

---

### Links (Âncoras)

A tag `<a>` (âncora) é um dos elementos mais importantes do HTML, pois é ela que torna a web uma... teia!

*   **Atributo `href` (Hypertext Reference):** Especifica a URL de destino do link.

#### Tipos de Links

1.  **Links Externos:** Apontam para um site diferente.
    ```html
    <a href="https://www.google.com">Visite o Google</a>
    ```

2.  **Links Internos:** Apontam para outra página dentro do seu próprio site.
    ```html
    <!-- Supondo que você tenha um arquivo "sobre.html" na mesma pasta -->
    <a href="sobre.html">Sobre Nós</a>
    ```

3.  **Links Âncora:** Apontam para uma parte específica da *mesma página*. Isso é útil para criar índices em páginas longas.
    *   Primeiro, adicione um atributo `id` ao elemento para o qual você quer rolar:
        ```html
        <h2 id="secao-contato">Seção de Contato</h2>
        ```
    *   Depois, crie o link usando `#` seguido do `id`:
        ```html
        <a href="#secao-contato">Ir para o Contato</a>
        ```

#### Abrindo Links em uma Nova Aba

Para que o link abra em uma nova aba do navegador, use o atributo `target` com o valor `_blank`. Isso é uma boa prática para links externos, pois mantém o usuário no seu site.

```html
<a href="https://www.wikipedia.org" target="_blank">Pesquisar na Wikipédia</a>
```

---

### Imagens

A tag `<img>` é usada para incorporar imagens em sua página. É uma tag vazia (não tem fechamento ).

*   **Atributos Essenciais:**
    *   `src` (source): Especifica o caminho (URL) para o arquivo de imagem.
    *   `alt` (alternative text): Fornece um texto descritivo para a imagem.
        *   **CRUCIAL para Acessibilidade:** Leitores de tela leem o texto `alt` para usuários com deficiência visual.
        *   **CRUCIAL para SEO:** Motores de busca usam o `alt` para entender o conteúdo da imagem.
        *   Se a imagem não carregar, o texto `alt` será exibido em seu lugar.

```html
<img src="imagens/logo-empresa.png" alt="Logotipo da Empresa XPTO">
```

#### Caminhos de Imagem (`src`)

*   **URL Absoluta:** Um link completo para uma imagem hospedada em outro lugar.
    ```html
    <img src="https://www.exemplo.com/imagem.jpg" alt="Descrição">
    ```
*   **Caminho Relativo:** O caminho a partir do seu arquivo HTML.
    *   `imagem.jpg`: A imagem está na mesma pasta que o HTML.
    *   `imagens/imagem.jpg`: A imagem está dentro de uma pasta chamada `imagens`.
    *   `../imagem.jpg`: A imagem está na pasta "pai" (um nível acima ).

#### Formatos de Imagem para a Web

*   **JPEG/JPG:** Ideal para fotografias.
*   **PNG:** Ideal para logos, ícones e imagens que precisam de fundo transparente.
*   **GIF:** Para animações simples.
*   **SVG:** Gráficos vetoriais escaláveis. Perfeito para ícones e logos, pois não perde qualidade ao ser redimensionado.
*   **WebP:** Um formato moderno que oferece alta qualidade com tamanhos de arquivo menores (preferível quando possível).
