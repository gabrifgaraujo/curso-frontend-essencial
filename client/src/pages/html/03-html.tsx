import * as React from 'react';
import ContentPage from '../../components/ContentPage';
// CORREÇÃO: Caminho do import atualizado
import content from '../../assets/01-html-essencial/03-html.md?raw';

const HtmlEstrutura: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/html/primeiro-documento"
      backText="Voltar: Primeiro Documento"
      goRoute="/html/links-e-imagens"
      goText="Próximo: Links e Imagens"
    />
  );
};

export default HtmlEstrutura;
