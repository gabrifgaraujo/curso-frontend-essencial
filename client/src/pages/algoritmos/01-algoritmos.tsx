import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/04-algoritmos/01-algoritmos.md?raw';

const IntroducaoAlgoritmos: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/js/projeto-lista-tarefas"
      backText="Voltar: Projeto: Lista de Tarefas"
      goRoute="/algoritmos/estruturas-lineares"
      goText="Próximo: Estruturas Lineares"
    />
  );
};

export default IntroducaoAlgoritmos;
