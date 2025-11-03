import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/06-react/05-react.md?raw';

const ReactGerenciamentoEstado: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/react/roteamento"
      backText="Voltar: Roteamento"
      goRoute="/react/consumo-api"
      goText="Avançar: Consumo de APIs"
    />
  );
};

export default ReactGerenciamentoEstado;
