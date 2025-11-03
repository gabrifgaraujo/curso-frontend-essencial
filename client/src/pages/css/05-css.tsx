import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/02-css-essencial/05-css.md?raw';

const CssTextos: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/css/cores-e-unidades"
      backText="Voltar: Cores e Unidades"
      goRoute="/css/intro-flexbox"
      goText="Próximo: Introdução ao Flexbox"
    />
  );
};

export default CssTextos;
