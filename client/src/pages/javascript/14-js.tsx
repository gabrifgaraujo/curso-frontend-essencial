import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/03-javascript/14-js.md?raw';

const JsEventosPratica: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/js/eventos"
      backText="Voltar: Eventos"
      goRoute="/js/criando-removendo-elementos"
      goText="Próximo: Criando e Removendo"
    />
  );
};

export default JsEventosPratica;
