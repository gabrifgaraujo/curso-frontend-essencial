import * as React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

// Contextos e Serviços
import { AuthProvider } from './contexts/AuthContext';
import { Toaster } from 'react-hot-toast';

// Componentes Principais
import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute'; // Nosso protetor de rotas
import Summary from './components/Summary';
import Sobre from './components/Sobre';

// Páginas Principais e de Autenticação
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import RankingPage from './pages/RankingPage';

// Importe TODAS as suas páginas de conteúdo
// HTML
import HtmlIntro from './pages/html/01-html';
import HtmlPrimeiroDoc from './pages/html/02-html';
import HtmlEstrutura from './pages/html/03-html';
import HtmlLinksImagens from './pages/html/04-html';
import HtmlSemantico from './pages/html/05-html';
import HtmlProjeto from './pages/html/PROJETO-blog';

// CSS
import CssIntro from './pages/css/01-css';
import CssSeletores from './pages/css/02-css';
import CssBoxModel from './pages/css/03-css';
import CssCoresUnidades from './pages/css/04-css';
import CssTextos from './pages/css/05-css';
import CssIntroFlexbox from './pages/css/06-css';
import CssFlexContainer from './pages/css/07-css';
import CssFlexItems from './pages/css/08-css';
import CssProjeto from './pages/css/PROJETO-estilizando-blog';

// JavaScript
import JsIntro from './pages/javascript/01-js';
import JsVariaveis from './pages/javascript/02-js';
import JsOperadores from './pages/javascript/03-js';
import JsStrings from './pages/javascript/04-js';
import JsArrays from './pages/javascript/05-js';
import JsFuncoes from './pages/javascript/06-js';
import JsObjetos from './pages/javascript/07-js';
import JsCondicionais from './pages/javascript/08-js';
import JsLoops from './pages/javascript/09-js';
import JsIntroDom from './pages/javascript/10-js';
import JsSelecionando from './pages/javascript/11-js';
import JsManipulandoEstilos from './pages/javascript/12-js';
import JsEventos from './pages/javascript/13-js';
import JsEventosPratica from './pages/javascript/14-js';
import JsCriandoRemovendo from './pages/javascript/15-js';
import JsArrowFunctions from './pages/javascript/16-js'
import JsDesestruturacao from './pages/javascript/17-js'
import JsRestSpread from './pages/javascript/18-js'
import JsMapFilterReduce from './pages/javascript/19-js'
import JsClasses from './pages/javascript/20-js'
import JsHoisting from './pages/javascript/21-js'
import JsCallbacks from './pages/javascript/22-js'
import JsPromises from './pages/javascript/23-js'
import JsFetch from './pages/javascript/24-js'
import JsAsyncAwait from './pages/javascript/25-js'
import JsModulos from './pages/javascript/26-js'
import JsProjeto from './pages/javascript/PROJETO-todo-list';

// Algoritmos
import IntroducaoAlgoritmos from './pages/algoritmos/01-algoritmos'
import EstruturasLineares from './pages/algoritmos/02-algoritmos'
import NaoLineares from './pages/algoritmos/03-algoritmos'
import BuscaEOrdenacao from './pages/algoritmos/04-algoritmos'
import Arquitetura from './pages/algoritmos/05-algoritmos'
import ProjetoAlgoritmos from './pages/algoritmos/PROJETO-algoritmos'

// TypeScript
import TsIntro from './pages/typescript/01-ts';
import TiposBasicos from './pages/typescript/02-ts'
import ObjetosEFuncoes from './pages/typescript/03-ts'
import Interfaces from './pages/typescript/04-ts'
import Generics from './pages/typescript/05-ts'
import TiposAvancados from './pages/typescript/06-ts'
import Modulos from './pages/typescript/07-ts'
import TypescriptReact from './pages/typescript/08-ts'
import ConsumoAPI from './pages/typescript/09-ts'
import Testes from './pages/typescript/10-ts'
import TsProjeto from './pages/typescript/11-ts'

// React
import ReactIntro from './pages/react/01-react';
import ReactFundamentos from './pages/react/02-react';
import ReactHooks from './pages/react/03-react';
import ReactRoteamento from './pages/react/04-react';
import ReactGerenciamentoEstado from './pages/react/05-react';
import ReactConsumoApi from './pages/react/06-react';
import ReactEstilizacao from './pages/react/07-react';
import ReactTestes from './pages/react/08-react';
import ReactBuildVite from './pages/react/09-react';
import ReactProjetoPratico from './pages/react/10-react';
import ReactDicasVaga from './pages/react/11-react';

//UX
import UxIntro from './pages/ux/01-ux';
import PrincipiosUX from './pages/ux/02-ux';
import ArquiteturaUX from './pages/ux/03-ux';
import Gestalt from './pages/ux/04-ux';
import TipografiaUX from './pages/ux/05-ux';
import ProtoUX from './pages/ux/06-ux';
import NielsenUX from './pages/ux/07-ux';
import DesignThinking from './pages/ux/08-ux';
import Acessibilidade from './pages/ux/09-ux';
import EmocionalUX from './pages/ux/10-ux';

//Web Services
import WebServicesIntro from './pages/webServices/01-ws';
import RestWS from './pages/webServices/02-ws';
import Requisicoes from './pages/webServices/03-ws';
import WSConsumoAPI from './pages/webServices/04-ws';
import EnviandoDados from './pages/webServices/05-ws';
import Erros from './pages/webServices/06-ws';
import Autenticacao from './pages/webServices/07-ws';

// Node
import NodeIntro from './pages/node/01-node';
import NodeFundamentos from './pages/node/02-node';
import NodeFrameworks from './pages/node/03-node';
import BancodeDados from './pages/node/04-node';
import BoasPraticas from './pages/node/05-node';
import Deploy from './pages/node/06-node';

// Metodos Ágeis
import AgeisIntro from './pages/MetodosAgeis/01-ma';
import MetodosAgeis from './pages/MetodosAgeis/02-ma';
import SCRUM from './pages/MetodosAgeis/03-ma';

// IA
import IntroIA from './pages/IA/01-ia';
import Produtividade from './pages/IA/02-ia';
import Prompt from './pages/IA/03-ia';
import UsoEtico from './pages/IA/04-ia';


function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#333',
              color: '#fff',
              border: '1px solid #555',
            },
          }}
        />
        <div className="min-h-screen bg-gray-900 text-gray-300 font-sans">
          <Header />
          <main className="container mx-auto px-4 pt-28 pb-16">
            <Routes>
              {/* --- Rotas Públicas --- */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/ranking" element={<RankingPage />} />
              <Route path="/sobre" element={<Sobre />} />

              {/* --- Rotas Protegidas --- */}
              <Route path="/summary" element={<ProtectedRoute><Summary /></ProtectedRoute>} />

              {/* Rotas de HTML */}
              <Route path="/html/introducao" element={<ProtectedRoute><HtmlIntro /></ProtectedRoute>} />
              <Route path="/html/primeiro-documento" element={<ProtectedRoute><HtmlPrimeiroDoc /></ProtectedRoute>} />
              <Route path="/html/estruturando-conteudo" element={<ProtectedRoute><HtmlEstrutura /></ProtectedRoute>} />
              <Route path="/html/links-e-imagens" element={<ProtectedRoute><HtmlLinksImagens /></ProtectedRoute>} />
              <Route path="/html/semantico" element={<ProtectedRoute><HtmlSemantico /></ProtectedRoute>} />
              <Route path="/html/projeto-blog" element={<ProtectedRoute><HtmlProjeto /></ProtectedRoute>} />

              {/* Rotas de CSS */}
              <Route path="/css/introducao" element={<ProtectedRoute><CssIntro /></ProtectedRoute>} />
              <Route path="/css/seletores" element={<ProtectedRoute><CssSeletores /></ProtectedRoute>} />
              <Route path="/css/box-model" element={<ProtectedRoute><CssBoxModel /></ProtectedRoute>} />
              <Route path="/css/cores-e-unidades" element={<ProtectedRoute><CssCoresUnidades /></ProtectedRoute>} />
              <Route path="/css/textos" element={<ProtectedRoute><CssTextos /></ProtectedRoute>} />
              <Route path="/css/intro-flexbox" element={<ProtectedRoute><CssIntroFlexbox /></ProtectedRoute>} />
              <Route path="/css/flexbox-container" element={<ProtectedRoute><CssFlexContainer /></ProtectedRoute>} />
              <Route path="/css/flexbox-items" element={<ProtectedRoute><CssFlexItems /></ProtectedRoute>} />
              <Route path="/css/projeto-blog" element={<ProtectedRoute><CssProjeto /></ProtectedRoute>} />

              {/* Rotas de JavaScript */}
              <Route path="/js/introducao" element={<ProtectedRoute><JsIntro /></ProtectedRoute>} />
              <Route path="/js/variaveis" element={<ProtectedRoute><JsVariaveis /></ProtectedRoute>} />
              <Route path="/js/operadores" element={<ProtectedRoute><JsOperadores /></ProtectedRoute>} />
              <Route path="/js/strings" element={<ProtectedRoute><JsStrings /></ProtectedRoute>} />
              <Route path="/js/arrays" element={<ProtectedRoute><JsArrays /></ProtectedRoute>} />
              <Route path="/js/funcoes" element={<ProtectedRoute><JsFuncoes /></ProtectedRoute>} />
              <Route path="/js/objetos" element={<ProtectedRoute><JsObjetos /></ProtectedRoute>} />
              <Route path="/js/condicionais" element={<ProtectedRoute><JsCondicionais /></ProtectedRoute>} />
              <Route path="/js/loops" element={<ProtectedRoute><JsLoops /></ProtectedRoute>} />
              <Route path="/js/intro-dom" element={<ProtectedRoute><JsIntroDom /></ProtectedRoute>} />
              <Route path="/js/selecionando-elementos" element={<ProtectedRoute><JsSelecionando /></ProtectedRoute>} />
              <Route path="/js/manipulando-estilos" element={<ProtectedRoute><JsManipulandoEstilos /></ProtectedRoute>} />
              <Route path="/js/eventos" element={<ProtectedRoute><JsEventos /></ProtectedRoute>} />
              <Route path="/js/eventos-pratica" element={<ProtectedRoute><JsEventosPratica /></ProtectedRoute>} />
              <Route path="/js/criando-removendo-elementos" element={<ProtectedRoute><JsCriandoRemovendo /></ProtectedRoute>} />
              <Route path="/js/arrow-functions" element={<ProtectedRoute><JsArrowFunctions /></ProtectedRoute>} />
              <Route path="/js/desestruturacao" element={<ProtectedRoute><JsDesestruturacao /></ProtectedRoute>} />
              <Route path="/js/rest-spread" element={<ProtectedRoute><JsRestSpread /></ProtectedRoute>} />
              <Route path="/js/map-filter-reduce" element={<ProtectedRoute><JsMapFilterReduce /></ProtectedRoute>} />
              <Route path="/js/classes" element={<ProtectedRoute><JsClasses /></ProtectedRoute>} />
              <Route path="/js/hoisting" element={<ProtectedRoute><JsHoisting /></ProtectedRoute>} />
              <Route path="/js/callbacks" element={<ProtectedRoute><JsCallbacks /></ProtectedRoute>} />
              <Route path="/js/promises" element={<ProtectedRoute><JsPromises /></ProtectedRoute>} />
              <Route path="/js/fetch" element={<ProtectedRoute><JsFetch /></ProtectedRoute>} />
              <Route path="/js/async-await" element={<ProtectedRoute><JsAsyncAwait /></ProtectedRoute>} />
              <Route path="/js/modulos" element={<ProtectedRoute><JsModulos /></ProtectedRoute>} />
              <Route path="/js/projeto-lista-tarefas" element={<ProtectedRoute><JsProjeto /></ProtectedRoute>} />

              {/* Rotas de Algoritmos */}
              <Route path="/algoritmos/introducao" element={<ProtectedRoute><IntroducaoAlgoritmos /></ProtectedRoute>} />
              <Route path="/algoritmos/estruturas-lineares" element={<ProtectedRoute><EstruturasLineares /></ProtectedRoute>} />
              <Route path="/algoritmos/estruturas-nao-lineares" element={<ProtectedRoute><NaoLineares /></ProtectedRoute>} />
              <Route path="/algoritmos/busca-e-ordenacao" element={<ProtectedRoute><BuscaEOrdenacao /></ProtectedRoute>} />
              <Route path="/algoritmos/arquitetura" element={<ProtectedRoute><Arquitetura /></ProtectedRoute>} />
              <Route path="/algoritmos/projeto-algoritmos" element={<ProtectedRoute><ProjetoAlgoritmos /></ProtectedRoute>} />

              {/* Rotas de TypeScript */}
              <Route path="/ts/introducao" element={<ProtectedRoute><TsIntro /></ProtectedRoute>} />
              <Route path="/ts/tipos-basicos" element={<ProtectedRoute><TiposBasicos /></ProtectedRoute>} />
              <Route path="/ts/objetos-e-funcoes" element={<ProtectedRoute><ObjetosEFuncoes /></ProtectedRoute>} />
              <Route path="/ts/interfaces" element={<ProtectedRoute><Interfaces /></ProtectedRoute>} />
              <Route path="/ts/generics" element={<ProtectedRoute><Generics /></ProtectedRoute>} />
              <Route path="/ts/tipos-avancados" element={<ProtectedRoute><TiposAvancados /></ProtectedRoute>} />
              <Route path="/ts/modulos" element={<ProtectedRoute><Modulos /></ProtectedRoute>} />
              <Route path="/ts/typescript-com-react" element={<ProtectedRoute><TypescriptReact /></ProtectedRoute>} />
              <Route path="/ts/consumo-de-api" element={<ProtectedRoute><ConsumoAPI /></ProtectedRoute>} />
              <Route path="/ts/testes" element={<ProtectedRoute><Testes /></ProtectedRoute>} />
              <Route path="/ts/projeto-typescript" element={<ProtectedRoute><TsProjeto /></ProtectedRoute>} />

              {/* Rotas de React */}
              <Route path="/react/introducao" element={<ProtectedRoute><ReactIntro /></ProtectedRoute>} />
              <Route path="/react/fundamentos" element={<ProtectedRoute><ReactFundamentos /></ProtectedRoute>} />
              <Route path="/react/hooks" element={<ProtectedRoute><ReactHooks /></ProtectedRoute>} />
              <Route path="/react/roteamento" element={<ProtectedRoute><ReactRoteamento /></ProtectedRoute>} />
              <Route path="/react/gerenciamento-estado" element={<ProtectedRoute><ReactGerenciamentoEstado /></ProtectedRoute>} />
              <Route path="/react/consumo-api" element={<ProtectedRoute><ReactConsumoApi /></ProtectedRoute>} />
              <Route path="/react/estilizacao" element={<ProtectedRoute><ReactEstilizacao /></ProtectedRoute>} />
              <Route path="/react/testes" element={<ProtectedRoute><ReactTestes /></ProtectedRoute>} />
              <Route path="/react/build-vite" element={<ProtectedRoute><ReactBuildVite /></ProtectedRoute>} />
              <Route path="/react/projeto-pratico" element={<ProtectedRoute><ReactProjetoPratico /></ProtectedRoute>} />
              <Route path="/react/dicas-vaga" element={<ProtectedRoute><ReactDicasVaga /></ProtectedRoute>} />

              {/* Rotas de UX */}
              <Route path="/ux/introducao" element={<ProtectedRoute><UxIntro /></ProtectedRoute>} />
              <Route path="/ux/principios" element={<ProtectedRoute><PrincipiosUX /></ProtectedRoute>} />
              <Route path="/ux/arquitetura" element={<ProtectedRoute><ArquiteturaUX /></ProtectedRoute>} />
              <Route path="/ux/lei-de-gestalt" element={<ProtectedRoute><Gestalt /></ProtectedRoute>} />
              <Route path="/ux/tipografia" element={<ProtectedRoute><TipografiaUX /></ProtectedRoute>} />
              <Route path="/ux/prototipagem" element={<ProtectedRoute><ProtoUX /></ProtectedRoute>} />
              <Route path="/ux/nielsen" element={<ProtectedRoute><NielsenUX /></ProtectedRoute>} />
              <Route path="/ux/design-thinking" element={<ProtectedRoute><DesignThinking /></ProtectedRoute>} />
              <Route path="/ux/acessibilidade" element={<ProtectedRoute><Acessibilidade /></ProtectedRoute>} />
              <Route path="/ux/design-emocional" element={<ProtectedRoute><EmocionalUX /></ProtectedRoute>} />

              {/* Rotas de Web Services */}
              <Route path="/ws/introducao" element={<ProtectedRoute><WebServicesIntro /></ProtectedRoute>} />
              <Route path="/ws/rest" element={<ProtectedRoute><RestWS /></ProtectedRoute>} />
              <Route path="/ws/requisicoes" element={<ProtectedRoute><Requisicoes /></ProtectedRoute>} />
              <Route path="/ws/consumo-de-api" element={<ProtectedRoute><WSConsumoAPI /></ProtectedRoute>} />
              <Route path="/ws/enviando-dados" element={<ProtectedRoute><EnviandoDados /></ProtectedRoute>} />
              <Route path="/ws/tratamento-de-erros" element={<ProtectedRoute><Erros /></ProtectedRoute>} />
              <Route path="/ws/autenticacao" element={<ProtectedRoute><Autenticacao /></ProtectedRoute>} />

              {/* Rotas de Node */}
              <Route path="/node/introducao" element={<ProtectedRoute><NodeIntro /></ProtectedRoute>} />
              <Route path="/node/fundamentos" element={<ProtectedRoute><NodeFundamentos /></ProtectedRoute>} />
              <Route path="/node/frameworks" element={<ProtectedRoute><NodeFrameworks /></ProtectedRoute>} />
              <Route path="/node/banco-de-dados" element={<ProtectedRoute><BancodeDados /></ProtectedRoute>} />
              <Route path="/node/boas-praticas" element={<ProtectedRoute><BoasPraticas /></ProtectedRoute>} />
              <Route path="/node/deploy" element={<ProtectedRoute><Deploy /></ProtectedRoute>} />

              {/* Rotas de Métodos Ágeis */}
              <Route path="/ma/introducao" element={<ProtectedRoute><AgeisIntro /></ProtectedRoute>} />
              <Route path="/ma/metodos-ageis" element={<ProtectedRoute><MetodosAgeis /></ProtectedRoute>} />
              <Route path="/ma/scrum" element={<ProtectedRoute><SCRUM /></ProtectedRoute>} />

              {/* Rotas de IA */}
              <Route path="/ia/introducao" element={<ProtectedRoute><IntroIA /></ProtectedRoute>} />
              <Route path="/ia/produtividade" element={<ProtectedRoute><Produtividade /></ProtectedRoute>} />
              <Route path="/ia/engenharia-de-prompt" element={<ProtectedRoute><Prompt /></ProtectedRoute>} />
              <Route path="/ia/uso-etico" element={<ProtectedRoute><UsoEtico /></ProtectedRoute>} />

              {/* Rota de fallback para página não encontrada */}
              <Route path="*" element={
                <div className="text-center text-red-500 text-2xl py-20">
                  <h2>404 - Página Não Encontrada</h2>
                  <p className="text-lg text-gray-400 mt-2">A rota que você tentou acessar não existe.</p>
                </div>
              } />
            </Routes>
          </main>
        </div>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
