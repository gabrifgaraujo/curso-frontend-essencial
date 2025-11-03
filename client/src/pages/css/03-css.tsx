import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/02-css-essencial/03-css.md?raw';

const CssBoxModel: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/css/seletores"
      backText="Voltar: Seletores"
      goRoute="/css/cores-e-unidades"
      goText="Próximo: Cores e Unidades"
    />
  );
};

export default CssBoxModel;
