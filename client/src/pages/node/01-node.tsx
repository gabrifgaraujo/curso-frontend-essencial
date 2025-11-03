import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/09-node/01-node.md?raw';

const NodeIntro: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/react/dicas-vaga"
      backText="Voltar: Dicas para Vagas"
      goRoute="/node/fundamentos"
      goText="Próximo: Fundamentos ao NodeJS"
    />
  );
};

export default NodeIntro;
