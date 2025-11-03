import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/05-typescript/06-ts.md?raw';

const TiposAvancados: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/ts/generics"
      backText="Voltar: Generics"
      goRoute="/ts/modulos"
      goText="Próximo: Módulos"
    />
  );
};

export default TiposAvancados;