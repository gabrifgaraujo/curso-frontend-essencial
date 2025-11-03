import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/09-node/05-node.md?raw';

const BoasPraticas: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/node/banco-de-dados"
      backText="Voltar: Banco de Dados"
      goRoute="/node/deploy"
      goText="Próximo: Deploy"
    />
  );
};

export default BoasPraticas;
