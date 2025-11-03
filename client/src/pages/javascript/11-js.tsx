import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/03-javascript/11-js.md?raw';

const JsSelecionando: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/js/intro-dom"
      backText="Voltar: Introdução ao DOM"
      goRoute="/js/manipulando-estilos"
      goText="Próximo: Manipulando Estilos"
    />
  );
};

export default JsSelecionando;
