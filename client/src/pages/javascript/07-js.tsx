import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/03-javascript/07-js.md?raw';

const JsObjetos: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/js/funcoes"
      backText="Voltar: Funções"
      goRoute="/js/condicionais"
      goText="Próximo: Condicionais"
    />
  );
};

export default JsObjetos;
