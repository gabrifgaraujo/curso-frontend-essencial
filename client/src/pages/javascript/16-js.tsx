import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/03-javascript/16-js.md?raw';

const JsArrowFunctions: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/js/criando-removendo-elementos"
      backText="Voltar: Criando e Removendo Elementos"
      goRoute="/js/desestruturacao"
      goText="Próximo: Desestruturação"
    />
  );
};

export default JsArrowFunctions;
