import * as React from 'react';
import ContentPage from '../../components/ContentPage';
// CORREÇÃO: Caminho do import atualizado
import content from '../../assets/01-html-essencial/05-html.md?raw';

const HtmlSemantico: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/html/links-e-imagens"
      backText="Voltar: Links e Imagens"
      goRoute="/html/projeto-blog"
      goText="Próximo: Projeto Prático"
    />
  );
};

export default HtmlSemantico;
