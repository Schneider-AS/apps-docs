import React from "react";
import {
  Linkedin,
  Mail,
  ExternalLink,
  Heart,
  Globe,
  FileText,
  BarChart3,
  Clock,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Background com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-secondary-900 to-primary-800"></div>
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Informações da empresa */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-3 text-white flex items-center">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center mr-3">
                  <Globe className="w-4 h-4 text-white" />
                </div>
                Aguiar Sistemas LTDA
              </h3>
              <p className="text-white/70 leading-relaxed">
                Especializada em soluções tecnológicas inovadoras para análise
                de dados, Business Intelligence e transformação digital
                empresarial.
              </p>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/aguiar-sistemas"
                target="_blank"
                rel="noopener noreferrer"
                className="glassmorphism-card p-3 text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="mailto:contato@aguiarsistemas.com.br"
                className="glassmorphism-card p-3 text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Links úteis */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white flex items-center">
              <ExternalLink className="w-5 h-5 mr-3 text-accent-400" />
              Links Úteis
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://aguiarsistemas.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-all duration-300 flex items-center group"
                >
                  <div className="w-2 h-2 rounded-full bg-accent-400 mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                  Site Oficial
                </a>
              </li>
              <li>
                <a
                  href="mailto:suporte@aguiarsistemas.com.br"
                  className="text-white/70 hover:text-white transition-all duration-300 flex items-center group"
                >
                  <div className="w-2 h-2 rounded-full bg-accent mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                  Suporte Técnico
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@aguiarsistemas.com.br"
                  className="text-white/70 hover:text-white transition-all duration-300 flex items-center group"
                >
                  <div className="w-2 h-2 rounded-full bg-primary-400 mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                  Contato Comercial
                </a>
              </li>
            </ul>
          </div>

          {/* Aplicativos */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white flex items-center">
              <FileText className="w-5 h-5 mr-3 text-accent-400" />
              Nossos Aplicativos
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center text-white/90 glassmorphism-card p-3 rounded-xl">
                <BarChart3 className="w-5 h-5 mr-3 text-accent-400" />
                AS BI - Business Intelligence
              </li>
              <li className="flex items-center text-white/50">
                <Clock className="w-5 h-5 mr-3 text-white/30" />
                Mais aplicativos em breve...
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 mb-4 md:mb-0 flex items-center">
              © {currentYear} Aguiar Sistemas LTDA. Todos os direitos
              reservados.
            </p>
            <div className="flex items-center space-x-2 text-white/60">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>em João Pessoa, PB</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
