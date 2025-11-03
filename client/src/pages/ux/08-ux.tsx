import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/07-UX/08-ux.md?raw';

const DesignThinking: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/ux/nielsen"
      backText="Voltar: Heurísticas de Nielsen"
      goRoute="/ux/acessibilidade"
      goText="Próximo: Acessibilidade no UX"
    />
  );
};

export default DesignThinking;
