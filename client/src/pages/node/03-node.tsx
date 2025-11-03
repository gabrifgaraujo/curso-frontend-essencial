import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/09-node/03-node.md?raw';

const NodeFrameworks: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/node/fundamentos"
      backText="Voltar: Fundamentos"
      goRoute="/node/banco-de-dados"
      goText="Próximo: Banco de Dados"
    />
  );
};

export default NodeFrameworks;
