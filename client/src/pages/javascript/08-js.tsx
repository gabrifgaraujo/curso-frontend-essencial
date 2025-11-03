import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/03-javascript/08-js.md?raw';

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
