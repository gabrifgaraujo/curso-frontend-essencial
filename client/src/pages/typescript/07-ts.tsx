import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/05-typescript/07-ts.md?raw';

const Modulos: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/ts/tipos-avancados"
      backText="Voltar: Tipos Avançados"
      goRoute="/ts/typescript-com-react"
      goText="Próximo: TypeScript com React"
    />
  );
};

export default Modulos;