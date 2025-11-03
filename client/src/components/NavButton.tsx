import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface NavButtonProps {
  to: string;
  text: string;
  type: 'back' | 'go';
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const NavButton: React.FC<NavButtonProps> = ({ to, text, type, onClick }) => {
  // Combina a rolagem da tela com a função onClick externa
  const handleCombinedClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (onClick) {
      onClick(e);
    }
  };

  const isGo = type === 'go';
  const baseClasses = "flex items-center gap-3 px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 shadow-md";
  const colorClasses = isGo
    ? "bg-sky-600 hover:bg-sky-500 text-white"
    : "bg-gray-700 hover:bg-gray-600 text-gray-200";

  return (
    <Link to={to} onClick={handleCombinedClick} className={`${baseClasses} ${colorClasses}`}>
      {!isGo && <FaArrowLeft />}
      <span>{text}</span>
      {isGo && <FaArrowRight />}
    </Link>
  );
};

export default NavButton;
