import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/07-UX/07-ux.md?raw';

const NielsenUX: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/ux/prototipagem"
      backText="Voltar: Prototipagem no UX"
      goRoute="/ux/design-thinking"
      goText="Próximo: Design Thinking no UX"
    />
  );
};

export default NielsenUX;
