import * as React from 'react';
import ContentPage from '../../components/ContentPage';
// CORREÇÃO: Caminho do import atualizado
import content from '../../assets/01-html-essencial/02-html.md?raw';

const HtmlPrimeiroDoc: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/html/introducao"
      backText="Voltar: Introdução"
      goRoute="/html/estruturando-conteudo"
      goText="Próximo: Estruturando Conteúdo"
    />
  );
};

export default HtmlPrimeiroDoc;
