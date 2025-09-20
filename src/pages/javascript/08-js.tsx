import React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '/public/03-javascript/08-js.md?raw';

const JsCondicionais: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/js/objetos"
      backText="Voltar: Objetos"
      goRoute="/js/loops"
      goText="Próximo: Loops"
    />
  );
};

export default JsCondicionais;
