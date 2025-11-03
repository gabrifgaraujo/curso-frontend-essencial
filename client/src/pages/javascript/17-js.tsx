import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/03-javascript/17-js.md?raw';

const JsDesestruturacao: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/js/arrow-functions"
      backText="Voltar: Arrow Functions"
      goRoute="/js/rest-spread"
      goText="Próximo: Rest e Spread"
    />
  );
};

export default JsDesestruturacao;
