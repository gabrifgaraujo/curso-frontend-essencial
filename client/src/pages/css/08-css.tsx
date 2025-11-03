import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/02-css-essencial/08-css.md?raw';

const CssFlexItems: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/css/flexbox-container"
      backText="Voltar: Flexbox Container"
      goRoute="/css/projeto-blog"
      goText="Próximo: Projeto Prático"
    />
  );
};

export default CssFlexItems;
