import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/06-react/04-react.md?raw';

const ReactRoteamento: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/react/hooks"
      backText="Voltar: Hooks Essenciais"
      goRoute="/react/gerenciamento-estado"
      goText="Avançar: Gerenciamento de Estado"
    />
  );
};

export default ReactRoteamento;
