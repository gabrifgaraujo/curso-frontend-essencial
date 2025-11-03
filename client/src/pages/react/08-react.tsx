import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/06-react/08-react.md?raw';

const ReactTestes: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/react/estilizacao"
      backText="Voltar: Estilização"
      goRoute="/react/build-vite"
      goText="Avançar: Build com Vite"
    />
  );
};

export default ReactTestes;
