import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/07-UX/02-ux.md?raw';

const PrincipiosUX: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/ux/introducao"
      backText="Voltar: Introdução ao UX"
      goRoute="/ux/arquitetura"
      goText="Próximo: Arquitetura de Informação"
    />
  );
};

export default PrincipiosUX;
