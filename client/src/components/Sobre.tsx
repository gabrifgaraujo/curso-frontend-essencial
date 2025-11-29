// src/pages/Sobre.tsx

import { useEffect, useState } from 'react';
import * as React from 'react';
import { FaGithub, FaStar, FaCodeBranch, FaLink, FaArrowRight } from 'react-icons/fa';

// --- Constantes e Tipos (sem alteração) ---
const GITHUB_USERNAME = 'gabrifgaraujo';

interface GitHubUser {
  login?: string;
  avatar_url: string;
  name?: string | null;
  public_repos?: number;
  followers?: number;
  following?: number;
  bio?: string | null;
  blog?: string | null;
  [key: string]: any;
}

interface PrimaryLanguage {
  name: string;
}

interface PinnedRepo {
  name: string;
  description: string | null;
  url: string;
  stargazerCount: number;
  forkCount: number;
  primaryLanguage: PrimaryLanguage | null;
}

// --- Componente Principal ---
const Sobre: React.FC = () => {
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [pinnedRepos, setPinnedRepos] = useState<PinnedRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // --- Lógica de Fetch (sem alteração) ---
  useEffect(() => {
    let mounted = true;

    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        setError(null);

        const userResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}` );
        if (!userResponse.ok) throw new Error('Falha ao buscar dados do usuário');
        const userJson: any = await userResponse.json();

        const reposResponse = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=stars&per_page=6`
         );
        if (!reposResponse.ok) throw new Error('Falha ao buscar repositórios');
        const reposJson: any[] = await reposResponse.json();

        const formattedRepos: PinnedRepo[] = reposJson.map((repo) => ({
          name: repo.name,
          description: repo.description ?? null,
          url: repo.html_url,
          stargazerCount: typeof repo.stargazers_count === 'number' ? repo.stargazers_count : 0,
          forkCount: typeof repo.forks_count === 'number' ? repo.forks_count : 0,
          primaryLanguage: repo.language ? { name: repo.language } : null,
        }));

        if (!mounted) return;
        setUserData({
          avatar_url: userJson.avatar_url,
          name: userJson.name ?? userJson.login,
          public_repos: userJson.public_repos ?? 0,
          followers: userJson.followers ?? 0,
          following: userJson.following ?? 0,
          bio: userJson.bio ?? null,
          blog: userJson.blog ?? null,
          login: userJson.login,
        });
        setPinnedRepos(formattedRepos);
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        if (mounted) setError(message);
        console.error('Erro ao buscar dados do GitHub:', err);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchGitHubData();
    return () => {
      mounted = false;
    };
  }, []);

  // --- Estados de UI (Loading e Erro) com Estilo do Projeto ---
  if (loading) {
    return (
      <div className="flex items-center justify-center text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-400"></div>
        <p className="ml-4 text-xl text-gray-400">Carregando dados do GitHub...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-900/20 border border-red-700/50 p-6 rounded-xl text-center">
        <h2 className="text-2xl font-bold text-red-400 mb-2">Erro na Conexão</h2>
        <p className="text-gray-300 mb-4">Não foi possível conectar à API do GitHub.</p>
        <p className="text-red-300 font-mono bg-black/30 p-3 rounded-md text-sm">{error}</p>
      </div>
    );
  }

  if (!userData) return null;

  return (
    <div className="flex flex-col gap-6">
      {/* Seção do Perfil */}
      <div className="bg-gray-800/50 p-6 md:p-8 rounded-xl border border-gray-700/50">
        <div className="flex md:flex-row  md:items-start w-100% gap-8">
          {/* Avatar */}
          <img
            src={userData.avatar_url}
            alt={userData.name || GITHUB_USERNAME}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-sky-500 object-cover shadow-lg"
          />
          
          {/* Informações */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-white">{userData.name || GITHUB_USERNAME}</h1>
            <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 transition-colors text-lg">
              @{userData.login}
            </a>
            
            {userData.bio && <p className="text-gray-300 mt-4 text-lg max-w-2xl">{userData.bio}</p>}

            {/* Estatísticas */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
              <div className="bg-gray-700/60 px-4 py-2 rounded-lg text-center">
                <span className="block text-xl font-bold text-white">{userData.public_repos ?? 0}</span>
                <span className="text-sm text-gray-400">Repositórios</span>
              </div>
              <div className="bg-gray-700/60 px-4 py-2 rounded-lg text-center">
                <span className="block text-xl font-bold text-white">{userData.followers ?? 0}</span>
                <span className="text-sm text-gray-400">Seguidores</span>
              </div>
              <div className="bg-gray-700/60 px-4 py-2 rounded-lg text-center">
                <span className="block text-xl font-bold text-white">{userData.following ?? 0}</span>
                <span className="text-sm text-gray-400">Seguindo</span>
              </div>
            </div>

            {userData.blog && (
              <a href={userData.blog} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 mt-6 transition-colors">
                <FaLink />
                {userData.blog.replace(/^https?:\/\//, '' )}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Seção de Projetos */}
      <div>
        <h2 className="text-3xl font-bold text-center text-white mb-8">Projetos em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pinnedRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 transition-all duration-300 hover:border-sky-500/70 hover:bg-gray-800"
            >
              <div className="flex-1">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">{repo.name}</h3>
                  {repo.primaryLanguage && (
                    <span className="bg-sky-900/50 text-sky-300 text-xs font-medium px-3 py-1 rounded-full">
                      {repo.primaryLanguage.name}
                    </span>
                  )}
                </div>
                <p className="text-gray-400 leading-relaxed">{repo.description || 'Repositório sem descrição.'}</p>
              </div>
              
              <div className="flex justify-between items-center text-sm text-gray-500 mt-6 pt-4 border-t border-gray-700/50">
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span>{repo.stargazerCount}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaCodeBranch className="text-green-400" />
                  <span>{repo.forkCount}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Botão Final */}
      <div className="text-center">
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-sky-600 hover:bg-sky-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-sky-500/20"
        >
          <FaGithub />
          Ver Perfil Completo no GitHub
          <FaArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>
    </div>
   );
};

export default Sobre;
