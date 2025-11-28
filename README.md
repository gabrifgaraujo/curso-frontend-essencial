# Plataforma de Ensino Interativa - Curso Full-Stack

![React](https://img.shields.io/badge/React-19-blue?logo=react )
![Node.js](https://img.shields.io/badge/Node.js-22-green?logo=nodedotjs )
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript )
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-DB-blue?logo=postgresql )
![Vite](https://img.shields.io/badge/Vite-^6.3-purple?logo=vite )
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-cyan?logo=tailwindcss )

Este repositório contém o código-fonte de uma plataforma de e-learning completa, desenvolvida para demonstrar a arquitetura de uma aplicação web moderna, desde o backend robusto até um frontend reativo e interativo. O projeto foi construído com uma stack **TypeScript-first**, garantindo segurança de tipos e manutenibilidade em todo o ecossistema.

**[Acesse a versão de produção do frontend aqui](https://gabrifgaraujo.github.io/curso-frontend-essencial/ )**

---

## Funcionalidades Principais

O projeto vai além de um simples site de conteúdo, implementando funcionalidades que criam uma experiência de usuário engajadora e dinâmica.

### Funcionalidades do Lado do Servidor (Backend)

*   ✓ **Autenticação Segura com JWT:** Sistema completo de registro e login com senhas criptografadas (`bcrypt`) e gerenciamento de sessão via JSON Web Tokens.
*   ✓ **Middleware de Proteção de Rotas:** Garante que apenas usuários autenticados possam acessar endpoints sensíveis.
*   ✓ **Sistema de Gamificação (XP e Níveis):** Usuários ganham pontos de experiência (XP) ao completar lições, com um sistema que calcula e atribui novos níveis automaticamente.
*   ✓ **Prevenção de Duplicidade:** Lógica para impedir que um usuário ganhe XP pela mesma lição múltiplas vezes.
*   ✓ **Ranking de Usuários:** Uma API pública que retorna uma lista dos melhores usuários, ordenada por XP e nível, para fomentar a competição saudável.
*   ✓ **Integração com IA Generativa:** Um endpoint que se conecta à **Groq API** para gerar desafios de estudo dinâmicos e contextuais, utilizando o modelo Llama 3.

### Funcionalidades do Lado do Cliente (Frontend)

*   ✓ **Gerenciamento de Estado Global:** Uso da **Context API** do React para gerenciar o estado de autenticação do usuário em toda a aplicação de forma eficiente.
*   ✓ **Roteamento Inteligente:** Navegação fluida com **React Router**, incluindo:
    *   **Rotas Protegidas:** Apenas usuários logados podem acessar o conteúdo do curso.
    *   **Redirecionamento Automático:** Usuários são redirecionados para a página de login e, após o sucesso, retornam à página que tentaram acessar.
*   ✓ **Interface Reativa:** O `Header` e outros componentes mudam dinamicamente para refletir o estado de login do usuário.
*   ✓ **Aprendizado Ativo com Quadro Branco:** Integração com a biblioteca **Tldraw** para fornecer um quadro branco digital em cada lição.
*   ✓ **Desafios Gerados por IA:** O frontend consome a API de IA para exibir desafios únicos em cada página, incentivando o aprendizado ativo.
*   ✓ **Notificações em Tempo Real:** Feedback visual para o usuário através de "toasts" (`react-hot-toast`) para ações como ganho de XP, level up e erros.

---

## Tecnologias Utilizadas

<details>
<summary><strong>Backend (Server)</strong></summary>

*   **Ambiente:** Node.js
*   **Framework:** Express.js
*   **Linguagem:** TypeScript
*   **Banco de Dados:** PostgreSQL
*   **Autenticação:** JSON Web Token (JWT), Bcrypt.js
*   **Validação:** Zod
*   **Comunicação com DB:** `pg` (node-postgres)
*   **Dev Tools:** `ts-node-dev`, `dotenv`

</details>

<details>
<summary><strong>Frontend (Client)</strong></summary>

*   **Framework:** React 19
*   **Build Tool:** Vite
*   **Linguagem:** TypeScript
*   **Estilização:** Tailwind CSS
*   **Roteamento:** React Router
*   **Comunicação com API:** Axios
*   **Gerenciamento de Estado:** React Context API
*   **Componentes:** `react-icons`, `Tldraw`
*   **Notificações:** `react-hot-toast`
*   **Renderização de Markdown:** `react-markdown` com plugins `rehype-highlight` e `remark-gfm`

</details>

---

## Como Executar o Projeto Localmente

Para rodar este projeto, você precisará de dois terminais abertos simultaneamente, um para o backend e outro para o frontend.

### Pré-requisitos

*   Node.js (v18 ou superior)
*   npm ou pnpm
*   Uma string de conexão para um banco de dados PostgreSQL.

### 1. Configuração do Backend

```bash
# 1. Navegue para a pasta do servidor
cd server

# 2. Instale as dependências
npm install

# 3. Crie um arquivo .env na pasta 'server' e adicione as seguintes variáveis:
# DATABASE_URL=sua_string_de_conexao_postgresql
# JWT_SECRET=seu_segredo_super_secreto
# GROQ_API_KEY=sua_chave_da_api_groq
# PORT=4000

# 4. Inicie o servidor de desenvolvimento
npm run dev
```
O servidor estará rodando em `http://localhost:4000`.

### 2. Configuração do Frontend

```bash
# 1. Em um novo terminal, navegue para a pasta do cliente
cd client

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```
A aplicação estará acessível em `http://localhost:5173` (ou outra porta indicada pelo Vite ).

---

## Deploy

O frontend está configurado para deploy no GitHub Pages.

```bash
# Dentro da pasta 'client'
npm run deploy
```

O backend precisa ser hospedado em uma plataforma de nuvem como **Railway**, **Render** ou **Heroku**, com as variáveis de ambiente configuradas no painel do serviço.
