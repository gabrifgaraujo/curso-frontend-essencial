import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/05-typescript/04-ts.md?raw';

const Interfaces: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/ts/objetos-e-funcoes"
      backText="Voltar: Objetos e Funções"
      goRoute="/ts/generics"
      goText="Próximo: Generics"
    />
  );
};

export default Interfaces;