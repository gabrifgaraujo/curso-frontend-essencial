import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/06-react/02-react.md?raw';

const ReactFundamentos: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/react/introducao"
      backText="Voltar: Introdução"
      goRoute="/react/hooks"
      goText="Avançar: Hooks Essenciais"
    />
  );
};

export default ReactFundamentos;
