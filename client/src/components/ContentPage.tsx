import { useState, useEffect } from 'react';
import * as React from 'react';
import Markdown from './Markdown';
import NavButton from './NavButton';
import { Tldraw } from 'tldraw';
import 'tldraw/tldraw.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import api from '../services/api';
import toast from 'react-hot-toast';

const TLDRAW_LICENSE_KEY = import.meta.env.TLDRAW_LICENSE_KEY || '';

interface ContentPageProps {
  content: string;
  backRoute: string;
  backText: string;
  goRoute: string;
  goText: string;
  pageTopic?: string;
}

const ContentPage: React.FC<ContentPageProps> = ({
  content,
  backRoute,
  backText,
  goRoute,
  goText,
  pageTopic
}) => {

  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [dynamicPrompt, setDynamicPrompt] = useState<string | null>(null);
  const [isLoadingPrompt, setIsLoadingPrompt] = useState(false);

  // Estado: quadro aberto ou fechado
  const [openBoard, setOpenBoard] = useState(false);

  const persistenceKey = `tldraw-${location.pathname}`;

  /* ------------------ LOAD DO DESAFIO DINÂMICO ------------------ */
  useEffect(() => {
    if (pageTopic && user) {
      const load = async () => {
        setIsLoadingPrompt(true);
        try {
          const response = await api.post('/ai/generate-challenge', {
            topic: pageTopic
          });
          setDynamicPrompt(response.data.challenge);
        } catch (error) {
          setDynamicPrompt("Não foi possível carregar um desafio.");
        } finally {
          setIsLoadingPrompt(false);
        }
      };
      load();
    }
  }, [pageTopic, user]);

  /* ------------------ PROGRESSO DA PÁGINA ------------------ */
  const handleGoClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!user) return;
    e.preventDefault();

    try {
      const response = await api.post('/progress/complete-page', {
        pageIdentifier: location.pathname,
      });

      if (response.data.message) {
        toast.success(response.data.message, { icon: '✨' });
      }
    } finally {
      navigate(goRoute);
    }
  };

  return (
    <div className="flex flex-col gap-8 w-full">

      {/* NAVBAR SUPERIOR */}
      <div className="flex justify-between w-full">
        <NavButton to={backRoute} text={backText} type="back" />
        <NavButton to={goRoute} text={goText} type="go" onClick={handleGoClick} />
      </div>

      {/* ------------------ GRID PRINCIPAL ------------------ */}
      <div className={`grid grid-cols-1 md:grid-cols-${openBoard ? '2' : '1'} gap-8 w-full relative`}>

        {/* ------------------ CONTEÚDO ------------------ */}
        <article
          className={`
            bg-gray-800/50 p-6 md:p-8 rounded-xl 
            border border-gray-700/50 min-h-[500px] w-full 
            transition-all duration-300
            ${openBoard ? '' : 'mx-auto'}
          `}
        >
          <Markdown content={content} />
        </article>

        {/* ------------------ BOTÃO LATERAL (ENQUANTO FECHADO) ------------------ */}
        {!openBoard && (
          <div
            className="
              fixed top-1/2 right-4 z-50 
              -translate-y-1/2
            "
          >
            <button
              onClick={() => setOpenBoard(true)}
              className="flex items-center gap-3 px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 shadow-md bg-gray-700 hover:bg-gray-600 text-gray-200"
            >
              Abrir Quadro
            </button>
          </div>
        )}

        {/* ------------------ QUADRO BRANCO (TLDRAW) ------------------ */}
        {openBoard && (
          <div className="flex flex-col gap-4 sticky top-8 h-fit">

            {/* Botão normal dentro do layout */}
            <button
              onClick={() => setOpenBoard(false)}
              className="flex items-center gap-3 px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 shadow-md bg-gray-700 hover:bg-gray-600 text-gray-200"
            >
              Esconder Quadro
            </button>

            {/* Container animado */}
            <div
              className="
                overflow-hidden transition-all duration-500 
                bg-gray-900/30 rounded-lg 
                border border-gray-700/50
                max-h-[800px] opacity-100
              "
            >
              <div className="w-full h-[500px]">
                <Tldraw
                  licenseKey={TLDRAW_LICENSE_KEY}
                  persistenceKey={persistenceKey}
                />
              </div>
            </div>
          </div>
        )}

      </div>

      {/* NAVBAR INFERIOR */}
      <div className="flex justify-between w-full">
        <NavButton to={backRoute} text={backText} type="back" />
        <NavButton to={goRoute} text={goText} type="go" onClick={handleGoClick} />
      </div>

    </div>
  );
};

export default ContentPage;
