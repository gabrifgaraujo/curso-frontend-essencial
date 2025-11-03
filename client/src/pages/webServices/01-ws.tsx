import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/08-webServices/01-ws.md?raw';

const WebServicesIntro: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/ux/design-emocional"
      backText="Voltar: Design Emocional no UX"
      goRoute="/ws/rest"
      goText="Próximo: REST API"
    />
  );
};

export default WebServicesIntro;
