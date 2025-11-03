import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/03-javascript/06-js.md?raw';

const JsFuncoes: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/js/arrays"
      backText="Voltar: Arrays"
      goRoute="/js/objetos"
      goText="Próximo: Objetos"
    />
  );
};

export default JsFuncoes;
