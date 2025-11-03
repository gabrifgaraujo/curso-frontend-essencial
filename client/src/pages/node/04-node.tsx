import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/09-node/04-node.md?raw';

const BancodeDados: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/node/frameworks"
      backText="Voltar: Frameworks"
      goRoute="/node/boas-praticas"
      goText="Próximo: Boas Práticas"
    />
  );
};

export default BancodeDados;
