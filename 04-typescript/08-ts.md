# Capítulo 8: Integrando TypeScript com React

Usar TypeScript com React eleva a experiência de desenvolvimento, trazendo segurança de tipo para componentes, props e estados. Frameworks como Vite e Create React App oferecem templates prontos para essa combinação.

## Configurando um Projeto React com TypeScript

Com o Vite, o processo é direto:
```bash
npm create vite@latest meu-app-react -- --template react-ts
```
Isso cria um projeto React com toda a configuração de TypeScript pronta para uso.

## Tipando Componentes de Função

A forma mais comum de criar componentes em React hoje é com funções. Para tipá-los, usamos `React.FC` (Function Component).

```tsx
import React from 'react';

// 1. Definir a interface para as props
interface GreetingProps {
  nome: string;
  idade?: number; // Prop opcional
}

// 2. Usar React.FC<GreetingProps> para tipar o componente
const Greeting: React.FC<GreetingProps> = ({ nome, idade }) => {
  return (
    <div>
      <h1>Olá, {nome}!</h1>
      {idade && <p>Você tem {idade} anos.</p>}
    </div>
  );
};

export default Greeting;
```
Usar `React.FC` garante que:
- As `props` recebidas correspondem à interface `GreetingProps`.
- O componente pode ter `children` (embora isso tenha mudado nas versões mais recentes do React e `@types/react`).
- O valor de retorno é um elemento JSX válido.

## Tipando Hooks do React

### `useState`
O TypeScript geralmente consegue inferir o tipo do estado a partir do valor inicial.

```tsx
// `count` é inferido como 'number'
const [count, setCount] = React.useState(0);

// `user` é inferido como 'User | null'
const [user, setUser] = React.useState<User | null>(null);
```
Quando o estado inicial é `null` ou `undefined`, é uma boa prática fornecer o tipo explicitamente, como no exemplo do `user`.

### `useEffect` e `useRef`
- **`useEffect`**: A função passada para `useEffect` não deve retornar nada além de uma função de limpeza (cleanup). O TypeScript garante isso.
- **`useRef`**: Precisa de um tipo genérico para o valor que a ref irá conter.

```tsx
// `inputRef` irá apontar para um elemento de input HTML
const inputRef = React.useRef<HTMLInputElement>(null);

React.useEffect(() => {
  // O 'current' pode ser nulo, então é preciso verificar
  inputRef.current?.focus();
}, []);
```

## Tipando Eventos

Eventos do DOM, como cliques e mudanças em inputs, também têm tipos. Isso dá acesso seguro às propriedades do evento.

```tsx
import React, { useState, ChangeEvent, MouseEvent } from 'react';

const Formulario: React.FC = () => {
  const [value, setValue] = useState('');

  // O evento é do tipo ChangeEvent e vem de um HTMLInputElement
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  // O evento é do tipo MouseEvent e vem de um HTMLButtonElement
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    alert(`Valor enviado: ${value}`);
  };

  return (
    <form>
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={handleClick}>Enviar</button>
    </form>
  );
};
```

Tipar corretamente seus componentes React com TypeScript previne uma classe inteira de bugs, melhora o autocompletar e torna o código muito mais fácil de manter e refatorar.

