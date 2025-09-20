# Módulo 2, Aula 7: Flexbox na Prática (Propriedades do Container)

**Objetivo:** Aprender e aplicar as principais propriedades do Flex Container para controlar o layout dos seus itens.

---

Para começar, vamos imaginar este HTML:

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

E este CSS inicial:

```css
.container {
  display: flex;
  border: 2px solid #333;
  min-height: 200px;
}
.item {
  background-color: steelblue;
  color: white;
  padding: 20px;
  margin: 10px;
}
```

Agora, vamos aplicar as propriedades ao `.container`.

### 1. `flex-direction`: Definindo a Direção do Eixo Principal

Esta propriedade define se os itens se organizarão em linha ou em coluna.

*   `row` (padrão): Itens dispostos horizontalmente, da esquerda para a direita.
*   `row-reverse`: Itens dispostos horizontalmente, da direita para a esquerda.
*   `column`: Itens dispostos verticalmente, de cima para baixo.
*   `column-reverse`: Itens dispostos verticalmente, de baixo para cima.

```css
.container {
  display: flex;
  flex-direction: column; /* Os itens agora ficarão um embaixo do outro */
}
```

### 2. `justify-content`: Alinhamento no Eixo Principal (Main Axis)

Esta propriedade distribui o espaço *sobrando* ao longo do **eixo principal**.

*   `flex-start` (padrão): Agrupa os itens no início do eixo principal.
*   `flex-end`: Agrupa os itens no final do eixo principal.
*   `center`: Centraliza os itens no eixo principal.
*   `space-between`: Distribui os itens igualmente. O primeiro item fica no início, o último no final, e o espaço é distribuído entre eles.
*   `space-around`: Distribui os itens com espaço igual ao redor deles (o espaço nas extremidades é metade do espaço entre os itens).
*   `space-evenly`: Distribui os itens com espaço perfeitamente igual entre eles e nas extremidades.

```css
.container {
  display: flex;
  /* Centraliza os itens horizontalmente (se flex-direction for row) */
  justify-content: center;
}
```

### 3. `align-items`: Alinhamento no Eixo Transversal (Cross Axis)

Esta propriedade alinha os itens ao longo do **eixo transversal**.

*   `stretch` (padrão): Estica os itens para preencherem a altura (ou largura) do contêiner.
*   `flex-start`: Alinha os itens no início do eixo transversal.
*   `flex-end`: Alinha os itens no final do eixo transversal.
*   `center`: Centraliza os itens no meio do eixo transversal.
*   `baseline`: Alinha os itens pela sua linha de base de texto.

```css
.container {
  display: flex;
  justify-content: center;
  /* Centraliza os itens verticalmente (se flex-direction for row) */
  align-items: center;
}
```
**Dica de Ouro:** `justify-content: center;` e `align-items: center;` em um flex container é a forma mais fácil de centralizar perfeitamente um item filho na tela.

### 4. `flex-wrap`: Controlando a Quebra de Linha

Por padrão, os flex items tentarão caber todos em uma única linha, mesmo que isso os esprema. `flex-wrap` controla esse comportamento.

*   `nowrap` (padrão): Não permite a quebra de linha.
*   `wrap`: Permite que os itens quebrem para a linha seguinte se não houver espaço.
*   `wrap-reverse`: Quebra para a linha seguinte, mas em ordem inversa.

```css
.container {
  display: flex;
  flex-wrap: wrap; /* Se os itens não couberem, eles vão para a linha de baixo */
}
```

### Propriedade Abreviada: `flex-flow`

Você pode combinar `flex-direction` e `flex-wrap` em uma única propriedade.

```css
/* flex-flow: <flex-direction> <flex-wrap>; */
.container {
  flex-flow: row wrap;
}
```
