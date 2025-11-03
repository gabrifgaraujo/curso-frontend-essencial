import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/05-typescript/10-ts.md?raw';

const Testes: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/ts/consumo-de-api"
      backText="Voltar: Consumo de API"
      goRoute="/ts/projeto-typescript"
      goText="Próximo: Projeto TypeScript"
    />
  );
};

export default Testes;