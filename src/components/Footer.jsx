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
  MapPin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/aguiar-sistemas",
      icon: Linkedin,
      external: true,
    },
    {
      name: "Email Contato",
      href: "mailto:contato@aguiarsistemas.com.br",
      icon: Mail,
      external: false,
    },
  ];

  const quickLinks = [
    {
      name: "Site Oficial",
      href: "https://aguiarsistemas.com.br",
      external: true,
    },
    {
      name: "Suporte Técnico",
      href: "mailto:suporte@aguiarsistemas.com.br",
      external: false,
    },
    {
      name: "Contato Comercial",
      href: "mailto:contato@aguiarsistemas.com.br",
      external: false,
    },
  ];

  const applications = [
    {
      name: "AS BI",
      description: "Business Intelligence",
      icon: BarChart3,
      status: "active",
    },
    {
      name: "Novos Apps",
      description: "Em desenvolvimento",
      icon: Clock,
      status: "coming-soon",
    },
  ];
  return (
    <footer className="bg-github-canvas-default border-t border-github-border-default mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-github-accent-emphasis to-blue-600 rounded-lg shadow-sm">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-github-fg-default">
                  Aguiar Sistemas LTDA
                </h3>
                <p className="text-sm text-github-fg-muted">
                  Soluções em Tecnologia
                </p>
              </div>
            </div>

            <p className="text-github-fg-default leading-relaxed mb-6 max-w-md">
              Especializada em soluções tecnológicas inovadoras para análise de
              dados, Business Intelligence e transformação digital empresarial.
            </p>

            <div className="flex items-center text-sm text-github-fg-muted mb-4">
              <MapPin className="w-4 h-4 mr-2" />
              João Pessoa, Paraíba - Brasil
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noopener noreferrer" : undefined}
                  className="p-2 rounded-md text-github-fg-muted hover:text-github-fg-default hover:bg-github-canvas-subtle transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-github-fg-default uppercase tracking-wide mb-4">
              Links Úteis
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-github-fg-muted hover:text-github-fg-default transition-colors duration-200 flex items-center group"
                  >
                    <span>{link.name}</span>
                    {link.external && (
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Applications */}
          <div>
            <h4 className="text-sm font-semibold text-github-fg-default uppercase tracking-wide mb-4">
              Aplicativos
            </h4>
            <ul className="space-y-3">
              {applications.map((app) => (
                <li key={app.name} className="flex items-start">
                  <div
                    className={`flex items-center justify-center w-6 h-6 rounded mr-3 mt-0.5 ${
                      app.status === "active"
                        ? "bg-github-success-subtle text-github-success-fg"
                        : "bg-github-neutral-subtle text-github-fg-muted"
                    }`}
                  >
                    <app.icon className="w-3 h-3" />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-github-fg-default">
                        {app.name}
                      </span>
                      {app.status === "active" && (
                        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-github-success-subtle text-github-success-fg">
                          Ativo
                        </span>
                      )}
                      {app.status === "coming-soon" && (
                        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-github-attention-subtle text-github-attention-fg">
                          Em breve
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-github-fg-muted">
                      {app.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>{" "}
        {/* Bottom Section */}
        <div className="border-t border-github-border-default mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-github-fg-muted">
              © {currentYear} Aguiar Sistemas LTDA. Todos os direitos
              reservados.
            </div>

            <div className="flex items-center text-sm text-github-fg-muted">
              <span>Feito com</span>
              <Heart className="w-4 h-4 mx-1 text-github-danger-fg" />
              <span>em João Pessoa, PB</span>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap gap-6 mt-6 pt-6 border-t border-github-border-muted">
            <a
              href="/as-bi/termos-de-uso"
              className="text-xs text-github-fg-muted hover:text-github-fg-default transition-colors duration-200"
            >
              Termos de Uso
            </a>
            <a
              href="/as-bi/politica-de-privacidade"
              className="text-xs text-github-fg-muted hover:text-github-fg-default transition-colors duration-200"
            >
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
