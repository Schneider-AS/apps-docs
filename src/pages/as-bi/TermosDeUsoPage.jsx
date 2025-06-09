import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  BarChart3,
  FileText,
  Info,
  Smartphone,
  CheckSquare,
  Users,
  ArrowLeftCircle,
  ArrowRightCircle,
} from "lucide-react";
import Breadcrumb from "../../components/Breadcrumb";

// Componente SectionCard com estética glassmorphism
const SectionCard = ({ title, icon, children, className }) => (
  <div
    className={`glassmorphism-card p-6 border border-white/20 bg-white/80 hover:shadow-2xl transition-all duration-300 ${
      className || ""
    }`}
  >
    {title && (
      <div className="flex items-center mb-4">
        {icon && (
          <div className="glassmorphism-card w-10 h-10 flex items-center justify-center mr-4 bg-gradient-to-br from-primary-500 to-primary-600 border border-white/30">
            {icon}
          </div>
        )}
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </div>
    )}
    <div className="text-gray-600 leading-relaxed space-y-4">{children}</div>
  </div>
);

const TermosDeUsoPage = () => {
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
      label: "Termos de Uso",
      icon: <FileText className="w-4 h-4" />,
    },
  ];

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
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Breadcrumb items={breadcrumbItems} />
            </div>

            {/* Header Card com glassmorphism */}
            <div className="glassmorphism-card p-8 text-center border border-white/20 bg-white/10">
              <div className="glassmorphism-card inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent-400 to-accent-600 mb-6 border border-white/30">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-white mb-3">
                Termos de Uso do Aplicativo AS BI MOBILE
              </h1>
              <p className="text-lg text-white/80">
                Última atualização: 9 de junho de 2025
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
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <SectionCard
                icon={<Info className="w-5 h-5 text-white" />}
                title="Aceitação dos Termos"
              >
                <p>
                  Pelo presente termo, ao utilizar o aplicativo AS BI MOBILE
                  ("Aplicativo"), você ("Usuário") manifesta sua total
                  concordância com as seguintes condições estabelecidas pela{" "}
                  <strong className="text-gray-800">
                    AGUIAR SISTEMAS LTDA ME
                  </strong>
                  , empresa jurídica de direito privado, devidamente inscrita no
                  C.N.P.J sob o nº 05.295.417/0001-42, com sede na Rua Amazonas,
                  605, Nova Imperatriz, Imperatriz - MA.
                </p>
              </SectionCard>

              <SectionCard
                icon={<Smartphone className="w-5 h-5 text-white" />}
                title="Sobre o Aplicativo"
              >
                <p>
                  O Aplicativo permite o acompanhamento, em tempo real, de
                  informações gerenciais transmitidas diretamente do sistema de
                  gestão do Usuário, como:{" "}
                  <strong className="text-gray-800">
                    CAIXA, BANCO, ESTOQUE e FATURAMENTO
                  </strong>
                  .
                </p>
                <p>
                  Através de uma interface intuitiva e moderna, o usuário pode
                  monitorar indicadores essenciais do seu negócio com facilidade
                  e praticidade.
                </p>
              </SectionCard>

              <SectionCard
                icon={<CheckSquare className="w-5 h-5 text-white" />}
                title="Condições de Uso"
              >
                <p>
                  Ao aderir e utilizar o AS BI MOBILE, o Usuário está ciente e
                  concorda que:
                </p>
                <ul className="list-disc list-outside space-y-3 pl-5 text-gray-600">
                  <li>
                    As informações disponibilizadas são provenientes do sistema
                    de gestão contratado pelo Usuário, sendo a qualidade e a
                    atualização dos dados de sua inteira responsabilidade.
                  </li>
                  <li>
                    O acesso ao aplicativo será concedido mediante credenciais
                    exclusivas e intransferíveis. O Usuário é responsável por
                    manter a confidencialidade de suas credenciais.
                  </li>
                  <li>
                    Eventuais ajustes, configurações ou integrações podem ser
                    necessários para garantir a correta transmissão das
                    informações entre o sistema de gestão e o Aplicativo.
                  </li>
                  <li>
                    Não há qualquer custo adicional para o uso do AS BI MOBILE,
                    sendo este um benefício disponibilizado gratuitamente aos
                    clientes ativos dos sistemas de gestão da Aguiar Sistemas.
                  </li>
                  <li>
                    O Usuário é o único responsável pela confidencialidade e uso
                    adequado das informações acessadas por meio do Aplicativo.
                  </li>
                  <li>
                    O Usuário conta com suporte técnico especializado para
                    dúvidas, orientações ou eventuais problemas relacionados ao
                    AS BI MOBILE, disponível através dos canais oficiais de
                    atendimento da Aguiar Sistemas.
                  </li>
                </ul>
                <p className="mt-4">
                  A utilização contínua do Aplicativo confirma que o Usuário
                  leu, entendeu e aceitou as condições descritas acima.
                </p>
              </SectionCard>

              <SectionCard
                icon={<Users className="w-5 h-5 text-white" />}
                title="Contato e Suporte"
              >
                <p>
                  Para dúvidas, sugestões ou suporte técnico, entre em contato
                  conosco através dos seguintes canais:
                </p>
                <div className="glassmorphism-card p-4 border border-white/20 bg-white/60 mt-4">
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <strong>Empresa:</strong> AGUIAR SISTEMAS LTDA ME
                    </li>
                    <li>
                      <strong>Endereço:</strong> Rua Amazonas, 605, Nova
                      Imperatriz, Imperatriz - MA, 65907-140
                    </li>
                    <li>
                      <strong>Telefone:</strong> (99) 3529-9993
                    </li>
                    <li>
                      <strong>E-mail:</strong>{" "}
                      <a
                        href="mailto:comercial@aguiarsistemas.com.br"
                        className="text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        comercial@aguiarsistemas.com.br
                      </a>
                    </li>
                  </ul>
                </div>
              </SectionCard>

              {/* Navegação entre documentos com glassmorphism */}
              <div className="mt-12 glassmorphism-card p-6 border border-white/20 bg-white/80">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <Link
                    to="/"
                    className="group glassmorphism-card px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white border border-white/30 hover:from-gray-600 hover:to-gray-700 transition-all duration-300 w-full sm:w-auto text-center"
                  >
                    <ArrowLeftCircle className="w-4 h-4 mr-2 inline group-hover:-translate-x-1 transition-transform duration-300" />
                    Voltar ao Portal
                  </Link>
                  <Link
                    to="/as-bi/politica-de-privacidade"
                    className="group glassmorphism-card px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white border border-white/30 hover:from-primary-700 hover:to-primary-800 transition-all duration-300 w-full sm:w-auto text-center"
                  >
                    Política de Privacidade
                    <ArrowRightCircle className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform duration-300" />
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

export default TermosDeUsoPage;
