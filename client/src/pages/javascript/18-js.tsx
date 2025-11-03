import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/03-javascript/18-js.md?raw';

const JsRestSpread: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/js/desestruturacao"
      backText="Voltar: Desestruturação"
      goRoute="/js/map-filter-reduce"
      goText="Próximo: Map, Filter, Reduce"
    />
  );
};

export default JsRestSpread;
