// /src/vite-env.d.ts
/// <reference types="vite/client" />

// Esta declaração informa ao TypeScript que importar um arquivo .md com o sufixo ?raw
// resultará em um módulo com uma exportação padrão do tipo string.
declare module '*?raw' {
  const content: string;
  export default content;
}
