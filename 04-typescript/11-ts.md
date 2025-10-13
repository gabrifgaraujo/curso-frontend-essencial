# Capítulo 11: Projeto Prático - Lista de Tarefas (To-Do List)

Para consolidar o aprendizado de TypeScript e React, vamos construir uma aplicação simples de lista de tarefas (To-Do List). Este projeto abordará a estruturação, definição de tipos, gerenciamento de estado e renderização de componentes.

## Estrutura do Projeto

Assumindo que você já criou o projeto com Vite + React + TypeScript, vamos organizar as pastas da seguinte forma:

```
src/
├── components/
│   ├── TodoForm.tsx
│   ├── TodoItem.tsx
│   └── TodoList.tsx
├── types/
│   └── index.ts
├── App.tsx
└── main.tsx
```

## Definição dos Tipos e Interfaces

Primeiro, vamos definir a interface para uma tarefa em `src/types/index.ts`:

```typescript
// src/types/index.ts
export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}
```

## Desenvolvimento dos Componentes

### `TodoItem.tsx`

Este componente será responsável por exibir uma única tarefa e permitir marcá-la como concluída ou removê-la.

```tsx
// src/components/TodoItem.tsx
import React from 'react';
import { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  onToggleComplete: (id: string) => void;
  onRemove: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggleComplete, onRemove }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleComplete(todo.id)}
        style={{ marginRight: '10px' }}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', flexGrow: 1 }}>
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>Remover</button>
    </div>
  );
};

export default TodoItem;
```

### `TodoForm.tsx`

Este componente será um formulário para adicionar novas tarefas.

```tsx
// src/components/TodoForm.tsx
import React, { useState } from 'react';

interface TodoFormProps {
  onAddTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      onAddTodo(inputText);
      setInputText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Adicionar nova tarefa..."
        style={{ padding: '8px', marginRight: '10px', width: '300px' }}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default TodoForm;
```

### `TodoList.tsx`

Este componente renderizará a lista de tarefas, usando `TodoItem`.

```tsx
// src/components/TodoList.tsx
import React from 'react';
import { Todo } from '../types';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  onToggleComplete: (id: string) => void;
  onRemove: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggleComplete, onRemove }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default TodoList;
```

## Gerenciamento de Estado na `App.tsx`

O componente principal `App.tsx` será responsável por gerenciar o estado da lista de tarefas e passar as funções de manipulação para os componentes filhos.

```tsx
// src/App.tsx
import React, { useState } from 'react';
import { Todo } from './types';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: '1', text: 'Aprender TypeScript', completed: false },
    { id: '2', text: 'Construir To-Do List', completed: true },
  ]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(), // ID simples baseado no timestamp
      text,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleComplete = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Minha Lista de Tarefas</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} onToggleComplete={toggleComplete} onRemove={removeTodo} />
    </div>
  );
};

export default App;
```

Este projeto simples demonstra como usar TypeScript para definir tipos, tipar props e estados em componentes React, e gerenciar o fluxo de dados de forma segura. Você pode expandir este projeto adicionando persistência de dados (LocalStorage, API), filtros, etc.

