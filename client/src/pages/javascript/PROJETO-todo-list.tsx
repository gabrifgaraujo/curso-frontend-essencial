import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/03-javascript/PROJETO-todo-list.md?raw';

const JsProjeto: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/js/modulos"
      backText="Voltar: Módulos"
      goRoute="/algoritmos/introducao"
      goText="Introdução aos Algoritmos"
    />
  );
};

export default JsProjeto;
