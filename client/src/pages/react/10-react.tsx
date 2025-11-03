import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/06-react/10-react.md?raw';

const ReactProjetoPratico: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/react/build-vite"
      backText="Voltar: Build com Vite"
      goRoute="/react/dicas-vaga"
      goText="Avançar: Dicas para Vaga"
    />
  );
};

export default ReactProjetoPratico;
