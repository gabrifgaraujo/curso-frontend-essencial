// src/pages/Home.tsx
import { useState, useEffect } from 'react';
import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBookOpen, FaNodeJs, FaLaptopCode } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

// Dados dos módulos para fácil manutenção
const modules = [
  {
    title: "1. HTML Essencial",
    icon: <FaHtml5 className="text-orange-400" />,
    link: "/html/introducao",
    topics: [
      "Estrutura de páginas web",
      "Tags para textos, listas e links",
      "Uso de imagens e mídia",
      "HTML Semântico e acessibilidade",
    ],
  },
  {
    title: "2. CSS e Flexbox",
    icon: <FaCss3Alt className="text-blue-400" />,
    link: "/css/introducao",
    topics: [
      "Seletores e o Box Model",
      "Cores, fontes e unidades",
      "Layouts modernos com Flexbox",
      "Design responsivo básico",
    ],
  },
  {
    title: "3. JavaScript e DOM",
    icon: <FaJsSquare className="text-yellow-400" />,
    link: "/js/introducao",
    topics: [
      "Variáveis, tipos e operadores",
      "Funções e estruturas de controle",
      "Manipulação de elementos (DOM)",
      "Eventos e interatividade",
    ],
  },
  {
    title: "4. Estrutura de Dados e Algoritmos",
    icon: <FaLaptopCode className="text-blue-400" />,
    link: "/algoritmos/introducao",
    topics: [
      "Algoritmos básicos e complexidade",
      "Estruturas de dados Lineares e não lineares",
      "Algoritmos de Busca e Ordenação",
      "Noções de Arquitetura de Software",
    ],
  },
  {
    title: "4. TypeScript Essencial",
    icon: <SiTypescript className="text-sky-500" />,
    link: "/ts/introducao",
    topics: [
      "Introdução ao TypeScript",
      "Tipagem estática e segurança",
      "Interfaces e Generics",
      "Configuração de ambiente",
    ],
  },
  {
    title: "5. React com TypeScript",
    icon: <FaReact className="text-cyan-400" />,
    link: "/react/introducao",
    topics: [
      "Componentes e Props",
      "Hooks e gerenciamento de estado",
      "Roteamento e consumo de APIs",
      "Testes e build para produção",
    ],
  },
  {
    title: "6. Node.js Essencial",
    icon: <FaNodeJs className="text-green-500" />,
    link: "/node/introducao",
    topics: [
      "O que é Node.js e como funciona",
      "Gerenciamento de pacotes com NPM",
      "Módulos e sistema de arquivos",
      "Criação de APIs com Express",
    ],
  },
];

const Home: React.FC = () => {
  const [lastRoute, setLastRoute] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedRoute = localStorage.getItem('lastFrontendRoute');
    if (savedRoute && savedRoute !== '/') {
      setLastRoute(savedRoute);
    }
  }, []);

  const handleContinue = () => {
    if (lastRoute) {
      navigate(lastRoute);
    }
  };

  return (
    <div className="space-y-20 pt-16">
      {/* Seção de Herói */}
      <section className="text-center">
        <div className="inline-block bg-gray-800 p-4 rounded-full mb-6">
          <FaBookOpen className="text-sky-400" size={40} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Guia Completo de Frontend + Node Essencial
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10">
          Um guia abrangente para iniciar no desenvolvimento web, dominando
          HTML, CSS, JavaScript, TypeScript, React e Node.js para construir aplicações modernas
          e escaláveis.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/summary"
            className="flex items-center gap-2 bg-sky-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-sky-500 transition-transform transform hover:scale-105"
          >
            Começar a Aprender
          </Link>
          {lastRoute && (
            <button
              onClick={handleContinue}
              className="bg-gray-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-600 transition-transform transform hover:scale-105"
            >
              Continuar de onde parei
            </button>
          )}
        </div>
      </section>

      {/* Links Rápidos para Módulos */}
      <section className="flex flex-wrap justify-center gap-3 md:gap-4">
        {modules.map((mod) => (
          <Link
            key={mod.title}
            to={mod.link}
            className="flex items-center gap-2 bg-gray-800/80 hover:bg-gray-700 text-gray-300 font-semibold py-2 px-4 rounded-full transition-all"
          >
            {React.cloneElement(mod.icon, { size: 20 })}
            <span>{mod.title.split('. ')[1]}</span>
          </Link>
        ))}
      </section>

      {/* Grid de Módulos */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {modules.map((mod) => (
          <Link
            to={mod.link}
            key={mod.title}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-sky-500/50 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gray-900 p-3 rounded-lg">
                {React.cloneElement(mod.icon, { size: 24 })}
              </div>
              <h3 className="text-xl font-bold text-white">{mod.title}</h3>
            </div>
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              {mod.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Home;
