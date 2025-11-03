import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/03-javascript/02-js.md?raw';

const JsVariaveis: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/js/introducao"
      backText="Voltar: Introdução ao JS"
      goRoute="/js/operadores"
      goText="Próximo: Operadores"
    />
  );
};

export default JsVariaveis;
