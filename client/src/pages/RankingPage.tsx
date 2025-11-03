import * as React from 'react';
import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext'; // Importa o hook como default
import { FaTrophy } from 'react-icons/fa';
import api from '../services/api'; // Importe o objeto api para requisições HTTP

interface RankedUser {
  username: string;
  xp: number;
  level: number;
}

const RankingPage = () => {
  const [ranking, setRanking] = useState<RankedUser[]>([]);
  const [loadingRanking, setLoadingRanking] = useState(true); // Renomeado para evitar conflito
  const [error, setError] = useState<string | null>(null);
  
  // 1. Pegue o 'user' e o 'loading' do AuthContext
  const { user: currentUser, loading: authLoading } = useAuth();

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        setLoadingRanking(true);
        setError(null);
        const response = await api.get('/ranking?limit=50');
        setRanking(response.data);
      } catch (err) {
        setError('Não foi possível carregar o ranking. Tente novamente mais tarde.');
        console.error("Erro ao buscar ranking:", err);
      } finally {
        setLoadingRanking(false);
      }
    };

    fetchRanking();
  }, []);

  const getTrophyIcon = (index: number) => {
    if (index === 0) return <FaTrophy className="text-yellow-400" />;
    if (index === 1) return <FaTrophy className="text-gray-400" />;
    if (index === 2) return <FaTrophy className="text-yellow-600" />;
    return null;
  };

  // 2. Se a autenticação OU o ranking estiverem carregando, mostre a mensagem de loading.
  if (authLoading || loadingRanking) {
    return <div className="text-center text-xl mt-10 animate-pulse">Carregando Ranking...</div>;
  }

  if (error) {
    return <div className="text-center text-xl mt-10 text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-white mb-8">Ranking de Usuários</h1>
      
      <div className="bg-gray-800/50 rounded-lg shadow-lg overflow-hidden border border-gray-700/50">
        <table className="w-full text-left">
          <thead className="bg-gray-700/50">
            <tr>
              <th className="p-4 w-1/6 text-center">Posição</th>
              <th className="p-4 w-3/6">Usuário</th>
              <th className="p-4 w-1/6 text-center">Nível</th>
              <th className="p-4 w-1/6 text-right">XP</th>
            </tr>
          </thead>
          <tbody>
            {ranking.map((rankedUser, index) => {
              // 3. A verificação 'currentUser &&' agora é segura, pois 'authLoading' já é falso.
              const isCurrentUser = currentUser && currentUser.username === rankedUser.username;
              
              return (
                <tr 
                  key={index} 
                  className={`border-t border-gray-700/50 transition-colors ${isCurrentUser ? 'bg-sky-600/30' : 'hover:bg-gray-700/30'}`}
                >
                  <td className="p-4 font-bold text-center text-xl flex items-center justify-center gap-2">
                    {getTrophyIcon(index)}
                    <span>{index + 1}</span>
                  </td>
                  <td className="p-4 font-semibold">{rankedUser.username}</td>
                  <td className="p-4 text-center">{rankedUser.level}</td>
                  <td className="p-4 text-right font-mono">{rankedUser.xp.toLocaleString('pt-BR')}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {ranking.length === 0 && (
          <p className="p-8 text-center text-gray-400">Ninguém no ranking ainda. Seja o primeiro a ganhar XP!</p>
        )}
      </div>
    </div>
  );
};

export default RankingPage;
