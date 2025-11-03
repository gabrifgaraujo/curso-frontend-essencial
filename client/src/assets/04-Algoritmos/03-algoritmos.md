## Aula 3: Estruturas de Dados Não Lineares

Nesta aula, vamos explorar as **estruturas de dados não lineares**, que organizam os elementos de forma hierárquica ou em rede, e não de maneira sequencial como nas estruturas lineares (ex: arrays, filas e pilhas).
Nelas, um único elemento pode se conectar a múltiplos outros, formando relações mais complexas — ideais para representar sistemas como árvores genealógicas, mapas, caminhos em jogos e bancos de dados.

### Termos Fundamentais das Árvores

*   **Filho (Child):** Um nó diretamente conectado abaixo de outro nó. Um nó pode ter zero ou mais filhos.
*   **Pai (Parent):** O nó diretamente conectado acima de um ou mais filhos.
*   **Irmão (Sibling):** Nós que compartilham o mesmo pai.
*   **Folha (Leaf):** Um nó que não tem filhos.
*   **Aresta (Edge):** A conexão entre dois nós.
*   **Subárvore (Subtree):** Uma porção de uma árvore que pode ser considerada uma árvore por si só, consistindo de um nó e todos os seus descendentes.

```
        (A) <-- Raiz
       /   \
      (B)   (C) <-- Filhos de A, Irmãos
     / \     \
    (D) (E)   (F) <-- D e E são filhos de B, F é filho de C
             / \ 
            (G) (H) <-- G e H são filhos de F, Folhas
```

#### Foco em Árvores Binárias de Busca (BST - Binary Search Tree)

Uma **Árvore Binária de Busca (BST)** é um tipo especial de árvore binária (onde cada nó tem no máximo dois filhos) que mantém seus elementos em uma ordem específica, facilitando a busca, inserção e remoção de dados.

**Regras de uma BST:**

1.  Para qualquer nó, todos os valores na sua subárvore esquerda são **menores** que o valor do nó.
2.  Para qualquer nó, todos os valores na sua subárvore direita são **maiores** que o valor do nó.
3.  Ambas as subárvores esquerda e direita também devem ser BSTs.

#### Exemplo de Estrutura de Nó para BST em JavaScript

```javascript
class Node {
  constructor(data) {
    this.data = data; // O valor armazenado no nó
    this.left = null; // Referência para o filho esquerdo
    this.right = null; // Referência para o filho direito
  }
}

// Exemplo de como seria uma BST simples
//         10
//        /  \
//       5    15
//      / \  /  \
//     2   7 12  18

const root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.left.left = new Node(2);
root.left.right = new Node(7);
root.right.left = new Node(12);
root.right.right = new Node(18);

console.log(root); // Objeto Node representando a raiz da BST
```

#### Operações Comuns em BSTs (Conceito)

*   **Inserção:** Para inserir um novo valor, você começa na raiz e compara o valor com o nó atual. Se for menor, vai para a esquerda; se for maior, vai para a direita. Repete até encontrar um lugar vazio.
*   **Busca:** Similar à inserção, você compara o valor a ser buscado com o nó atual e decide ir para a esquerda ou direita até encontrar o valor ou chegar a um nó nulo.
*   **Remoção:** É a operação mais complexa, pois precisa garantir que a estrutura da BST seja mantida após a remoção de um nó.

Em uma BST balanceada, as operações de busca, inserção e remoção têm complexidade de tempo **O(log n)**, o que é muito eficiente para grandes conjuntos de dados. No entanto, em uma BST desbalanceada (onde os elementos são inseridos em ordem crescente ou decrescente), a árvore pode degenerar em uma lista encadeada, e a complexidade pode se tornar **O(n)**.

### Conclusão

Estruturas de dados não lineares como Hash Maps (Objetos/Maps em JS), Conjuntos (Sets) e Árvores (especialmente BSTs) são ferramentas poderosas para resolver problemas de forma eficiente. Compreender como elas funcionam e quando usá-las é fundamental para otimizar o desempenho e a organização do seu código. Na próxima aula, exploraremos algoritmos de busca e ordenação, que frequentemente utilizam essas estruturas para alcançar alta performance.
