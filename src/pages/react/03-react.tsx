import React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '/public/05-react/03-react.md?raw';

const ReactHooks: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/react/fundamentos"
      backText="Voltar: Fundamentos"
      goRoute="/react/roteamento"
      goText="Avançar: Roteamento"
    />
  );
};

export default ReactHooks;
