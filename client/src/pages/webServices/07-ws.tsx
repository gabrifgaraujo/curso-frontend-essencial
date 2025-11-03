import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/08-webServices/07-ws.md?raw';

const Autenticacao: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/ws/enviando-dados"
      backText="Voltar: Enviando Dados"
      goRoute="/node/introducao"
      goText="Próximo: Introdução ao Node.js"
    />
  );
};

export default Autenticacao;
