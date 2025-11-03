import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/05-typescript/02-ts.md?raw';

const TiposBasicos: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/ts/introducao"
      backText="Voltar: Introdução"
      goRoute="/ts/objetos-e-funcoes"
      goText="Próximo: Objetos e Funções"
    />
  );
};

export default TiposBasicos;