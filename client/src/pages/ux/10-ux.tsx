import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/07-UX/10-ux.md?raw';

const EmocionalUX: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/ux/acessibilidade"
      backText="Voltar: Acessibilidade no UX"
      goRoute="/ws/introducao"
      goText="Próximo: Web Services"
    />
  );
};

export default EmocionalUX;
