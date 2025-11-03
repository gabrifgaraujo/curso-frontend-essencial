import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/06-react/06-react.md?raw';

const ReactConsumoApi: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/react/gerenciamento-estado"
      backText="Voltar: Gerenciamento de Estado"
      goRoute="/react/estilizacao"
      goText="Avançar: Estilização"
    />
  );
};

export default ReactConsumoApi;
