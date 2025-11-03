import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/07-UX/05-ux.md?raw';

const TipografiaUX: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/ux/lei-de-gestalt"
      backText="Voltar: Lei de Gestalt"
      goRoute="/ux/prototipagem"
      goText="Próximo: Prototipagem no UX"
    />
  );
};

export default TipografiaUX;
