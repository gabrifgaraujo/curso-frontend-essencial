// /src/components/Section.tsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import CodeBlock from './ui/CodeBlock';

interface SectionProps {
  content: string;
}

const Section: React.FC<SectionProps> = ({ content }) => {
  return (
    // As classes `prose` e `prose-invert` cuidam da maior parte do estilo!
    // `prose-invert` é para o modo escuro.
    // `max-w-none` remove a restrição de largura padrão do prose.
    <article className="prose prose-invert lg:prose-xl max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // A única customização que ainda precisamos é para os blocos de código.
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <CodeBlock className={className} {...props}>
                {String(children).replace(/\n$/, '')}
              </CodeBlock>
            ) : (
              // O `prose` já estiliza o código inline, mas podemos sobrescrever se quisermos.
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
};

export default Section;
