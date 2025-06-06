import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";

const TermosDeUsoPage = () => {
  const breadcrumbItems = [
    { label: "Portal", href: "/", icon: "🏠" },
    { label: "AS BI", href: "/", icon: "📊" },
    { label: "Termos de Uso", icon: "📋" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <Breadcrumb items={breadcrumbItems} />

          {/* Header */}
          <div className="text-center mb-8">
            <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📋</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Termos de Uso do Aplicativo AS BI MOBILE
            </h1>
            <p className="text-lg text-gray-600">
              Última atualização: 6 de junho de 2025
            </p>
          </div>

          {/* Conteúdo */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
            <div className="prose max-w-none">
              <p className="text-gray-800 leading-relaxed my-4">
                Pelo presente termo, ao utilizar o aplicativo AS BI MOBILE
                ("Aplicativo"), você ("Usuário") manifesta sua total
                concordância com as seguintes condições estabelecidas pela{" "}
                <strong>AGUIAR SISTEMAS LTDA ME</strong>, empresa jurídica de
                direito privado, devidamente inscrita no C.N.P.J sob o nº
                05.295.417/0001-42, com sede na Rua Amazonas, 605, Nova
                Imperatriz, Imperatriz - MA.
              </p>

              <p className="text-gray-800 leading-relaxed my-4">
                O Aplicativo permite o acompanhamento, em tempo real, de
                informações gerenciais transmitidas diretamente do sistema de
                gestão do Usuário, como:{" "}
                <strong>CAIXA, BANCO, ESTOQUE e FATURAMENTO</strong>.
              </p>

              <p className="text-gray-800 leading-relaxed my-4">
                Ao aderir e utilizar o AS BI MOBILE, o Usuário está ciente e
                concorda que:
              </p>

              <ol className="list-decimal list-inside text-gray-800 space-y-4 my-4 ml-4">
                <li className="leading-relaxed">
                  As informações disponibilizadas são provenientes do sistema de
                  gestão contratado pelo Usuário, sendo a qualidade e a
                  atualização dos dados de sua inteira responsabilidade.
                </li>

                <li className="leading-relaxed">
                  O acesso ao aplicativo será concedido mediante credenciais
                  exclusivas e intransferíveis. O Usuário é responsável por
                  manter a confidencialidade de suas credenciais.
                </li>

                <li className="leading-relaxed">
                  Eventuais ajustes, configurações ou integrações podem ser
                  necessários para garantir a correta transmissão das
                  informações entre o sistema de gestão e o Aplicativo.
                </li>

                <li className="leading-relaxed">
                  Não há qualquer custo adicional para o uso do AS BI MOBILE,
                  sendo este um benefício disponibilizado gratuitamente aos
                  clientes ativos dos sistemas de gestão da Aguiar Sistemas.
                </li>

                <li className="leading-relaxed">
                  O Usuário é o único responsável pela confidencialidade e uso
                  adequado das informações acessadas por meio do Aplicativo.
                </li>

                <li className="leading-relaxed">
                  O Usuário conta com suporte técnico especializado para
                  dúvidas, orientações ou eventuais problemas relacionados ao AS
                  BI MOBILE, disponível através dos canais oficiais de
                  atendimento da Aguiar Sistemas.
                </li>
              </ol>

              <p className="text-gray-800 leading-relaxed my-4">
                A utilização contínua do Aplicativo confirma que o Usuário leu,
                entendeu e aceitou as condições descritas acima.
              </p>

              <section className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Contato
                </h3>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <ul className="text-gray-700 space-y-2">
                    <li>
                      <strong>Empresa:</strong> AGUIAR SISTEMAS LTDA ME
                    </li>
                    <li>
                      <strong>Endereço:</strong> Rua Amazonas, 605, Nova
                      Imperatriz, Imperatriz - MA, 65907-140
                    </li>
                    <li>
                      <strong>E-mail:</strong> comercial@aguiarsistemas.com.br
                    </li>
                  </ul>
                </div>
              </section>
            </div>

            {/* Navegação entre documentos */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <Link
                  to="/"
                  className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200"
                >
                  <span className="mr-2">←</span> Voltar ao Portal
                </Link>
                <Link
                  to="/as-bi/politica-de-privacidade"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                >
                  Política de Privacidade <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermosDeUsoPage;
