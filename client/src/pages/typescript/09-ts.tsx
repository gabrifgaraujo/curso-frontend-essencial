import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/05-typescript/09-ts.md?raw';

const ConsumoAPI: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/ts/typescript-com-react"
      backText="Voltar: TypeScript com React"
      goRoute="/ts/testes"
      goText="Próximo: Testes"
    />
  );
};

export default ConsumoAPI;