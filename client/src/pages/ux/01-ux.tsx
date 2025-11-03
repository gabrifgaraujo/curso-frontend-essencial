import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/07-UX/01-ux.md?raw';

const UXintro: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/react/dicas-vaga"
      backText="Voltar: Dicas de Vagas"
      goRoute="/ux/principios"
      goText="Próximo: Princípios do UX"
    />
  );
};

export default UXintro;
