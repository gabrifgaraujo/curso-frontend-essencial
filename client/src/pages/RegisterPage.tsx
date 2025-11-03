import { useState } from 'react';
import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api'; // Importa a instância configurada do Axios

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    try {
      await api.post('/auth/register', { username, email, password });
      // Redireciona para a página de login com um parâmetro de sucesso
      navigate('/login?fromRegister=true');
    } catch (err: any) {
      const errorData = err.response?.data;
      if (errorData?.errors) {
        // Pega a primeira mensagem de erro do Zod
        const firstError = Object.values(errorData.errors)[0] as string[];
        setError(firstError[0] || 'Erro de validação.');
      } else {
        setError(errorData?.message || 'Erro ao registrar. Tente novamente.');
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="bg-gray-800/50 p-8 rounded-xl shadow-lg border border-gray-700/50">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Criar Conta</h2>
        {error && <div className="bg-red-500/20 text-red-300 p-3 rounded-md mb-4 text-center">{error}</div>}
        
        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-1">Nome de Usuário</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-sky-600 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded-md transition duration-300"
            >
              Registrar
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          Já tem uma conta?{' '}
          <Link to="/login" className="font-medium text-sky-400 hover:text-sky-300">
            Faça o login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
