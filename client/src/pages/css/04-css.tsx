import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/02-css-essencial/04-css.md?raw';

const CssCoresUnidades: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/css/box-model"
      backText="Voltar: Box Model"
      goRoute="/css/textos"
      goText="Próximo: Trabalhando com Textos"
    />
  );
};

export default CssCoresUnidades;
