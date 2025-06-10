import React from "react";
import { Link } from "react-router-dom";
import {
  BarChart3,
  FileText,
  Clock,
  Shield,
  Zap,
  Globe,
  ArrowRight,
  ExternalLink,
  CheckCircle,
  Sparkles,
  Code,
  BookOpen,
  Users,
  Rocket,
  Star,
  TrendingUp,
} from "lucide-react";

const HomePage = () => {
  const features = [
    {
      icon: Zap,
      title: "Acesso Rápido",
      description: "Encontre rapidamente a documentação que precisa",
      color: "text-github-accent-fg",
    },
    {
      icon: CheckCircle,
      title: "Sempre Atualizado",
      description: "Documentos atualizados com as últimas versões",
      color: "text-github-success-fg",
    },
    {
      icon: Globe,
      title: "Responsivo",
      description: "Acesse de qualquer dispositivo, a qualquer hora",
      color: "text-github-attention-fg",
    },
  ];

  const applications = [
    {
      name: "AS BI",
      description: "Business Intelligence para análise avançada de dados",
      icon: BarChart3,
      status: "Ativo",
      color: "bg-github-success-subtle",
      textColor: "text-github-success-fg",
      links: [
        { name: "Termos de Uso", href: "/as-bi/termos-de-uso" },
        {
          name: "Política de Privacidade",
          href: "/as-bi/politica-de-privacidade",
        },
      ],
    },
    {
      name: "Novos Apps",
      description: "Aplicações inovadoras em desenvolvimento",
      icon: Rocket,
      status: "Em breve",
      color: "bg-github-attention-subtle",
      textColor: "text-github-attention-fg",
      links: [],
    },
  ];

  const stats = [
    { label: "Aplicativos", value: "2+", icon: Code },
    { label: "Documentos", value: "10+", icon: BookOpen },
    { label: "Usuários", value: "500+", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-github-canvas-default">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-github-canvas-default via-github-canvas-subtle to-github-canvas-default">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            {" "}
            <div className="mb-8 relative">
              {/* Animated Icon Container */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-github-accent-emphasis to-blue-600 rounded-2xl shadow-lg relative overflow-hidden group">
                {/* Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Floating Sparkles Animation */}
                <div className="absolute inset-0">
                  <div className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                  <div className="absolute top-4 right-3 w-1.5 h-1.5 bg-white/80 rounded-full animate-pulse delay-300"></div>
                  <div className="absolute bottom-3 left-4 w-1 h-1 bg-white/60 rounded-full animate-pulse delay-700"></div>
                  <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-1000"></div>
                </div>

                {/* Main Icon with Rotation */}
                <Sparkles className="w-10 h-10 text-white relative z-10 transform group-hover:rotate-12 transition-transform duration-500" />

                {/* Glow Effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-github-accent-emphasis to-blue-600 rounded-2xl opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-github-fg-default mb-6 tracking-tight">
              Portal de
              <span className="block bg-gradient-to-r from-github-accent-emphasis to-blue-600 bg-clip-text text-transparent">
                Documentação
              </span>
            </h1>
            <p className="text-xl text-github-fg-muted max-w-3xl mx-auto mb-12 leading-relaxed">
              Acesse a documentação legal de todos os nossos aplicativos em um
              só lugar. Mantenha-se informado sobre termos de uso, políticas de
              privacidade e diretrizes de nossos sistemas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/as-bi/termos-de-uso"
                className="inline-flex items-center px-8 py-4 bg-github-accent-emphasis text-white rounded-lg hover:bg-github-accent-emphasis/90 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
              >
                <FileText className="w-5 h-5 mr-2" />
                Explorar Documentação
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="https://aguiarsistemas.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-github-canvas-subtle text-github-fg-default border border-github-border-default rounded-lg hover:bg-github-canvas-overlay transition-all duration-200 font-medium"
              >
                <Globe className="w-5 h-5 mr-2" />
                Site Oficial
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-md mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-github-canvas-subtle rounded-lg mb-3">
                    <stat.icon className="w-6 h-6 text-github-accent-fg" />
                  </div>
                  <div className="text-2xl font-bold text-github-fg-default">
                    {stat.value}
                  </div>
                  <div className="text-sm text-github-fg-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-github-fg-default mb-4">
            Nossos Aplicativos
          </h2>
          <p className="text-xl text-github-fg-muted max-w-2xl mx-auto">
            Explore a documentação de cada aplicativo da Aguiar Sistemas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {applications.map((app, index) => (
            <div
              key={index}
              className="github-card bg-github-canvas-overlay border border-github-border-default rounded-xl p-8 hover:border-github-border-emphasis transition-all duration-200 group"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-github-accent-emphasis to-blue-600 rounded-lg shadow-sm">
                  <app.icon className="w-6 h-6 text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-2xl font-bold text-github-fg-default">
                      {app.name}
                    </h3>
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${app.color} ${app.textColor}`}
                    >
                      {app.status}
                    </span>
                  </div>
                  <p className="text-github-fg-muted leading-relaxed">
                    {app.description}
                  </p>
                </div>
              </div>

              {app.links.length > 0 && (
                <div className="space-y-3 mb-6">
                  <h4 className="text-lg font-semibold text-github-fg-default flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-github-accent-fg" />
                    Documentos Disponíveis
                  </h4>

                  <div className="grid gap-3">
                    {app.links.map((link, linkIndex) => (
                      <Link
                        key={linkIndex}
                        to={link.href}
                        className="flex items-center justify-between p-4 border border-github-border-default rounded-lg hover:border-github-accent-emphasis hover:bg-github-canvas-subtle transition-all duration-200 group"
                      >
                        <div className="flex items-center">
                          <FileText className="w-4 h-4 mr-3 text-github-fg-muted group-hover:text-github-accent-fg" />
                          <span className="font-medium text-github-fg-default">
                            {link.name}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-github-fg-muted group-hover:text-github-accent-fg" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {app.links.length === 0 && (
                <div className="text-center py-8">
                  <Clock className="w-12 h-12 text-github-fg-muted mx-auto mb-4" />
                  <p className="text-github-fg-muted">
                    Documentação em desenvolvimento
                  </p>
                </div>
              )}

              <div className="flex items-center justify-between text-sm text-github-fg-muted pt-4 border-t border-github-border-muted">
                <span>Última atualização:</span>
                <span className="font-medium">Janeiro 2025</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-github-canvas-subtle border-t border-github-border-default py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-github-fg-default mb-4">
              Por que usar nosso Portal?
            </h2>
            <p className="text-xl text-github-fg-muted max-w-2xl mx-auto">
              Centralizamos toda a documentação legal para sua conveniência
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center github-card bg-github-canvas-default border border-github-border-default rounded-xl p-8 hover:border-github-border-emphasis transition-all duration-200"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-github-canvas-subtle rounded-xl mb-6">
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>

                <h3 className="text-xl font-semibold text-github-fg-default mb-3">
                  {feature.title}
                </h3>

                <p className="text-github-fg-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-github-accent-emphasis to-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Star className="w-12 h-12 text-white mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Precisa de Suporte?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Nossa equipe está sempre pronta para ajudar com questões sobre
            nossos aplicativos e documentação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:suporte@aguiarsistemas.com.br"
              className="inline-flex items-center px-8 py-4 bg-white text-github-accent-emphasis rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium"
            >
              <FileText className="w-5 h-5 mr-2" />
              Suporte Técnico
            </a>
            <a
              href="mailto:contato@aguiarsistemas.com.br"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:text-github-accent-emphasis transition-all duration-200 font-medium"
            >
              <Users className="w-5 h-5 mr-2" />
              Contato Comercial
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
