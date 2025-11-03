import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/07-UX/03-ux.md?raw';

const ArquiteturaUX: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/ux/principios"
      backText="Voltar: Princípios do UX"
      goRoute="/ux/lei-de-gestalt"
      goText="Próximo: Lei de Gestalt"
    />
  );
};

export default ArquiteturaUX;
