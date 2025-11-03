import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/06-react/09-react.md?raw';

const ReactBuildVite: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/react/testes"
      backText="Voltar: Testes"
      goRoute="/react/projeto-pratico"
      goText="Avançar: Projeto Prático"
    />
  );
};

export default ReactBuildVite;
