import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/10-MA/03-ma.md?raw';

const SCRUM: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/ma/metodos-ageis"
      backText="Voltar: Metodologias Ágeis"
      goRoute="/ia/introducao"
      goText="Avançar: Introdução a IA"
    />
  );
};

export default SCRUM;
