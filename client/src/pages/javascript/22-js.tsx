import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/03-javascript/22-js.md?raw';

const JsCallbacks: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/js/hoisting"
      backText="Voltar: Hoisting"
      goRoute="/js/promises"
      goText="Próximo: Promises"
    />
  );
};

export default JsCallbacks;
