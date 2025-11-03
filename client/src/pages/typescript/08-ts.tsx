import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/05-typescript/08-ts.md?raw';

const TypescriptReact: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/ts/modulos"
      backText="Voltar: Módulos"
      goRoute="/ts/consumo-de-api"
      goText="Próximo: Consumo de API"
    />
  );
};

export default TypescriptReact;