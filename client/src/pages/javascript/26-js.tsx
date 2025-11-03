import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/03-javascript/26-js.md?raw';

const JsModulos: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/js/async-await"
      backText="Voltar: Async/Await"
      goRoute="/js/projeto-lista-tarefas"
      goText="Projeto: Lista de Tarefas"
    />
  );
};

export default JsModulos;
