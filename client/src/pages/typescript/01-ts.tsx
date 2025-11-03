import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/05-typescript/01-ts.md?raw';

const TsIntro: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/algoritmos/projeto-algoritmos"
      backText="Voltar: Projeto de Algoritmos"
      goRoute="/ts/tipos-basicos"
      goText="Próximo: Tipos Básicos"
    />
  );
};

export default TsIntro;
