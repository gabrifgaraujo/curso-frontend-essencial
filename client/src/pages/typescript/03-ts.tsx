import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/05-typescript/03-ts.md?raw';

const ObjetosEFuncoes: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/ts/tipos-basicos"
      backText="Voltar: Tipos Básicos"
      goRoute="/ts/interfaces"
      goText="Próximo: Interfaces"
    />
  );
};

export default ObjetosEFuncoes;