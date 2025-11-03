## Aula 4: Algoritmos de Busca e Ordenação

Nesta aula, vamos explorar dois tipos fundamentais de algoritmos: os de **busca** e os de **ordenação**. A capacidade de encontrar informações rapidamente e organizar dados de forma eficiente é crucial em qualquer aplicação de software. Abordaremos as implementações em JavaScript e analisaremos a complexidade de tempo de cada um.

### Busca Linear (Linear Search)

A **Busca Linear**, também conhecida como busca sequencial, é o método mais simples para encontrar um elemento em uma lista ou array. Ela funciona verificando cada elemento da lista, um por um, até que o elemento desejado seja encontrado ou até que todos os elementos tenham sido verificados.

#### Implementação em um Array em JavaScript

```javascript
function buscaLinear(arr, alvo) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === alvo) {
      return i; // Retorna o índice do elemento encontrado
    }
  }
  return -1; // Retorna -1 se o elemento não for encontrado
}

const numeros = [5, 2, 8, 1, 9, 4];
console.log("Busca Linear (elemento 8):", buscaLinear(numeros, 8)); // Saída: 2
console.log("Busca Linear (elemento 7):", buscaLinear(numeros, 7)); // Saída: -1
```

#### Análise de Complexidade (O(n))

A complexidade de tempo da Busca Linear é **O(n)**. No pior caso, o algoritmo precisa percorrer todos os `n` elementos do array para encontrar o alvo (se ele for o último elemento ou não estiver presente). No melhor caso, o elemento é o primeiro e a complexidade é O(1). Em média, a complexidade é O(n).

### Busca Binária (Binary Search)

A **Busca Binária** é um algoritmo de busca muito mais eficiente que a busca linear, mas com um requisito importante: o array deve estar **ordenado**. Ela funciona dividindo repetidamente a parte da lista onde o elemento pode estar pela metade.

#### Requisito: Array Ordenado

Para que a busca binária funcione, os elementos do array devem estar em ordem crescente ou decrescente.

#### Implementação em JavaScript

```javascript
function buscaBinaria(arr, alvo) {
  let inicio = 0;
  let fim = arr.length - 1;

  while (inicio <= fim) {
    let meio = Math.floor((inicio + fim) / 2);

    if (arr[meio] === alvo) {
      return meio; // Elemento encontrado
    } else if (arr[meio] < alvo) {
      inicio = meio + 1; // Busca na metade direita
    } else {
      fim = meio - 1; // Busca na metade esquerda
    }
  }
  return -1; // Elemento não encontrado
}

const arrayOrdenado = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log("Busca Binária (elemento 70):", buscaBinaria(arrayOrdenado, 70)); // Saída: 6
console.log("Busca Binária (elemento 35):", buscaBinaria(arrayOrdenado, 35)); // Saída: -1
```

#### Análise de Complexidade (O(log n))

A complexidade de tempo da Busca Binária é **O(log n)**. A cada passo, o espaço de busca é reduzido pela metade. Isso a torna extremamente eficiente para arrays grandes. Por exemplo, para um array com um milhão de elementos, a busca binária levaria no máximo cerca de 20 comparações (`log2(1.000.000) ≈ 19.9`), enquanto a busca linear poderia levar um milhão de comparações.

#### Comparação com a Busca Linear

| Característica        | Busca Linear (O(n))                                | Busca Binária (O(log n))                               |
| :-------------------- | :------------------------------------------------- | :----------------------------------------------------- |
| **Requisito**         | Não exige array ordenado                           | Exige array ordenado                                   |
| **Complexidade**      | Lenta para grandes conjuntos de dados              | Rápida para grandes conjuntos de dados                 |
| **Melhor Caso**       | O(1) (elemento no início)                          | O(1) (elemento no meio)                                |
| **Pior Caso**         | O(n) (elemento no final ou não presente)           | O(log n)                                               |
| **Uso Comum**         | Listas pequenas, listas não ordenadas              | Listas grandes e ordenadas (ex: dicionários, índices) |

### Algoritmos de Ordenação (Sorting)

Algoritmos de ordenação são usados para organizar elementos de uma lista em uma determinada ordem (crescente ou decrescente). A ordenação é uma operação fundamental em ciência da computação, pois muitos outros algoritmos (como a busca binária) dependem de dados ordenados.

#### Bubble Sort

O **Bubble Sort** é um algoritmo de ordenação simples que funciona repetidamente percorrendo a lista, comparando pares de elementos adjacentes e trocando-os se estiverem na ordem errada. O processo é repetido até que nenhuma troca seja necessária, indicando que a lista está ordenada.

**Explicação:** Ele "borbulha" os elementos maiores para o final da lista a cada passagem.

#### Implementação em JavaScript

```javascript
function bubbleSort(arr) {
  let n = arr.length;
  let trocado;
  do {
    trocado = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Troca os elementos
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        trocado = true;
      }
    }
    n--; // O maior elemento já está na posição correta
  } while (trocado);
  return arr;
}

const arrBubble = [64, 34, 25, 12, 22, 11, 90];
console.log("Array original (Bubble Sort):", arrBubble);
console.log("Array ordenado (Bubble Sort):", bubbleSort(arrBubble)); // Saída: [11, 12, 22, 25, 34, 64, 90]
```

#### Análise de por que é Ineficiente (O(n²))

A complexidade de tempo do Bubble Sort é **O(n²)** no pior e no caso médio. Isso ocorre porque, para cada elemento, ele pode ter que fazer `n` comparações e `n` trocas. Com dois loops aninhados (implícitos ou explícitos), o número de operações cresce quadraticamente com o tamanho da entrada. Para grandes conjuntos de dados, o Bubble Sort se torna impraticável.

#### Selection Sort

O **Selection Sort** é outro algoritmo de ordenação simples. Ele funciona dividindo a lista em duas partes: uma sublista de elementos já ordenados (inicialmente vazia) e uma sublista de elementos não ordenados (inicialmente toda a lista). O algoritmo encontra repetidamente o menor (ou maior) elemento da sublista não ordenada e o move para o final da sublista ordenada.

**Explicação:** Ele "seleciona" o menor elemento e o coloca na posição correta.

#### Implementação em JavaScript

```javascript
function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // Troca o elemento mínimo encontrado com o primeiro elemento não ordenado
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}

const arrSelection = [64, 25, 12, 22, 11];
console.log("Array original (Selection Sort):", arrSelection);
console.log("Array ordenado (Selection Sort):", selectionSort(arrSelection)); // Saída: [11, 12, 22, 25, 64]
```

#### Análise de Complexidade (O(n²))

A complexidade de tempo do Selection Sort também é **O(n²)** no pior, médio e melhor caso. Ele sempre realiza `n-1` passagens, e em cada passagem, ele compara `n-i` elementos para encontrar o mínimo. Embora o número de trocas seja menor que no Bubble Sort, o número de comparações permanece quadrático, tornando-o ineficiente para grandes conjuntos de dados.

### Menção ao método `.sort()` do JavaScript

É importante notar que JavaScript possui um método `Array.prototype.sort()` nativo. Embora seja conveniente, é crucial entender que sua implementação pode variar entre os navegadores e engines JavaScript (V8, SpiderMonkey, etc.). Historicamente, `.sort()` usava algoritmos como QuickSort ou MergeSort, que geralmente têm complexidade de tempo **O(n log n)**, muito mais eficientes que O(n²).

```javascript
const frutas = ["Banana", "Laranja", "Maçã", "Manga"];
frutas.sort();
console.log("Array ordenado com .sort():", frutas); // Saída: ["Banana", "Laranja", "Manga", "Maçã"]

const pontos = [40, 100, 1, 5, 25, 10];
// Para ordenar números corretamente, é preciso passar uma função de comparação
pontos.sort(function(a, b){return a - b});
console.log("Array de números ordenado com .sort():", pontos); // Saída: [1, 5, 10, 25, 40, 100]
```

#### A Importância de Entender os Algoritmos por Trás Dele

Mesmo usando métodos nativos, entender os algoritmos de ordenação subjacentes é vital por várias razões:

1.  **Escolha Certa:** Saber qual algoritmo é mais adequado para um problema específico (ex: quando a memória é limitada, ou quando a estabilidade da ordenação é importante).
2.  **Otimização:** Em cenários de alta performance, você pode precisar implementar uma versão otimizada ou um algoritmo diferente do padrão.
3.  **Entrevistas Técnicas:** Perguntas sobre algoritmos de busca e ordenação são comuns em entrevistas para desenvolvedores.
4.  **Depuração:** Compreender como os dados são manipulados ajuda a depurar problemas de ordenação.
5.  **Fundamentos:** Fortalece sua base em ciência da computação, tornando-o um engenheiro de software mais completo.

### Conclusão

Algoritmos de busca e ordenação são a espinha dorsal de muitas operações de software. A escolha do algoritmo certo pode ter um impacto significativo no desempenho de uma aplicação. Enquanto a busca linear e algoritmos de ordenação como Bubble Sort e Selection Sort são úteis para fins didáticos e para conjuntos de dados muito pequenos, a busca binária e algoritmos de ordenação mais avançados (como os usados no `.sort()` do JavaScript) são essenciais para lidar com grandes volumes de dados de forma eficiente. Na próxima aula, exploraremos os princípios de arquitetura de software, que nos ajudarão a construir sistemas mais robustos e manuteníveis.
