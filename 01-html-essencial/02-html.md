# Módulo 1, Aula 2: Seu Primeiro Documento HTML

**Objetivo:** Aprender a estrutura básica de um arquivo HTML e entender o que são tags, elementos e atributos.

---

### A Estrutura Mínima de um Arquivo HTML

Todo arquivo HTML segue uma estrutura padrão para que os navegadores possam entendê-lo corretamente. Crie um arquivo chamado `index.html` e adicione o seguinte código:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha Primeira Página</title>
</head>
<body>
    <h1>Olá, Mundo!</h1>
    <p>Este é o meu primeiro parágrafo na web.</p>
</body>
</html>
```

Vamos analisar cada parte:

*   `<!DOCTYPE html>`: Declaração obrigatória que define o documento como sendo do tipo HTML5.
*   `<html>`: O elemento raiz que envolve todo o conteúdo da página. O atributo `lang="pt-br"` informa ao navegador que o idioma principal da página é o português do Brasil.
*   `<head>`: Contém metadados sobre a página — informações que não são exibidas diretamente no conteúdo, mas são importantes para o navegador e para os motores de busca.
    *   `<meta charset="UTF-8">`: Garante que caracteres especiais e acentos sejam exibidos corretamente.
    *   `<meta name="viewport" ...>`: Essencial para o design responsivo. Instrui o navegador a ajustar a largura da página à largura da tela do dispositivo.
    *   `<title>`: Define o título que aparece na aba do navegador.
*   `<body>`: Contém todo o conteúdo visível da página: textos, imagens, links, etc.

### Elementos e Tags

O HTML é composto por **elementos**. A maioria dos elementos é definida por uma **tag de abertura** e uma **tag de fechamento**.

*   **Tag de abertura:** `<p>`
*   **Conteúdo:** O texto ou outros elementos aqui dentro.
*   **Tag de fechamento:** `</p>`

O conjunto completo (`<p>Conteúdo</p>`) forma um **elemento**.

Alguns elementos são "vazios", pois não possuem conteúdo interno nem tag de fechamento. Por exemplo: `  
` (quebra de linha) e `<img>` (imagem).

### Atributos

**Atributos** fornecem informações adicionais sobre um elemento e são sempre especificados na tag de abertura. Eles geralmente vêm em pares de nome/valor, como `nome="valor"`.

Exemplo:
```html
<a href="https://www.google.com">Isso é um link</a>
```
*   A tag é `<a>` (âncora/link ).
*   O atributo é `href` (hypertext reference).
*   O valor do atributo é `"https://www.google.com"`.

**Atributos Globais:** Podem ser usados em quase todas as tags HTML. Os mais importantes que você usará constantemente são:

*   `id`: Um identificador **único** para um elemento na página.
*   `class`: Um ou mais identificadores para agrupar elementos. Vários elementos podem ter a mesma classe.
*   `style`: Usado para aplicar estilos CSS diretamente no elemento (veremos mais tarde por que isso deve ser evitado ).
