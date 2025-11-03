import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/04-algoritmos/02-algoritmos.md?raw';

const EstruturasLineares: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/algoritmos/introducao"
      backText="Voltar: Introdução aos Algoritmos"
      goRoute="/algoritmos/estruturas-nao-lineares"
      goText="Próximo: Estruturas Não-Lineares"
    />
  );
};

export default EstruturasLineares;
