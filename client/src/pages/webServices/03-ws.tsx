import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/08-webServices/03-ws.md?raw';

const Requisicoes: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/ws/rest"
      backText="Voltar: REST API"
      goRoute="/ws/consumo-de-api"
      goText="Próximo: Consumo de API"
    />
  );
};

export default Requisicoes;
