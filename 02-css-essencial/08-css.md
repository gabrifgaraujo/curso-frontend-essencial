# Módulo 2, Aula 8: Flexbox na Prática (Propriedades dos Itens)

**Objetivo:** Aprender a controlar o comportamento individual dos flex items, como sua ordem, crescimento e encolhimento.

---

Enquanto as propriedades do container organizam o grupo, as propriedades dos itens ajustam exceções e comportamentos individuais. Continuaremos usando o mesmo HTML da aula anterior.

### 1. `order`: Mudando a Ordem Visual

Por padrão, os flex items são exibidos na ordem em que aparecem no HTML. A propriedade `order` permite que você mude essa ordem visualmente, sem alterar o HTML.

*   O valor padrão para todos os itens é `0`.
*   Itens com valores menores de `order` aparecem primeiro.
*   Itens com o mesmo `order` mantêm sua ordem original entre si.

```css
/* No CSS */
.item-1 { order: 2; } /* Será o segundo */
.item-2 { order: 1; } /* Será o primeiro */
.item-3 { order: 3; } /* Será o terceiro */
```
A ordem visual na tela será: **item 2, item 1, item 3**.

### 2. `flex-grow`: A Habilidade de Crescer

Esta propriedade define a capacidade de um flex item "crescer" e ocupar o espaço livre no container.

*   O valor é um número sem unidade que funciona como uma proporção.
*   O padrão é `0`, o que significa que o item não cresce.
*   Se todos os itens tiverem `flex-grow: 1;`, eles dividirão o espaço livre igualmente.
*   Se um item tiver `flex-grow: 2;` e os outros tiverem `flex-grow: 1;`, ele tentará ocupar o dobro do espaço livre em relação aos outros.

```css
.item {
  flex-grow: 1; /* Todos os itens crescem igualmente para preencher o container */
}

.item-largo {
  flex-grow: 2; /* Este item será mais largo que os outros que têm flex-grow: 1 */
}
```

### 3. `flex-shrink`: A Habilidade de Encolher

É o oposto de `flex-grow`. Define a capacidade de um item encolher se não houver espaço suficiente no container.

*   O padrão é `1`, o que significa que os itens podem encolher para caber.
*   Se você definir `flex-shrink: 0;`, o item não encolherá e manterá seu tamanho original, mesmo que isso "estoure" o container.

```css
.item-fixo {
  flex-shrink: 0; /* Este item não vai encolher, mesmo que falte espaço */
}
```

### 4. `flex-basis`: O Tamanho Inicial

Define o tamanho "ideal" ou inicial de um item antes que o espaço livre seja distribuído.

*   Pode ser um valor em `px`, `%`, `rem`, etc.
*   O valor padrão é `auto`, que geralmente significa que o tamanho do item é baseado no seu conteúdo.

Se você definir `flex-basis: 200px`, o navegador tentará dar 200px de largura ao item (no eixo principal) e depois aplicará `flex-grow` ou `flex-shrink` a partir desse tamanho base.

### Propriedade Abreviada: `flex` (Muito Importante!)

É a forma mais comum de definir as três propriedades acima de uma vez. A sintaxe é:
`flex: <flex-grow> <flex-shrink> <flex-basis>;`

Valores comuns que você verá:

*   `flex: 0 1 auto;` (Este é o valor padrão)
    *   Não cresce (`0`), pode encolher (`1`), tamanho base é automático (`auto`).
*   `flex: 1;` (Abreviação para `flex: 1 1 0;`)
    *   Cresce (`1`), encolhe (`1`), e o tamanho base é `0`. Isso força os itens a dividirem o espaço de forma proporcional ao seu `flex-grow`, sendo ótimo para layouts de colunas iguais.
*   `flex: auto;` (Abreviação para `flex: 1 1 auto;`)
    *   Cresce, encolhe, e o tamanho base é `auto`.
*   `flex: none;` (Abreviação para `flex: 0 0 auto;`)
    *   Não cresce, não encolhe. O item fica com seu tamanho "natural".

### 5. `align-self`: Sobrescrevendo o `align-items`

A propriedade `align-self` permite que você aplique um alinhamento no eixo transversal para **um único item**, sobrescrevendo o valor de `align-items` definido no container.

*   Aceita os mesmos valores que `align-items`: `auto` (padrão), `flex-start`, `flex-end`, `center`, `stretch`, `baseline`.

```css
.container {
  display: flex;
  align-items: center; /* Todos os itens ficam centralizados verticalmente */
}

.item-especial {
  /* Este item específico ficará alinhado no topo, ignorando o 'center' do container */
  align-self: flex-start;
}
```
