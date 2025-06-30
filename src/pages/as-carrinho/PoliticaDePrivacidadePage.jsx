import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  ShoppingCart,
  Lock,
  Info,
  CheckCircle,
  FileText,
  Mail,
  Globe,
  Database,
  Settings,
  Shield,
  Share,
  Target,
  Users,
  ArrowLeft,
  ExternalLink,
  Calendar,
  Eye,
  UserCheck,
  Trash2,
  Download,
} from "lucide-react";
import Breadcrumb from "../../components/Breadcrumb";
import GlassCard from "../../components/GlassCard";
import IconContainer from "../../components/IconContainer";

const PoliticaDePrivacidadePage = () => {
  const breadcrumbItems = [
    {
      label: "As Carrinho",
      href: "/",
    },
    {
      label: "Política de Privacidade",
    },
  ];

  const sections = [
    {
      id: "introducao",
      title: "1. Introdução",
      icon: Info,
      content: (
        <div className="space-y-4">
          <p>
            A Aguiar Sistemas LTDA está comprometida com a proteção da
            privacidade e segurança dos dados pessoais dos clientes do As Carrinho.
            Esta Política de Privacidade descreve como coletamos, usamos,
            armazenamos e protegemos suas informações durante sua experiência
            de compra.
          </p>
          <p>
            Esta política está em conformidade com a Lei Geral de Proteção de
            Dados (LGPD) e outras regulamentações aplicáveis de proteção de
            dados.
          </p>
        </div>
      ),
    },
    {
      id: "coleta-dados",
      title: "2. Coleta de Dados",
      icon: Database,
      content: (
        <div className="space-y-4">
          <p>Coletamos os seguintes tipos de dados para processar suas compras:</p>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-github-fg-default mb-2">
                Dados Cadastrais:
              </h4>
              <ul className="list-disc list-inside space-y-1 text-github-fg-muted">
                <li>Nome completo</li>
                <li>E-mail</li>
                <li>Telefone de contato</li>
                <li>Endereço de entrega e faturamento</li>
                <li>CPF/CNPJ para emissão de notas fiscais</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-github-fg-default mb-2">
                Dados da Transação:
              </h4>
              <ul className="list-disc list-inside space-y-1 text-github-fg-muted">
                <li>Produtos comprados e histórico de pedidos</li>
                <li>Valores e datas das transações</li>
                <li>
                  Informações de pagamento (processadas de forma segura por
                  nossos parceiros, não armazenamos dados de cartão)
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-github-fg-default mb-2">
                Dados Técnicos e de Navegação:
              </h4>
              <ul className="list-disc list-inside space-y-1 text-github-fg-muted">
                <li>Endereço IP</li>
                <li>Tipo de navegador e dispositivo</li>
                <li>Páginas visitadas e produtos visualizados</li>
                <li>Cookies para funcionalidade do carrinho e personalização</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "finalidade",
      title: "3. Finalidade do Tratamento",
      icon: Target,
      content: (
        <div className="space-y-4">
          <p>Utilizamos seus dados pessoais para:</p>

          <div className="grid gap-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h5 className="font-medium text-github-fg-default">
                  Processamento de Pedidos
                </h5>
                <p className="text-github-fg-muted text-sm">
                  Confirmar, faturar, enviar e entregar suas compras.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h5 className="font-medium text-github-fg-default">
                  Suporte ao Cliente
                </h5>
                <p className="text-github-fg-muted text-sm">
                  Oferecer assistência sobre pedidos, trocas ou devoluções.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h5 className="font-medium text-github-fg-default">
                  Melhoria da Experiência
                </h5>
                <p className="text-github-fg-muted text-sm">
                  Personalizar a navegação e recomendar produtos relevantes.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h5 className="font-medium text-github-fg-default">
                  Segurança e Prevenção à Fraude
                </h5>
                <p className="text-github-fg-muted text-sm">
                  Analisar transações para proteger você e a empresa.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h5 className="font-medium text-github-fg-default">
                  Comunicação Transacional
                </h5>
                <p className="text-github-fg-muted text-sm">
                  Enviar e-mails sobre o status do seu pedido.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "compartilhamento",
      title: "4. Compartilhamento de Dados",
      icon: Share,
      content: (
        <div className="space-y-4">
          <p>
            A Aguiar Sistemas não vende ou aluga seus dados. O compartilhamento
            ocorre apenas quando essencial para a operação:
          </p>
          <ul className="list-disc list-inside space-y-2 text-github-fg-muted">
            <li>
              <strong>Transportadoras:</strong> Para realizar a entrega dos
              pedidos (nome, endereço, contato).
            </li>
            <li>
              <strong>Gateways de Pagamento:</strong> Para processar as
              transações financeiras de forma segura.
            </li>
            <li>
              <strong>Plataformas Anti-Fraude:</strong> Para análise e proteção
              das transações.
            </li>
            <li>
              <strong>Obrigações Legais:</strong> Quando exigido por lei ou
              ordem judicial para emissão de notas fiscais ou outras
              finalidades.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "armazenamento",
      title: "5. Armazenamento e Segurança",
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p>
            Seus dados são armazenados em servidores seguros, com medidas de
            proteção técnicas e administrativas para prevenir acessos não
            autorizados, perda ou destruição.
          </p>
          <p>
            Utilizamos criptografia SSL/TLS para proteger os dados em trânsito e
            seguimos as melhores práticas de segurança do mercado.
          </p>
        </div>
      ),
    },
    {
      id: "direitos",
      title: "6. Seus Direitos como Titular dos Dados",
      icon: UserCheck,
      content: (
        <div className="space-y-4">
          <p>
            Você, como titular dos dados, pode exercer seus direitos a qualquer
            momento:
          </p>
          <ul className="list-disc list-inside space-y-2 text-github-fg-muted">
            <li>
              <strong>Acesso aos Dados:</strong> Solicitar uma cópia das suas
              informações.
            </li>
            <li>
              <strong>Correção:</strong> Atualizar dados incompletos, inexatos
              ou desatualizados.
            </li>
            <li>
              <strong>Anonimização e Bloqueio:</strong> Solicitar a
              anonimização ou bloqueio de dados desnecessários.
            </li>
            <li>
              <strong>Portabilidade:</strong> Solicitar a transferência de seus
              dados para outro fornecedor.
            </li>
            <li>
              <strong>Eliminação:</strong> Pedir a exclusão de seus dados,
              respeitando as obrigações legais de armazenamento.
            </li>
            <li>
              <strong>Revogação do Consentimento:</strong> Retirar seu
              consentimento para tratamentos futuros.
            </li>
          </ul>
          <p>
            Para exercer seus direitos, entre em contato através do nosso canal
            de suporte.
          </p>
        </div>
      ),
    },
    {
      id: "cookies",
      title: "7. Uso de Cookies",
      icon: Settings,
      content: (
        <div className="space-y-4">
          <p>
            Utilizamos cookies para melhorar a funcionalidade do nosso site e a
            sua experiência de compra. Eles são usados para:
          </p>
          <ul className="list-disc list-inside space-y-1 text-github-fg-muted">
            <li>Manter produtos no seu carrinho de compras</li>
            <li>Lembrar suas preferências de navegação</li>
            <li>Coletar dados analíticos para melhorar a plataforma</li>
            <li>Oferecer publicidade relevante (quando aplicável)</li>
          </ul>
          <p>
            Você pode gerenciar ou desabilitar os cookies nas configurações do
            seu navegador, mas isso pode afetar a funcionalidade do site.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-github-canvas-default">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Breadcrumb items={breadcrumbItems} className="mb-6" />
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-4">
              <IconContainer size="lg" variant="primary">
                <Lock className="w-6 h-6" />
              </IconContainer>
              <div>
                <h1 className="text-4xl font-bold text-github-fg-default mb-2">
                  Política de Privacidade - As Carrinho
                </h1>
                <p className="text-lg text-github-fg-muted">
                  E-commerce • Aguiar Sistemas
                </p>
              </div>
            </div>
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 text-github-fg-muted hover:text-github-fg-default border border-github-border-default rounded-lg hover:border-github-border-emphasis transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Início
            </Link>
          </div>

          <GlassCard className="mb-8 border-l-4 border-l-github-accent-emphasis">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <IconContainer variant="accent">
                  <Calendar className="w-5 h-5" />
                </IconContainer>
              </div>
              <div>
                <h3 className="font-semibold text-github-fg-default mb-1">
                  Última Atualização
                </h3>
                <p className="text-github-fg-muted text-sm">
                  Este documento foi atualizado em Janeiro de 2025.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <GlassCard>
                <h3 className="font-semibold text-github-fg-default mb-4 flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Índice
                </h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="flex items-center text-sm text-github-fg-muted hover:text-github-accent-fg transition-colors duration-200 py-1"
                    >
                      <section.icon className="w-3 h-3 mr-2 flex-shrink-0" />
                      {section.title}
                    </a>
                  ))}
                </nav>
              </GlassCard>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {sections.map((section) => (
              <section key={section.id} id={section.id}>
                <GlassCard>
                  <div className="flex items-center space-x-3 mb-6">
                    <IconContainer variant="primary">
                      <section.icon className="w-5 h-5" />
                    </IconContainer>
                    <h2 className="text-2xl font-bold text-github-fg-default">
                      {section.title}
                    </h2>
                  </div>
                  <div className="prose prose-github max-w-none">
                    {section.content}
                  </div>
                </GlassCard>
              </section>
            ))}

            <GlassCard className="border-l-4 border-l-github-success-emphasis">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <IconContainer variant="success">
                    <Mail className="w-5 h-5" />
                  </IconContainer>
                </div>
                <div>
                  <h3 className="font-semibold text-github-fg-default mb-2">
                    Encarregado de Proteção de Dados (DPO)
                  </h3>
                  <p className="text-github-fg-muted text-sm mb-4">
                    Para exercer seus direitos ou tirar dúvidas sobre esta
                    política, entre em contato com nosso DPO:
                  </p>
                  <a
                    href="mailto:dpo@aguiarsistemas.com.br?subject=Dúvidas sobre Privacidade - As Carrinho"
                    className="inline-flex items-center px-4 py-2 bg-github-accent-emphasis text-white rounded-lg hover:bg-github-accent-emphasis/90 transition-colors duration-200 text-sm"
                  >
                    <Shield className="w-4 h-4 mr-2" />
                    dpo@aguiarsistemas.com.br
                  </a>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticaDePrivacidadePage; 