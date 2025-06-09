import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  BarChart3,
  Lock,
  Info,
  CheckCircle,
  FileText,
  Mail,
  Globe,
  Phone,
  PersonStanding,
  Briefcase,
  Database,
  AlertTriangle,
  Settings,
  Shield,
  Share,
  Target,
  Link2,
  MessageSquare,
  Users,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  List,
} from "lucide-react";
import Breadcrumb from "../../components/Breadcrumb";

const PoliticaDePrivacidadePage = () => {
  const breadcrumbItems = [
    {
      label: "Portal",
      href: "/",
      icon: <Home className="w-4 h-4" />,
    },
    {
      label: "AS BI",
      href: "/",
      icon: <BarChart3 className="w-4 h-4" />,
    },
    {
      label: "Política de Privacidade",
      icon: <Lock className="w-4 h-4" />,
    },
  ];

  const SectionCard = ({ title, icon, children }) => (
    <div className="glassmorphism-card p-6 border border-white/20 bg-white/80 hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center mb-4">
        <div className="glassmorphism-card w-10 h-10 flex items-center justify-center mr-4 bg-gradient-to-br from-primary-500 to-primary-600 border border-white/30">
          {icon}
        </div>
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </div>
      <div className="text-gray-600 leading-relaxed space-y-4">{children}</div>
    </div>
  );

  const InfoTag = ({ text }) => (
    <span className="inline-flex items-center px-3 py-1 glassmorphism-card text-xs font-medium bg-gradient-to-r from-accent-400/20 to-accent-600/20 text-accent-700 border border-white/30">
      {text}
    </span>
  );

  const AlertBox = ({ children, icon, type = "warning" }) => {
    const colors = {
      warning:
        "from-yellow-400/20 to-yellow-600/20 text-yellow-700 border-yellow-300/30",
      info: "from-blue-400/20 to-blue-600/20 text-blue-700 border-blue-300/30",
      success:
        "from-green-400/20 to-green-600/20 text-green-700 border-green-300/30",
    };
    return (
      <div
        className={`glassmorphism-card border-l-4 p-4 bg-gradient-to-r ${colors[type]} flex items-start border border-white/20`}
        role="alert"
      >
        <div className="mr-3 text-xl">{icon}</div>
        <div className="text-sm">{children}</div>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Header Premium com Gradiente */}
      <div className="relative overflow-hidden py-20">
        {/* Background elegante */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-secondary-800 to-primary-900"></div>
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Overlay com pattern sutil */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform skew-y-6"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <Breadcrumb items={breadcrumbItems} />
            </div>

            {/* Header Card com glassmorphism */}
            <div className="glassmorphism-card p-8 text-center border border-white/20 bg-white/10">
              <div className="glassmorphism-card inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-accent-400 to-accent-600 mb-6 border border-white/30">
                <Lock className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-white mb-3">
                Política de Privacidade do AS BI
              </h1>
              <p className="text-lg text-white/80">
                <strong>Última atualização:</strong> 9 de junho de 2025
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="relative py-16">
        {/* Background sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
        <div className="absolute inset-0 bg-white/60"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {/* Seções de conteúdo principais com glassmorphism */}
              <SectionCard
                title="Introdução"
                icon={<Info className="w-5 h-5 text-white" />}
              >
                <p>
                  Esta Política de Privacidade descreve como seus dados pessoais
                  são coletados, usados e compartilhados quando você utiliza o
                  aplicativo AS BI (o "Aplicativo").
                </p>
                <AlertBox icon="ℹ️" type="info">
                  Esta política aplica-se especificamente ao aplicativo AS BI e
                  pode diferir de outras políticas da Aguiar Sistemas.
                </AlertBox>
              </SectionCard>

              <SectionCard
                title="Dados Pessoais Coletados"
                icon={<Database className="w-5 h-5 text-white" />}
              >
                <p>
                  Quando você utiliza o Aplicativo, coletamos as seguintes
                  informações:
                </p>
                <div className="glassmorphism-card p-4 border border-white/20 bg-white/60">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Informações que você nos fornece:
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Dados de cadastro (nome, e-mail, telefone)</li>
                    <li>Credenciais de acesso ao sistema</li>
                    <li>Informações de configuração do aplicativo</li>
                  </ul>
                </div>
                <div className="glassmorphism-card p-4 border border-white/20 bg-white/60">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Informações coletadas automaticamente:
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Dados de uso do aplicativo</li>
                    <li>
                      Informações do dispositivo (modelo, sistema operacional)
                    </li>
                    <li>Logs de acesso e atividade</li>
                  </ul>
                </div>
              </SectionCard>

              <SectionCard
                title="Como Usamos Seus Dados"
                icon={<Target className="w-5 h-5 text-white" />}
              >
                <p>Utilizamos as informações coletadas para:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="glassmorphism-card p-4 border border-white/20 bg-white/60">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Funcionalidades:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Fornecer acesso aos dados do sistema</li>
                      <li>Personalizar a experiência do usuário</li>
                      <li>Sincronizar dados entre dispositivos</li>
                    </ul>
                  </div>
                  <div className="glassmorphism-card p-4 border border-white/20 bg-white/60">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Melhorias:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Analisar uso para melhorias</li>
                      <li>Fornecer suporte técnico</li>
                      <li>Detectar e prevenir problemas</li>
                    </ul>
                  </div>
                </div>
              </SectionCard>

              <SectionCard
                title="Compartilhamento de Dados"
                icon={<Share className="w-5 h-5 text-white" />}
              >
                <AlertBox icon="🔒" type="success">
                  Não compartilhamos seus dados pessoais com terceiros para fins
                  comerciais ou publicitários.
                </AlertBox>
                <p>
                  Podemos compartilhar informações apenas nos seguintes casos:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Com seu consentimento explícito</li>
                  <li>Para cumprir obrigações legais</li>
                  <li>Para proteger nossos direitos e segurança</li>
                  <li>
                    Com prestadores de serviços que nos auxiliam (sob rigorosos
                    termos de confidencialidade)
                  </li>
                </ul>
              </SectionCard>

              <SectionCard
                title="Segurança dos Dados"
                icon={<Shield className="w-5 h-5 text-white" />}
              >
                <p>
                  Implementamos medidas de segurança técnicas e organizacionais
                  para proteger seus dados pessoais:
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div className="glassmorphism-card p-4 border border-white/20 bg-white/60 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">🔐</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 text-sm">
                      Criptografia
                    </h4>
                    <p className="text-xs text-gray-600">
                      Dados protegidos em trânsito e armazenamento
                    </p>
                  </div>
                  <div className="glassmorphism-card p-4 border border-white/20 bg-white/60 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">🛡️</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 text-sm">
                      Controle de Acesso
                    </h4>
                    <p className="text-xs text-gray-600">
                      Acesso restrito e monitorado
                    </p>
                  </div>
                  <div className="glassmorphism-card p-4 border border-white/20 bg-white/60 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">🔄</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 text-sm">
                      Backups Seguros
                    </h4>
                    <p className="text-xs text-gray-600">
                      Cópias protegidas e recuperáveis
                    </p>
                  </div>
                </div>
              </SectionCard>

              <SectionCard
                title="Seus Direitos"
                icon={<CheckCircle className="w-5 h-5 text-white" />}
              >
                <p>De acordo com a LGPD, você tem os seguintes direitos:</p>
                <div className="glassmorphism-card p-4 border border-white/20 bg-white/60">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Direitos de Acesso:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                        <li>Confirmação de tratamento de dados</li>
                        <li>Acesso aos dados pessoais</li>
                        <li>Correção de dados incompletos</li>
                        <li>Anonimização ou eliminação</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Direitos de Controle:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                        <li>Portabilidade dos dados</li>
                        <li>Informação sobre compartilhamento</li>
                        <li>Revogação do consentimento</li>
                        <li>Oposição ao tratamento</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <AlertBox icon="📧" type="info">
                  Para exercer seus direitos, entre em contato conosco através
                  do e-mail:{" "}
                  <a
                    href="mailto:lgpd@aguiarsistemas.com.br"
                    className="font-semibold"
                  >
                    lgpd@aguiarsistemas.com.br
                  </a>
                </AlertBox>
              </SectionCard>

              <SectionCard
                title="Contato"
                icon={<Mail className="w-5 h-5 text-white" />}
              >
                <p>
                  Para dúvidas sobre esta Política de Privacidade, entre em
                  contato:
                </p>
                <div className="glassmorphism-card p-4 border border-white/20 bg-white/60">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Dados da Empresa:
                      </h4>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>
                          <strong>Razão Social:</strong> AGUIAR SISTEMAS LTDA ME
                        </li>
                        <li>
                          <strong>CNPJ:</strong> 05.295.417/0001-42
                        </li>
                        <li>
                          <strong>Endereço:</strong> Rua Amazonas, 605, Nova
                          Imperatriz, Imperatriz - MA
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Contatos:
                      </h4>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>
                          <strong>E-mail Geral:</strong>{" "}
                          comercial@aguiarsistemas.com.br
                        </li>
                        <li>
                          <strong>E-mail LGPD:</strong>{" "}
                          lgpd@aguiarsistemas.com.br
                        </li>
                        <li>
                          <strong>Telefone:</strong> (99) 3529-9993
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </SectionCard>

              <SectionCard
                title="Alterações nesta Política"
                icon={<RotateCcw className="w-5 h-5 text-white" />}
              >
                <p>
                  Podemos atualizar esta Política de Privacidade periodicamente.
                  Quando fizermos isso, revisaremos a data da "última
                  atualização" no topo desta página e notificaremos você de
                  alterações significativas.
                </p>
                <AlertBox icon="🔔" type="warning">
                  Recomendamos que você revise esta política periodicamente para
                  se manter informado sobre como estamos protegendo suas
                  informações.
                </AlertBox>
              </SectionCard>

              {/* Navegação entre documentos com glassmorphism */}
              <div className="mt-12 glassmorphism-card p-6 border border-white/20 bg-white/80">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <Link
                    to="/as-bi/termos-de-uso"
                    className="group glassmorphism-card px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white border border-white/30 hover:from-gray-600 hover:to-gray-700 transition-all duration-300 w-full sm:w-auto text-center"
                  >
                    <ChevronLeft className="w-4 h-4 mr-2 inline group-hover:-translate-x-1 transition-transform duration-300" />
                    Termos de Uso
                  </Link>
                  <Link
                    to="/"
                    className="group glassmorphism-card px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white border border-white/30 hover:from-primary-700 hover:to-primary-800 transition-all duration-300 w-full sm:w-auto text-center"
                  >
                    Voltar ao Portal
                    <ChevronRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticaDePrivacidadePage;
