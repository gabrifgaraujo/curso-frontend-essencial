import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/03-javascript/04-js.md?raw';

const JsStrings: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/js/operadores"
      backText="Voltar: Operadores"
      goRoute="/js/arrays"
      goText="Próximo: Arrays"
    />
  );
};

export default JsStrings;
