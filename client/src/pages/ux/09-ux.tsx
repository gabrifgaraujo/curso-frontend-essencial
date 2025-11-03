import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/07-UX/09-ux.md?raw';

const Acessibilidade: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/ux/prototipagem"
      backText="Voltar: Prototipagem no UX"
      goRoute="/ux/design-emocional"
      goText="Próximo: Design Emocional no UX"
    />
  );
};

export default Acessibilidade;
