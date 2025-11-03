# Módulo 2, Aula 6: Introdução ao Flexbox

**Objetivo:** Entender o que é o Flexbox, por que ele revolucionou o layout em CSS e aprender seus conceitos fundamentais.

---

### O Problema do Layout Antigamente

Antes do Flexbox, criar layouts complexos em CSS era difícil. Técnicas como `float`, `position` e `table` eram usadas, mas eram "hacks" que traziam muitos efeitos colaterais, como a necessidade de limpar floats (`clearfix`) e dificuldades com alinhamento vertical.

### O que é o Flexbox?

O **Flexible Box Layout Module**, ou simplesmente **Flexbox**, é um modelo de layout unidimensional projetado para distribuir espaço e alinhar itens dentro de um contêiner.

**"Unidimensional"** significa que o Flexbox organiza os itens em uma única direção por vez: ou como uma **linha** (horizontal) ou como uma **coluna** (vertical).

Com Flexbox, tarefas que antes eram complicadas se tornam triviais:
*   Centralizar um item perfeitamente (vertical e horizontalmente).
*   Fazer com que os itens de uma lista ocupem todo o espaço disponível, dividindo-o igualmente.
*   Criar layouts que se reorganizam automaticamente quando o tamanho da tela muda.
*   Alinhar itens em diferentes alturas de forma consistente.

### Os 2 Conceitos Fundamentais do Flexbox

O Flexbox funciona com base em uma relação pai-filho:

1.  **O Flex Container:** É o elemento "pai". Você o cria aplicando a propriedade `display: flex;` a ele. Todas as propriedades do contêiner definem como os filhos se comportarão *em grupo*.

2.  **Os Flex Items:** São os elementos "filhos diretos" do flex container. Você pode aplicar propriedades específicas a eles para controlar seu comportamento individual dentro do grupo.

![Diagrama Flexbox](https://css-tricks.com/wp-content/uploads/2018/10/01-main-axis-cross-axis.svg )
*(Crédito da imagem: CSS-Tricks)*

### Eixos do Flexbox (Main Axis e Cross Axis)

Diferente de um sistema de coordenadas fixo (x, y), o Flexbox trabalha com eixos que podem mudar de direção.

*   **Eixo Principal (Main Axis):** É a direção principal na qual os flex items são distribuídos. Por padrão, é horizontal (da esquerda para a direita).
*   **Eixo Transversal (Cross Axis):** É o eixo perpendicular ao eixo principal. Por padrão, é vertical (de cima para baixo).

A mágica do Flexbox é que você pode mudar a direção desses eixos com a propriedade `flex-direction`.

*   Se `flex-direction: row;` (padrão), o Main Axis é horizontal.
*   Se `flex-direction: column;`, o Main Axis é vertical.

Entender qual eixo é o principal e qual é o transversal é a chave para dominar o alinhamento no Flexbox. Nas próximas aulas, veremos as propriedades que controlam o alinhamento em cada um desses eixos.
