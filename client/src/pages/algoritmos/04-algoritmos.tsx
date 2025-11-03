import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/04-algoritmos/04-algoritmos.md?raw';

const BuscaEOrdenacao: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/algoritmos/estruturas-nao-lineares"
      backText="Voltar: Estruturas Não-Lineares"
      goRoute="/algoritmos/arquitetura"
      goText="Próximo: Noções da Arquitetura de Software"
    />
  );
};

export default BuscaEOrdenacao;
