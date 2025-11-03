import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/02-css-essencial/01-css.md?raw';

const CssIntro: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/html/projeto-blog"
      backText="Voltar: Projeto HTML"
      goRoute="/css/seletores"
      goText="Próximo: Seletores"
    />
  );
};

export default CssIntro;
