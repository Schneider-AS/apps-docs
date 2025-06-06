import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Informações da empresa */}
          <div>
            <h3 className="text-xl font-bold mb-4">Aguiar Sistemas LTDA</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Especializada em soluções tecnológicas inovadoras para análise de
              dados, Business Intelligence e transformação digital empresarial.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/aguiar-sistemas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                💼
              </a>
              <a
                href="mailto:contato@aguiarsistemas.com.br"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Email"
              >
                ✉️
              </a>
            </div>
          </div>

          {/* Links úteis */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://aguiarsistemas.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Site Oficial
                </a>
              </li>
              <li>
                <a
                  href="mailto:suporte@aguiarsistemas.com.br"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Suporte Técnico
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@aguiarsistemas.com.br"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contato Comercial
                </a>
              </li>
            </ul>
          </div>

          {/* Aplicativos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nossos Aplicativos</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center text-gray-300">
                <span className="mr-2">📊</span>
                AS BI - Business Intelligence
              </li>
              <li className="flex items-center text-gray-400">
                <span className="mr-2">⏳</span>
                Mais aplicativos em breve...
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} Aguiar Sistemas LTDA. Todos os direitos
              reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <span className="text-gray-400">
                Portal desenvolvido com ❤️ usando React + Vite
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
