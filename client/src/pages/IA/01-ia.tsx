import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/11-IA/01-IA.md?raw';

const IntroIA: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/ma/scrum"
      backText="Voltar: SCRUM para Devs"
      goRoute="/ia/produtividade"
      goText="Avançar: Produtividade com IA"
    />
  );
};

export default IntroIA;
