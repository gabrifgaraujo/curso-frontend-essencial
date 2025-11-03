import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/04-algoritmos/03-algoritmos.md?raw';

const NaoLineares: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/algoritmos/estruturas-lineares"
      backText="Voltar: Estruturas Lineares"
      goRoute="/algoritmos/busca-e-ordenacao"
      goText="Próximo: Algoritmos de Busca e Ordenação"
    />
  );
};

export default NaoLineares;
