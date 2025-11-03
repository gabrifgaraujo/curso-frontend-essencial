import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/07-UX/06-ux.md?raw';

const ProtoUX: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/ux/tipografia"
      backText="Voltar: Tipografia no UX"
      goRoute="/ux/nielsen"
      goText="Próximo: Heurísticas de Nielsen"
    />
  );
};

export default ProtoUX;
