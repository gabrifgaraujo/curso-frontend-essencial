import React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '/public/03-javascript/10-js.md?raw';

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
