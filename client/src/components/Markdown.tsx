// src/components/Markdown.tsx
import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

// Nossos estilos customizados para o container e layout
import "../markdown-styles.css";
import "../markdown-code.css";

// AQUI ESTÁ A CORREÇÃO: Importe um tema de cores do highlight.js
// que combine com o nosso design.
import 'highlight.js/styles/night-owl.css';

interface MarkdownProps {
  content: string;
}

const Markdown: React.FC<MarkdownProps> = ({ content }) => {
  return (
    <div className="markdown-content">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
        remarkPlugins={[remarkGfm]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default Markdown;
