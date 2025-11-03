import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/06-react/11-react.md?raw';

const ReactDicasVaga: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/react/projeto-pratico"
      backText="Voltar: Projeto Prático"
      goRoute="/ux/introducao"
      goText="Próximo: Introdução ao UX"
    />
  );
};

export default ReactDicasVaga;
