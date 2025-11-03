# Capítulo 9: Consumindo APIs com Segurança

Uma das tarefas mais comuns em aplicações web é buscar dados de uma API. TypeScript brilha nesse cenário, permitindo-nos modelar as respostas da API e garantir que estamos usando os dados corretamente em toda a aplicação.

## 1. Definindo os Tipos da Resposta da API

O primeiro passo é sempre criar uma `interface` ou `type` que represente a estrutura dos dados que você espera receber.

Vamos supor que estamos buscando dados de um usuário de uma API como a do GitHub. A resposta pode parecer com isto:

```json
{
  "login": "octocat",
  "id": 1,
  "avatar_url": "https://github.com/images/error/octocat_happy.gif",
  "name": "The Octocat",
  "company": "GitHub",
  "bio": "There’s no place like 127.0.0.1"
}
```

Nossa interface em TypeScript seria:

```typescript
interface GithubUser {
  login: string;
  id: number;
  avatar_url: string;
  name: string | null; // 'name' pode ser nulo
  company: string | null;
  bio: string | null;
}
```

## 2. Criando Funções de Requisição Reutilizáveis com Generics

Podemos criar uma função genérica para buscar dados de qualquer endpoint, garantindo que o tipo de retorno seja o que esperamos.

```typescript
async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Erro HTTP! Status: ${response.status}`);
  }
  const data: T = await response.json();
  return data;
}

// Exemplo de uso:
async function getGithubUser(username: string): Promise<GithubUser> {
  const url = `https://api.github.com/users/${username}`;
  return fetchData<GithubUser>(url);
}

// Chamando a função e usando os dados tipados
getGithubUser("octocat")
  .then(user => {
    console.log(`Usuário: ${user.name}, ID: ${user.id}`);
  })
  .catch(error => {
    console.error("Falha ao buscar usuário:", error);
  });
```

## 3. Lidando com Erros e Estados de Carregamento de Forma Tipada

Em aplicações React, é comum gerenciar estados de carregamento e erro ao consumir APIs. Podemos usar o `useState` e o `useEffect` com TypeScript para isso.

```tsx
import React, { useState, useEffect } from 'react';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostsList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await fetchData<Post[]>('https://jsonplaceholder.typicode.com/posts');
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Carregando posts...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
```

Ao tipar as respostas da API e usar funções genéricas, você garante que os dados que você espera estão realmente presentes e no formato correto, reduzindo erros em tempo de execução e melhorando a manutenibilidade do código.

