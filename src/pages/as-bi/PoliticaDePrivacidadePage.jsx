import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";

const PoliticaDePrivacidadePage = () => {
  const breadcrumbItems = [
    { label: "Portal", href: "/", icon: "🏠" },
    { label: "AS BI", href: "/", icon: "📊" },
    { label: "Política de Privacidade", icon: "🔒" },
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
              <span className="text-2xl">🔒</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Política de Privacidade do serviço AS BI
            </h1>
            <p className="text-lg text-gray-600">
              <strong>Última atualização:</strong> 06 de junho de 2025
            </p>
          </div>

          {/* Conteúdo */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
            <div className="prose max-w-none">
              <p className="text-gray-800 leading-relaxed my-3">
                Este Aplicativo recolhe alguns Dados Pessoais dos Usuários. Este
                documento pode ser impresso para fins de consulta, através do
                comando imprimir nas configurações de seu navegador.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-3">
                Proprietário e Controlador de Dados
              </h2>
              <p className="text-gray-800 leading-relaxed my-3">
                Dep. Programação e Desenvolvimento/Aguiar Sistemas LTDA.
                <br />
                R. Amazonas, 605 - Nova Imperatriz, Imperatriz - MA, 65907-140.
                <br />
                <strong>E-mail de contato do Proprietário:</strong>{" "}
                atendimento@aguiarsistemas.com.br
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-3">
                Tipos de Dados coletados
              </h2>
              <p className="text-gray-800 leading-relaxed my-3">
                Entre os tipos de Dados Pessoais que este Aplicativo coleta, por
                si mesmo ou através de terceiros, existem: Rastreadores; Dados
                de uso; e-mail; informações do dispositivo; número de sessões;
                duração da sessão; sistemas operacionais.
              </p>
              <p className="text-gray-800 leading-relaxed my-3">
                Detalhes completos sobre cada tipo de Dados Pessoais coletados
                são fornecidos nas seções dedicadas desta política de
                privacidade ou por textos explicativos específicos exibidos
                antes da coleta de Dados. Os Dados Pessoais poderão ser
                fornecidos livremente pelo Usuário, ou, no caso dos Dados de
                Utilização, coletados automaticamente ao se utilizar este
                Aplicativo.
              </p>
              <p className="text-gray-800 leading-relaxed my-3">
                A menos que especificado diferentemente, todos os Dados
                solicitados por este Aplicativo são obrigatórios e a falta de
                fornecimento destes Dados poderá impossibilitar este Aplicativo
                de fornecer os seus Serviços. Os Usuários que tiverem dúvidas a
                respeito de quais Dados Pessoais são obrigatórios estão
                convidados a entrar em contato com o Proprietário.
              </p>
              <p className="text-gray-800 leading-relaxed my-3">
                Os Usuários ficam responsáveis por quaisquer Dados Pessoais de
                terceiros que forem obtidos, publicados ou compartilhados
                através deste Serviço.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-3">
                Modo e local de processamento dos Dados
              </h2>
              <p className="text-gray-800 leading-relaxed my-3">
                O Proprietário tomará as medidas de segurança adequadas para
                impedir o acesso não autorizado, divulgação, alteração ou
                destruição não autorizada dos Dados. O processamento dos Dados é
                realizado utilizando computadores e/ou ferramentas de TI
                habilitadas, seguindo procedimentos organizacionais e meios
                estritamente relacionados com os fins indicados.
              </p>
              <p className="text-gray-800 leading-relaxed my-3">
                Os dados são processados nas sedes de operação dos
                Proprietários, e em quaisquer outros lugares onde as partes
                envolvidas com o processamento estiverem localizadas.
              </p>
              <p className="text-gray-800 leading-relaxed my-3">
                Salvo especificação em contrário, os Dados Pessoais serão
                tratados e armazenados pelo tempo necessário para as finalidades
                para as quais foram coletados, podendo ser retidos por mais
                tempo em razão de obrigação legal ou com base no consentimento
                dos Usuários.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-3">
                As finalidades do processamento
              </h2>
              <p className="text-gray-800 leading-relaxed my-3">
                Os Dados relativos ao Usuário são coletados para permitir que o
                Proprietário preste seu Serviço, cumpra suas obrigações legais,
                responda a solicitações de execução, proteja seus direitos e
                interesses, detecte qualquer atividade maliciosa ou fraudulenta,
                assim como para as seguintes finalidades: Estatísticas e
                Gerenciamento de contactos e envio de mensagens.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-3">
                Informações detalhadas sobre o processamento de Dados Pessoais
              </h2>

              <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">
                Estatísticas
              </h3>
              <p className="text-gray-800 leading-relaxed my-3">
                Os serviços contidos nesta seção habilitam o Proprietário a
                monitorar e analisar o tráfego da web e podem ser usados para
                rastrear o comportamento do Usuário.
              </p>
              <p className="text-gray-800 leading-relaxed my-3">
                <strong>Google Analytics para Firebase (Google LLC):</strong> É
                um serviço de analítica fornecido pela Google LLC. Ele poderá
                compartilhar Dados com outras ferramentas do Firebase, como
                Crash Reporting, Authentication, etc.
              </p>
              <ul className="list-disc list-inside text-gray-800 space-y-1 my-3 ml-4">
                <li>
                  <strong>Dados Pessoais processados:</strong> Dados de uso;
                  duração da sessão; informações do dispositivo; número de
                  sessões; Rastreadores; sistemas operacionais.
                </li>
                <li>
                  <strong>Lugar de processamento:</strong> EUA – Política de
                  Privacidade.
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">
                Gerenciamento de contactos e envio de mensagens
              </h3>
              <p className="text-gray-800 leading-relaxed my-3">
                <strong>Firebase Cloud Messaging (Google LLC):</strong> É um
                serviço de envio de mensagens que permite ao Proprietário enviar
                mensagens e notificações para os Usuários através de plataformas
                como Android e iOS.
              </p>
              <ul className="list-disc list-inside text-gray-800 space-y-1 my-3 ml-4">
                <li>
                  <strong>Dados Pessoais processados:</strong> Vários tipos de
                  Dados como especificados na política de privacidade do
                  serviço.
                </li>
                <li>
                  <strong>Lugar de processamento:</strong> Brasil – Política de
                  Privacidade.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-3">
                Política de Cookies
              </h2>
              <p className="text-gray-800 leading-relaxed my-3">
                Este Aplicativo usa Rastreadores. Para saber mais, os Usuários
                poderão consultar a Política de Cookies.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-3">
                Os direitos dos Usuários
              </h2>
              <p className="text-gray-800 leading-relaxed my-3">
                Os Usuários poderão exercer determinados direitos a respeito dos
                seus Dados processados pelo Proprietário. Em especial, possuem
                os direitos a:
              </p>
              <ul className="list-disc list-inside text-gray-800 space-y-2 my-3 ml-4">
                <li>Retirar a sua anuência a qualquer momento.</li>
                <li>Objetar o processamento dos seus Dados.</li>
                <li>Acessar os seus Dados.</li>
                <li>Verificar e pedir retificação.</li>
                <li>Restringir o processamento dos seus Dados.</li>
                <li>Ter os seus Dados Pessoais apagados ou retirados.</li>
                <li>
                  Receber os seus Dados e ter os mesmos transferidos para outro
                  controlador.
                </li>
                <li>Registrar uma reclamação.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-3">
                Como exercer estes direitos
              </h2>
              <p className="text-gray-800 leading-relaxed my-3">
                Quaisquer solicitações para exercer os direitos do Usuário podem
                ser encaminhadas ao Proprietário por meio dos detalhes de
                contato fornecidos neste documento. Tais pedidos são gratuitos e
                serão atendidos pelo Proprietário com a maior brevidade
                possível.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-3">
                Mudanças nesta política de privacidade
              </h2>
              <p className="text-gray-800 leading-relaxed my-3">
                O Proprietário se reserva o direito de fazer alterações nesta
                política de privacidade a qualquer momento, através de
                notificação a seus Usuários nesta página e/ou dentro deste
                Serviço.
              </p>
            </div>

            {/* Navegação entre documentos */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <Link
                  to="/as-bi/termos-de-uso"
                  className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200"
                >
                  <span className="mr-2">←</span> Termos de Uso
                </Link>
                <Link
                  to="/"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                >
                  Voltar ao Portal <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticaDePrivacidadePage;