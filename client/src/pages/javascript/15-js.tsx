import * as React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/03-javascript/15-js.md?raw';

const JsCriandoRemovendo: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/js/eventos-pratica"
      backText="Voltar: Objeto de Evento"
      goRoute="/js/arrow-functions"
      goText="Próximo: Arrow Functions"
    />
  );
};

export default JsCriandoRemovendo;
