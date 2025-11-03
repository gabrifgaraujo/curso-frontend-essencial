import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import api from '../services/api'; // Importa a instância configurada do Axios

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  // Pega a localização anterior do state ou define a página inicial como padrão
  const from = location.state?.from?.pathname || '/';

  // Verifica se veio da página de registro
  useEffect(() => {
    if (searchParams.get('fromRegister')) {
      setSuccessMessage('Registro bem-sucedido! Por favor, faça o login.');
    }
  }, [searchParams]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (!email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const response = await api.post('/auth/login', { email, password });
      const { token, user } = response.data;
      login(token, user);
      // Navega para a página que o usuário tentou acessar ou para a home
      navigate(from, { replace: true });
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 'Erro ao fazer login. Verifique suas credenciais.';
      setError(errorMessage);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="bg-gray-800/50 p-8 rounded-xl shadow-lg border border-gray-700/50">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Login</h2>
        {error && <div className="bg-red-500/20 text-red-300 p-3 rounded-md mb-4 text-center">{error}</div>}
        {successMessage && <div className="bg-green-500/20 text-green-300 p-3 rounded-md mb-4 text-center">{successMessage}</div>}
        
        <form onSubmit={handleLogin} className="space-y-6">
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
              Entrar
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          Não tem uma conta?{' '}
          <Link to="/register" className="font-medium text-sky-400 hover:text-sky-300">
            Registre-se
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
