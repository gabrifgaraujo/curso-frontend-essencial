import Sumario from '../assets/sumario.md';
import Markdown from "./Markdown";
import NavButton from '../components/NavButton';
import ContentPage from './ContentPage';

const Summary: React.FC = () => {
  return (
    <>
      <ContentPage
        content={Sumario}
        backRoute="/html/estruturando-conteudo"
        backText="Voltar ao Início"
        goRoute="/html/introducao"
        goText="Próximo: HTML Semântico"
      />
    </>
  );
};

export default Summary;
