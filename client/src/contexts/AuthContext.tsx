import * as React from 'react';
import { createContext, useState, useContext, useEffect, type ReactNode } from 'react';
import { jwtDecode } from 'jwt-decode';

// Define a estrutura do objeto de usuário
interface User {
  id: string;
  username: string;
  email: string;
  xp: number;
  level: number;
}

// Define os tipos para o valor do nosso contexto
interface AuthContextType {
  user: User | null;
  login: (token: string, userData: User) => void;
  logout: () => void;
  loading: boolean;
}

// Cria o contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Cria o provedor do contexto (o componente que envolve a aplicação)
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); // Começa como true para indicar que estamos verificando o login

  // Efeito que roda uma vez quando o app carrega para verificar se já existe um login
  useEffect(() => {
    try {
      const token = localStorage.getItem('authToken');
      if (token) {
        const decodedToken: { id: string; exp: number } = jwtDecode(token);
        // Verifica se o token não expirou
        if (decodedToken.exp * 1000 > Date.now()) {
          const userData = localStorage.getItem('user');
          if (userData) {
            setUser(JSON.parse(userData)); // Se o token é válido, restaura os dados do usuário
          }
        } else {
          logout(); // Se o token expirou, faz o logout
        }
      }
    } catch (error) {
      console.error("Erro ao processar token:", error);
      logout(); // Se houver qualquer erro, faz o logout por segurança
    } finally {
      setLoading(false); // Termina o estado de carregamento
    }
  }, []);

  // Função para fazer login
  const login = (token: string, userData: User) => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  // Função para fazer logout
  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setUser(null);
  };

  // Retorna o provedor com os valores que serão compartilhados
  return React.createElement(
    AuthContext.Provider,
    { value: { user, login, logout, loading } },
    !loading && children
  );
};

// Hook personalizado para consumir o contexto facilmente
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
