import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/11-IA/03-IA.md?raw';

const Prompt: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/ia/produtividade"
      backText="Voltar: Produtividade com IA"
      goRoute="/ia/uso-etico"
      goText="Avançar: Uso Ético da IA"
    />
  );
};

export default Prompt;
