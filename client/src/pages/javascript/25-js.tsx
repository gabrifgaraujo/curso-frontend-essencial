import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/03-javascript/25-js.md?raw';

const JsAsyncAwait: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/js/fetch"
      backText="Voltar: Fetch API"
      goRoute="/js/modulos"
      goText="Próximo: Módulos"
    />
  );
};

export default JsAsyncAwait;
