import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/03-javascript/19-js.md?raw';

const JsMapFilterReduce: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/js/rest-spread"
      backText="Voltar: Rest e Spread"
      goRoute="/js/classes"
      goText="Próximo: Classes"
    />
  );
};

export default JsMapFilterReduce;
