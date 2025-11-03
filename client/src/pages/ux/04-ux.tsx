import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/07-UX/04-ux.md?raw';

const Gestalt: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/ux/arquitetura"
      backText="Voltar: Arquitetura de Informação"
      goRoute="/ux/tipografia"
      goText="Próximo: Tipografia no UX"
    />
  );
};

export default Gestalt;
