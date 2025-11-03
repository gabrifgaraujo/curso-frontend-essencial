import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/08-webServices/06-ws.md?raw';

const Erros: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/ws/enviando-dados"
      backText="Voltar: Enviando Dados"
      goRoute="/ws/autenticacao"
      goText="Próximo: Autenticação e Autorização"
    />
  );
};

export default Erros;
