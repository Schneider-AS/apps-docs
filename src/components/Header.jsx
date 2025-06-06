import React from "react";
import { Link } from "react-router-dom";
import logoAguiarSistemas from "../assets/Logo Aguiar Sistemas Dark.svg";

const Header = () => {
  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-3 hover:opacity-80 transition-all duration-200 group"
          >
            <div className="flex items-center space-x-3">
              <img
                src={logoAguiarSistemas}
                alt="Aguiar Sistemas"
                className="h-10 w-auto group-hover:scale-105 transition-transform duration-200"
              />
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-gray-800">
                  Portal de Documentação
                </h1>
                <p className="text-xs text-gray-500">Aguiar Sistemas</p>
              </div>
            </div>
          </Link>

          {/* Navegação adicional */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center"
            >
              <span className="mr-1">🏠</span>
              Início
            </Link>
            <a
              href="https://aguiarsistemas.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center"
            >
              <span className="mr-1">🌐</span>
              Site Oficial
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
