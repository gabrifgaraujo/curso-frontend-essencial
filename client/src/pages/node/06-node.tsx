import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/09-node/06-node.md?raw';

const Deploy: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/node/boas-praticas"
      backText="Voltar: Boas Práticas"
      goRoute="/ma/introducao"
      goText="Próximo: Introdução a Métodos Ágeis"
    />
  );
};

export default Deploy;
