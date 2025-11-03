import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/03-javascript/24-js.md?raw';

const JsFetch: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/js/promises"
      backText="Voltar: Promises"
      goRoute="/js/async-await"
      goText="Próximo: Async/Await"
    />
  );
};

export default JsFetch;
