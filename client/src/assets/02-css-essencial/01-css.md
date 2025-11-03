# Módulo 2, Aula 1: Introdução ao CSS

**Objetivo:** Entender o que é CSS, como ele funciona e as três maneiras de adicioná-lo a um documento HTML.

---

### O que é CSS?

CSS (Cascading Style Sheets, ou Folhas de Estilo em Cascata) é a linguagem que usamos para descrever a apresentação de um documento HTML. Com o CSS, você controla:

*   **Cores:** de textos, fundos, bordas.
*   **Fontes:** tipo, tamanho, peso (negrito).
*   **Espaçamento:** margens, preenchimento (padding), espaço entre letras.
*   **Layout:** como os elementos são posicionados na página (um ao lado do outro, um abaixo do outro).
*   **Responsividade:** como o site se adapta a diferentes tamanhos de tela (desktop, tablet, celular).

Se o HTML é o esqueleto, o CSS é a roupa, a maquiagem e a postura.

### A Sintaxe do CSS

Uma regra CSS é composta por duas partes principais: um **seletor** e um **bloco de declaração**.

```css
/* Isso é um comentário em CSS */

seletor {
  propriedade: valor;
  outra-propriedade: outro-valor;
}
```

*   **Seletor:** Aponta para o(s) elemento(s) HTML que você quer estilizar. No exemplo `p`, estamos selecionando todos os parágrafos.
*   **Bloco de Declaração:** Fica entre chaves `{}` e contém uma ou mais declarações.
*   **Declaração:** É um par de `propriedade: valor;`.
    *   **Propriedade:** O atributo de estilo que você quer mudar (ex: `color`, `font-size`).
    *   **Valor:** A configuração que você quer aplicar à propriedade (ex: `blue`, `16px`).

**Exemplo prático:**
```css
p {
  color: darkblue;
  font-size: 16px;
}
```
Esta regra faz com que todos os elementos `<p>` na página tenham o texto na cor azul escuro e com 16 pixels de tamanho.

### 3 Maneiras de Adicionar CSS a uma Página

Existem três formas de aplicar CSS, mas uma delas é a mais recomendada para projetos profissionais.

1.  **CSS Externo (External Stylesheet) - A Melhor Prática**
    Você cria um arquivo separado com a extensão `.css` (ex: `estilos.css`) e o vincula ao seu arquivo HTML usando a tag `<link>` dentro do `<head>`.

    **No seu `index.html`:**
    ```html
    <head>
        <link rel="stylesheet" href="estilos.css">
    </head>
    ```
    **No seu `estilos.css`:**
    ```css
    body {
        background-color: #f0f0f0;
    }
    h1 {
        color: steelblue;
    }
    ```
    **Vantagens:**
    *   **Organização:** Separa a estrutura (HTML) da apresentação (CSS).
    *   **Reutilização:** O mesmo arquivo `.css` pode ser usado por várias páginas HTML.
    *   **Manutenção:** Muito mais fácil de gerenciar estilos em um só lugar.

2.  **CSS Interno (Internal Stylesheet)**
    Você coloca o código CSS diretamente dentro da tag `<style>` no `<head>` do seu arquivo HTML.

    ```html
    <head>
        <style>
            body {
                background-color: #f0f0f0;
            }
            h1 {
                color: steelblue;
            }
        </style>
    </head>
    ```
    **Quando usar?** Útil para estilos muito específicos de uma única página ou para testes rápidos. Geralmente evitado em projetos maiores.

3.  **CSS Inline (Inline Style)**
    Você aplica o estilo diretamente em um elemento HTML usando o atributo `style`.

    ```html
    <h1 style="color: steelblue; font-size: 32px;">Meu Título</h1>
    ```
    **Quando usar?** Quase nunca. É considerado uma má prática porque mistura estrutura e apresentação, dificulta a manutenção e tem alta especificidade (vamos ver isso depois), o que pode causar conflitos. Use apenas em situações muito específicas, como em emails HTML ou quando um JavaScript precisa aplicar um estilo dinâmico.

**Para este curso, usaremos SEMPRE a abordagem de CSS Externo.**
