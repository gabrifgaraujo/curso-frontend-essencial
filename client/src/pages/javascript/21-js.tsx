import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/03-javascript/21-js.md?raw';

const JsHoisting: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/js/classes"
      backText="Voltar: Classes"
      goRoute="/js/callbacks"
      goText="Próximo: Callbacks"
    />
  );
};

export default JsHoisting;
