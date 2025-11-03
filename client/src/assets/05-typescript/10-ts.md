# Capítulo 10: Testes em Aplicações TypeScript

Testar seu código é crucial para garantir a qualidade e a estabilidade da sua aplicação. TypeScript adiciona uma camada extra de segurança aos seus testes, garantindo que seus mocks e asserções estejam corretos em termos de tipo.

## Configurando o Ambiente de Testes

Para projetos React, a combinação mais popular é **Jest** (como executor de testes) e **React Testing Library** (para interagir com componentes da mesma forma que um usuário faria). Em um projeto Vite, a configuração é um pouco diferente, geralmente usando **Vitest**, que é compatível com a API do Jest.

Para instalar as dependências necessárias:

```bash
npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom
```

## Escrevendo Testes Unitários e de Integração com Tipos

Vamos testar um componente `Counter` simples.

```tsx
// src/components/Counter.tsx
import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Contador</h1>
      <p>Valor atual: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
    </div>
  );
};

export default Counter;
```

Agora, o teste para este componente:

```tsx
// src/components/Counter.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';
import { describe, it, expect } from 'vitest';

describe('Componente Counter', () => {
  it('deve renderizar o valor inicial como 0', () => {
    render(<Counter />);
    // `screen` fornece métodos para encontrar elementos na tela
    // `getByText` procura por um elemento que contenha o texto
    expect(screen.getByText('Valor atual: 0')).toBeInTheDocument();
  });

  it('deve incrementar o valor quando o botão de incrementar é clicado', () => {
    render(<Counter />);
    const incrementButton = screen.getByText('Incrementar');
    
    // `fireEvent` simula eventos do usuário
    fireEvent.click(incrementButton);

    expect(screen.getByText('Valor atual: 1')).toBeInTheDocument();
  });

  it('deve decrementar o valor quando o botão de decrementar é clicado', () => {
    render(<Counter />);
    const decrementButton = screen.getByText('Decrementar');
    
    fireEvent.click(decrementButton);

    expect(screen.getByText('Valor atual: -1')).toBeInTheDocument();
  });
});
```

## Mockando Módulos e Funções de Forma Segura

Ao testar componentes que consomem APIs, não queremos fazer chamadas reais à rede. Para isso, usamos `mocks`.

Vamos imaginar um componente que busca e exibe um usuário do GitHub.

```tsx
// src/components/GithubProfile.tsx
import React, { useState, useEffect } from 'react';

interface User {
  name: string;
  login: string;
}

const GithubProfile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/users/octocat')
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  if (!user) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>@{user.login}</p>
    </div>
  );
};
```

Para testar, vamos mockar a função `fetch` globalmente usando Vitest.

```tsx
// src/components/GithubProfile.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import GithubProfile from './GithubProfile';
import { describe, it, expect, vi } from 'vitest';

// Mock da resposta da API
const mockUser = {
  name: 'The Octocat',
  login: 'octocat',
};

// Mock da função fetch
global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockUser),
  }) as Promise<Response>
);

describe('Componente GithubProfile', () => {
  it('deve buscar e exibir o nome e login do usuário', async () => {
    render(<GithubProfile />);

    // O componente começa mostrando "Carregando..."
    expect(screen.getByText('Carregando...')).toBeInTheDocument();

    // `waitFor` espera até que a asserção dentro dele seja verdadeira
    await waitFor(() => {
      // Após a chamada da API, o nome do usuário deve aparecer
      expect(screen.getByText('The Octocat')).toBeInTheDocument();
    });

    // O login também deve estar na tela
    expect(screen.getByText('@octocat')).toBeInTheDocument();
  });
});
```

O TypeScript nos ajuda aqui garantindo que nosso `mockUser` tenha a mesma estrutura que a interface `User` e que o mock de `fetch` retorne uma `Promise` que resolva para um objeto com um método `.json()`, assim como o `fetch` real.

