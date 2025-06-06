import React from "react";
import { Link } from "react-router-dom";
import logoASBI from "../assets/As Bi Logo.svg";

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Portal de Documentação Aguiar Sistemas
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Acesse a documentação legal de todos os nossos aplicativos em um só
          lugar. Mantenha-se informado sobre termos de uso, políticas de
          privacidade e diretrizes de nossos sistemas.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          {/* Card do AS BI */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-50 p-3 rounded-lg mr-4">
                  <img src={logoASBI} alt="AS BI" className="h-12 w-auto" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">AS BI</h2>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mt-1">
                    Business Intelligence
                  </span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Sistema completo de Business Intelligence para análise avançada
                de dados, geração de relatórios personalizados e dashboards
                interativos empresariais.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
                <span className="mr-2">📄</span>
                Documentos Disponíveis:
              </h3>

              <Link
                to="/as-bi/termos-de-uso"
                className="group block w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-4 px-6 rounded-lg transition-all duration-200 text-center shadow-md hover:shadow-lg"
              >
                <span className="flex items-center justify-center">
                  <span className="text-lg mr-2">📋</span>
                  Termos de Uso
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </span>
              </Link>

              <Link
                to="/as-bi/politica-de-privacidade"
                className="group block w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium py-4 px-6 rounded-lg transition-all duration-200 text-center shadow-md hover:shadow-lg"
              >
                <span className="flex items-center justify-center">
                  <span className="text-lg mr-2">🔒</span>
                  Política de Privacidade
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </span>
              </Link>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>Última atualização:</span>
                <span className="font-medium">Janeiro 2025</span>
              </div>
            </div>
          </div>

          {/* Card para futuros aplicativos */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-dashed border-gray-300 p-8 text-center hover:from-gray-100 hover:to-gray-200 transition-all duration-300">
            <div className="text-gray-400">
              <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-3">
                Novos Aplicativos
              </h3>
              <p className="text-gray-500 leading-relaxed mb-4">
                Estamos trabalhando para adicionar mais aplicativos e suas
                respectivas documentações em breve. Fique atento às
                atualizações!
              </p>
              <div className="inline-flex items-center px-3 py-1 bg-gray-200 text-gray-600 text-sm rounded-full">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
                Em desenvolvimento
              </div>
            </div>
          </div>
        </div>

        {/* Seção adicional com informações */}
        <div className="mt-12 bg-white rounded-xl shadow-lg border border-gray-200 p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Sobre Este Portal
            </h2>
            <p className="text-gray-600">
              Centralizamos toda a documentação legal de nossos aplicativos para
              sua conveniência
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Acesso Rápido
              </h3>
              <p className="text-sm text-gray-600">
                Encontre rapidamente a documentação que precisa
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-50 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🔄</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Sempre Atualizado
              </h3>
              <p className="text-sm text-gray-600">
                Documentos atualizados com as últimas versões
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-50 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">📱</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Responsivo</h3>
              <p className="text-sm text-gray-600">
                Acesse de qualquer dispositivo, a qualquer hora
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
