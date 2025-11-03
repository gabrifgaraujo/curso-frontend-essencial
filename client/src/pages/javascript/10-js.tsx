import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/03-javascript/10-js.md?raw';

const JsIntroDom: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/js/loops"
      backText="Voltar: Loops"
      goRoute="/js/selecionando-elementos"
      goText="Próximo: Selecionando Elementos"
    />
  );
};

export default JsIntroDom;
