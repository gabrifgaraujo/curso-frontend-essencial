import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/10-MA/01-ma.md?raw';

const AgeisIntro: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/node/deploy"
      backText="Voltar: Deploy de Aplicações"
      goRoute="/ma/metodos-ageis"
      goText="Avançar: Metodologias Ágeis"
    />
  );
};

export default AgeisIntro;
