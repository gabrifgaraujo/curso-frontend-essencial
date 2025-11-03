import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/05-typescript/11-ts.md?raw';

const TsProjeto: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/ts/testes"
      backText="Voltar: Testes"
      goRoute="/react/introducao"
      goText="Próximo: React"
    />
  );
};

export default TsProjeto;