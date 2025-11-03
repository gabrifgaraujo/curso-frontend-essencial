import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/01-html-essencial/04-html.md?raw';

const HtmlLinksImagens: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/html/estruturando-conteudo"
      backText="Voltar: Estruturando Conteúdo"
      goRoute="/html/semantico"
      goText="Próximo: HTML Semântico"
    />
  );
};

export default HtmlLinksImagens;
