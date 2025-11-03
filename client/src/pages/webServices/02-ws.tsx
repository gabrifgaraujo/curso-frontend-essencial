import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/08-webServices/02-ws.md?raw';

const RestWS: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/ws/introducao"
      backText="Voltar: Introdução a Web Services"
      goRoute="/ws/requisicoes"
      goText="Próximo: Requisições HTTP"
    />
  );
};

export default RestWS;
