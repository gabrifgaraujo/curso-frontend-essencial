import * as React from 'react';
import ContentPage from '../../components/ContentPage';
// CORREÇÃO: Caminho do import atualizado
import content from '../../assets/01-html-essencial/PROJETO-blog.md?raw';

const HtmlProjeto: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/html/semantico"
      backText="Voltar: HTML Semântico"
      goRoute="/css/introducao"
      goText="Próximo Módulo: CSS"
    />
  );
};

export default HtmlProjeto;
