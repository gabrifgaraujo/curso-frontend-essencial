import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/04-algoritmos/05-algoritmos.md?raw';

const Arquitetura: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/algoritmos/busca-e-ordenacao"
      backText="Voltar: Algoritmos de Busca e Ordenação"
      goRoute="/algoritmos/projeto-algoritmos"
      goText="Próximo: Projeto de Algoritmos"
    />
  );
};

export default Arquitetura;
