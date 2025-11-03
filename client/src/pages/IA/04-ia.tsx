import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/11-IA/04-IA.md?raw';

const UsoEtico: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/ia/engenharia-de-prompt"
      backText="Voltar: Engenharia de Prompt"
      goRoute="/summary"
      goText="Voltar ao Sumário"
    />
  );
};

export default UsoEtico;
