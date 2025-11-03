import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/03-javascript/23-js.md?raw';

const JsPromises: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/js/callbacks"
      backText="Voltar: Callbacks"
      goRoute="/js/fetch"
      goText="Próximo: Fetch API"
    />
  );
};

export default JsPromises;
