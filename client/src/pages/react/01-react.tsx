import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/06-react/01-react.md?raw';

const ReactIntro: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/ts/projeto-typescript"
      backText="Voltar: Projeto TypeScript"
      goRoute="/react/fundamentos"
      goText="Avançar: Fundamentos"
    />
  );
};

export default ReactIntro;
