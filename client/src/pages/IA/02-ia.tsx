import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/11-IA/02-IA.md?raw';

const Produtividade: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/ia/introducao"
      backText="Voltar: Introdução a IA"
      goRoute="/ia/engenharia-de-prompt"
      goText="Avançar: Engenharia de Prompt"
    />
  );
};

export default Produtividade;
