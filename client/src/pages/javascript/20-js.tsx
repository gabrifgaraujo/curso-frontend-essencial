import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/03-javascript/20-js.md?raw';

const JsClasses: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/js/map-filter-reduce"
      backText="Voltar: Map, Filter, Reduce"
      goRoute="/js/hoisting"
      goText="Próximo: Hoisting"
    />
  );
};

export default JsClasses;
