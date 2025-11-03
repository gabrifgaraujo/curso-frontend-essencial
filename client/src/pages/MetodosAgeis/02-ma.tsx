import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/10-MA/02-ma.md?raw';

const MetodosAgeis: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/ma/introducao"
      backText="Voltar: Introdução a Métodos Ágeis"
      goRoute="/ma/scrum"
      goText="Avançar: SCRUM para Devs"
    />
  );
};

export default MetodosAgeis;
