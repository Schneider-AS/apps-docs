import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  ShoppingCart,
  FileText,
  Info,
  Smartphone,
  CheckSquare,
  Users,
  ArrowLeft,
  ExternalLink,
  Calendar,
  Shield,
  CreditCard,
  Package,
} from "lucide-react";
import Breadcrumb from "../../components/Breadcrumb";
import GlassCard from "../../components/GlassCard";
import IconContainer from "../../components/IconContainer";

const TermosDeUsoPage = () => {
  const breadcrumbItems = [
    {
      label: "As Carrinho",
      href: "/",
    },
    {
      label: "Termos de Uso",
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
            Bem-vindo ao As Carrinho (Aguiar Sistemas Carrinho de Compras). Estes
            Termos de Uso estabelecem as condições gerais de utilização da nossa
            plataforma de e-commerce e gestão de vendas online.
          </p>
          <p>
            Ao acessar ou utilizar o As Carrinho, você concorda em cumprir estes
            termos. Se não concordar com qualquer parte destes termos, não
            utilize nossa plataforma.
          </p>
        </div>
      ),
    },
    {
      id: "definicoes",
      title: "2. Definições",
      icon: FileText,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-github-fg-default mb-2">
              As Carrinho:
            </h4>
            <p>
              Plataforma de e-commerce e carrinho de compras desenvolvida pela Aguiar
              Sistemas LTDA.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-github-fg-default mb-2">
              Usuário/Cliente:
            </h4>
            <p>
              Qualquer pessoa física ou jurídica que acesse, utilize a plataforma
              ou realize compras através do As Carrinho.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-github-fg-default mb-2">
              Produtos:
            </h4>
            <p>
              Itens, serviços ou mercadorias oferecidos para venda através da
              plataforma.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-github-fg-default mb-2">
              Pedido:
            </h4>
            <p>
              Solicitação de compra realizada pelo cliente através da plataforma.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "uso-plataforma",
      title: "3. Uso da Plataforma",
      icon: Smartphone,
      content: (
        <div className="space-y-4">
          <p>
            O As Carrinho é uma plataforma de e-commerce destinada à venda de
            produtos e serviços. O usuário compromete-se a:
          </p>
          <ul className="list-disc list-inside space-y-2 text-github-fg-muted">
            <li>
              Utilizar a plataforma apenas para fins legítimos de compra
            </li>
            <li>Fornecer informações verdadeiras e atualizadas</li>
            <li>Não tentar violar a segurança do sistema de pagamento</li>
            <li>Manter a confidencialidade de suas credenciais de acesso</li>
            <li>Respeitar os direitos de propriedade intelectual</li>
            <li>Não usar a plataforma para atividades fraudulentas</li>
            <li>Respeitar as políticas de devolução e troca</li>
          </ul>
        </div>
      ),
    },
    {
      id: "compras-pagamentos",
      title: "4. Compras e Pagamentos",
      icon: CreditCard,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-github-fg-default mb-2">
              Processo de Compra:
            </h4>
            <ul className="list-disc list-inside space-y-1 text-github-fg-muted">
              <li>Seleção de produtos e adição ao carrinho</li>
              <li>Preenchimento dos dados de entrega e pagamento</li>
              <li>Confirmação do pedido pelo cliente</li>
              <li>Processamento do pagamento</li>
              <li>Confirmação e envio do produto</li>
            </ul>
          </div>
          <div className="mt-6">
            <h4 className="font-semibold text-github-fg-default mb-2">
              Formas de Pagamento:
            </h4>
            <ul className="list-disc list-inside space-y-1 text-github-fg-muted">
              <li>Cartões de crédito e débito</li>
              <li>PIX (pagamento instantâneo)</li>
              <li>Boleto bancário</li>
              <li>Outras formas conforme disponibilidade</li>
            </ul>
          </div>
          <div className="mt-6">
            <h4 className="font-semibold text-github-fg-default mb-2">
              Preços e Disponibilidade:
            </h4>
            <p className="text-github-fg-muted">
              Os preços estão sujeitos a alterações sem aviso prévio. A disponibilidade
              dos produtos é atualizada em tempo real, mas pode haver divergências
              em situações de alta demanda.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "entrega-devolucao",
      title: "5. Entrega e Devolução",
      icon: Package,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-github-fg-default mb-2">
              Entrega:
            </h4>
            <ul className="list-disc list-inside space-y-1 text-github-fg-muted">
              <li>Prazos de entrega conforme região selecionada</li>
              <li>Rastreamento disponível para todos os pedidos</li>
              <li>Entrega realizada no endereço informado pelo cliente</li>
              <li>Necessária presença do destinatário ou responsável</li>
            </ul>
          </div>
          <div className="mt-6">
            <h4 className="font-semibold text-github-fg-default mb-2">
              Política de Devolução:
            </h4>
            <ul className="list-disc list-inside space-y-1 text-github-fg-muted">
              <li>Prazo de 7 dias para arrependimento (conforme CDC)</li>
              <li>Produtos devem estar em perfeito estado</li>
              <li>Embalagem original preservada</li>
              <li>Custos de devolução conforme política específica</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "responsabilidades",
      title: "6. Responsabilidades",
      icon: CheckSquare,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-github-fg-default mb-2">
              Do Cliente:
            </h4>
            <ul className="list-disc list-inside space-y-1 text-github-fg-muted">
              <li>Fornecer informações precisas e atualizadas</li>
              <li>Verificar dados do pedido antes da confirmação</li>
              <li>Utilizar a plataforma conforme os termos estabelecidos</li>
              <li>Reportar problemas ou inconsistências identificadas</li>
              <li>Estar presente no endereço informado para recebimento</li>
            </ul>
          </div>
          <div className="mt-6">
            <h4 className="font-semibold text-github-fg-default mb-2">
              Da Aguiar Sistemas:
            </h4>
            <ul className="list-disc list-inside space-y-1 text-github-fg-muted">
              <li>Manter a plataforma funcionando adequadamente</li>
              <li>Proteger os dados conforme nossa Política de Privacidade</li>
              <li>Processar pedidos e pagamentos com segurança</li>
              <li>Fornecer suporte ao cliente durante horário comercial</li>
              <li>Cumprir prazos de entrega informados</li>
              <li>Garantir a qualidade dos produtos vendidos</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "limitacoes",
      title: "7. Limitações e Exclusões",
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p>A Aguiar Sistemas não se responsabiliza por:</p>
          <ul className="list-disc list-inside space-y-2 text-github-fg-muted">
            <li>Produtos danificados por uso inadequado pelo cliente</li>
            <li>Atrasos na entrega causados pelos Correios ou transportadoras</li>
            <li>Indisponibilidade temporária da plataforma para manutenção</li>
            <li>Problemas decorrentes de conexão de internet do cliente</li>
            <li>Uso não autorizado por terceiros das credenciais do cliente</li>
            <li>Variações naturais em produtos artesanais ou naturais</li>
          </ul>
        </div>
      ),
    },
    {
      id: "propriedade",
      title: "8. Propriedade Intelectual",
      icon: Users,
      content: (
        <div className="space-y-4">
          <p>
            Todos os direitos de propriedade intelectual relacionados ao As Carrinho,
            incluindo mas não limitado a código-fonte, design, funcionalidades,
            imagens e descrições de produtos, pertencem exclusivamente à Aguiar
            Sistemas LTDA ou seus parceiros licenciados.
          </p>
          <p>
            Os dados pessoais e de compra do cliente permanecem de sua propriedade,
            sendo utilizados pela plataforma apenas para processar pedidos e
            melhorar a experiência de compra.
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
                <FileText className="w-6 h-6" />
              </IconContainer>
              <div>
                <h1 className="text-4xl font-bold text-github-fg-default mb-2">
                  Termos de Uso - As Carrinho
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

          {/* Info Card */}
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
                  Este documento foi atualizado em Janeiro de 2025. Recomendamos
                  a leitura periódica para se manter informado sobre eventuais
                  mudanças.
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

            {/* Contact Section */}
            <GlassCard className="border-l-4 border-l-github-success-emphasis">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <IconContainer variant="success">
                    <Info className="w-5 h-5" />
                  </IconContainer>
                </div>
                <div>
                  <h3 className="font-semibold text-github-fg-default mb-2">
                    Dúvidas ou Suporte?
                  </h3>
                  <p className="text-github-fg-muted text-sm mb-4">
                    Se você tiver dúvidas sobre estes termos ou precisar de
                    suporte, entre em contato conosco.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="mailto:suporte@aguiarsistemas.com.br"
                      className="inline-flex items-center px-4 py-2 bg-github-accent-emphasis text-white rounded-lg hover:bg-github-accent-emphasis/90 transition-colors duration-200 text-sm"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Suporte As Carrinho
                    </a>
                    <a
                      href="https://aguiarsistemas.com.br"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-github-border-default text-github-fg-default rounded-lg hover:border-github-border-emphasis transition-colors duration-200 text-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Aguiar Sistemas
                    </a>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermosDeUsoPage; 