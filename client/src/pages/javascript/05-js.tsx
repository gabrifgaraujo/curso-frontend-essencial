import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/03-javascript/05-js.md?raw';

const JsArrays: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/js/strings"
      backText="Voltar: Strings"
      goRoute="/js/funcoes"
      goText="Próximo: Funções"
    />
  );
};

export default JsArrays;
