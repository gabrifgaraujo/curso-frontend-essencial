import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/08-webServices/05-ws.md?raw';

const EnviandoDados: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/ws/consumo-de-api"
      backText="Voltar: Consumo de API"
      goRoute="/ws/tratamento-de-erros"
      goText="Próximo: Tratamento de Erros"
    />
  );
};

export default EnviandoDados;
