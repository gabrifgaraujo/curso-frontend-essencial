import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/03-javascript/13-js.md?raw';

const JsEventos: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/js/manipulando-estilos"
      backText="Voltar: Manipulando Estilos"
      goRoute="/js/eventos-pratica"
      goText="Próximo: Objeto de Evento"
    />
  );
};

export default JsEventos;
