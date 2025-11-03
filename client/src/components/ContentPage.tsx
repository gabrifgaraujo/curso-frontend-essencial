import React, { useState, useEffect } from 'react';
import Markdown from './Markdown';
import NavButton from './NavButton';
import { Tldraw } from 'tldraw';
import 'tldraw/tldraw.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import api from '../services/api';
import toast from 'react-hot-toast';

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

  const persistenceKey = `tldraw-${location.pathname}`;

  useEffect(() => {
    if (pageTopic && user) {
      const generatePrompt = async () => {
        setIsLoadingPrompt(true);
        setDynamicPrompt(null);
        try {
          const response = await api.post('/ai/generate-challenge', { topic: pageTopic });
          setDynamicPrompt(response.data.challenge);
        } catch (error) {
          console.error("Erro ao buscar desafio da IA:", error);
          setDynamicPrompt("Não foi possível carregar um desafio. Tente recarregar a página.");
        } finally {
          setIsLoadingPrompt(false);
        }
      };
      generatePrompt();
    }
  }, [pageTopic, user]);

  const handleGoClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!user) {
      return; 
    }
    e.preventDefault();
    try {
      const response = await api.post('/progress/complete-page', {
        pageIdentifier: location.pathname,
      });
      if (response.data.message) {
        if (response.data.leveledUp) {
          toast.success(response.data.message, { duration: 4000, icon: '🎉' });
        } else if (response.data.message.includes('ganhou')) {
          toast.success(response.data.message, { icon: '✨' });
        }
      }
    } catch (error) {
      console.error("Erro ao registrar progresso:", error);
      toast.error("Não foi possível salvar seu progresso.");
    } finally {
      navigate(goRoute);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between w-full">
        <NavButton to={backRoute} text={backText} type="back" />
        <NavButton to={goRoute} text={goText} type="go" onClick={handleGoClick} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <article className="w-full bg-gray-800/50 p-6 md:p-8 rounded-xl border border-gray-700/50 min-h-[500px]">
          <Markdown content={content} />
        </article>

        <div className="flex flex-col gap-4">
          {pageTopic && user && (
            <div className="bg-sky-900/50 border border-sky-700/50 p-4 rounded-lg text-sky-200 text-center min-h-[90px] flex flex-col justify-center">
              <h3 className="font-semibold">✍️ Desafio do Quadro Branco:</h3>
              {isLoadingPrompt ? (
                <p className="mt-1 animate-pulse">Gerando um novo desafio para você...</p>
              ) : (
                <p className="mt-1">{dynamicPrompt}</p>
              )}
            </div>
          )}
          
          <div className='relative w-full h-[500px]'>
            <Tldraw persistenceKey={persistenceKey} />
          </div>
        </div>
      </div>

      <div className="flex justify-between w-full">
        <NavButton to={backRoute} text={backText} type="back" />
        <NavButton to={goRoute} text={goText} type="go" onClick={handleGoClick} />
      </div>
    </div>
  );
};

export default ContentPage;
