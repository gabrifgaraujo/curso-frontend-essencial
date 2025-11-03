import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/02-css-essencial/07-css.md?raw';

const CssFlexContainer: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/css/intro-flexbox"
      backText="Voltar: Introdução ao Flexbox"
      goRoute="/css/flexbox-items"
      goText="Próximo: Flexbox Items"
    />
  );
};

export default CssFlexContainer;
