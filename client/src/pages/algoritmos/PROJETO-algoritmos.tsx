import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/04-algoritmos/PROJETO-algoritmos.md?raw';

const ProjetoAlgoritmos: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/algoritmos/arquitetura"
      backText="Voltar: Algoritmos de Busca e Ordenação"
      goRoute="/ts/introducao"
      goText="Próximo: Introdução ao Typescript"
    />
  );
};

export default ProjetoAlgoritmos;
