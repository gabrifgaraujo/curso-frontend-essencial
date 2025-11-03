import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/03-javascript/03-js.md?raw';

const JsOperadores: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/js/variaveis"
      backText="Voltar: Variáveis e Dados"
      goRoute="/js/strings"
      goText="Próximo: Strings"
    />
  );
};

export default JsOperadores;
