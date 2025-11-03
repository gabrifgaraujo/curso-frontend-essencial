import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/03-javascript/09-js.md?raw';

const JsLoops: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/js/condicionais"
      backText="Voltar: Condicionais"
      goRoute="/js/intro-dom"
      goText="Próximo: Introdução ao DOM"
    />
  );
};

export default JsLoops;
