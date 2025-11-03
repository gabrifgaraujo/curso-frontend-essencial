import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/08-webServices/04-ws.md?raw';

const WSConsumoAPI: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/ws/requisicoes"
      backText="Voltar: Requisições HTTP"
      goRoute="/ws/enviando-dados"
      goText="Próximo: Enviando Dados"
    />
  );
};

export default WSConsumoAPI;
