import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/02-css-essencial/06-css.md?raw';

const CssIntroFlexbox: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/css/textos"
      backText="Voltar: Trabalhando com Textos"
      goRoute="/css/flexbox-container"
      goText="Próximo: Flexbox Container"
    />
  );
};

export default CssIntroFlexbox;
