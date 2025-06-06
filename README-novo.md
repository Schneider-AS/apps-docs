# Portal de Documentação - Aguiar Sistemas

Este é um portal web moderno desenvolvido em React para centralizar toda a documentação legal dos aplicativos da Aguiar Sistemas.

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca para construção da interface
- **Vite** - Ferramenta de build e desenvolvimento rápido
- **React Router 7** - Navegação SPA entre páginas
- **Tailwind CSS 3** - Framework CSS utilitário para estilização
- **Yarn** - Gerenciador de pacotes

## ✨ Funcionalidades

- **🎨 Design Moderno** - Interface clean e profissional
- **📱 Totalmente Responsivo** - Adaptável a todos os dispositivos
- **🧭 Navegação Intuitiva** - Breadcrumbs e índices laterais
- **⚡ Performance** - Carregamento rápido com Vite
- **🔍 Índices Laterais** - Navegação fácil em documentos longos
- **🎯 Acessibilidade** - Seguindo boas práticas de UX
- **🔄 Escalável** - Arquitetura preparada para novos aplicativos

## 📁 Estrutura do Projeto

```text
src/
├── components/
│   ├── Header.jsx          # Cabeçalho da aplicação
│   ├── Footer.jsx          # Rodapé da aplicação
│   ├── Layout.jsx          # Layout principal
│   └── Breadcrumb.jsx      # Navegação breadcrumb
├── pages/
│   ├── HomePage.jsx        # Página inicial
│   └── as-bi/
│       ├── TermosDeUsoPage.jsx
│       └── PoliticaDePrivacidadePage.jsx
└── App.jsx                 # Configuração das rotas
```

## 🔧 Instalação e Execução

1. **Instale as dependências:**

   ```bash
   yarn install
   ```

2. **Execute o projeto em modo de desenvolvimento:**

   ```bash
   yarn dev
   ```

3. **Acesse no navegador:**

   ```text
   http://localhost:5173
   ```

## 📄 Rotas Disponíveis

- `/` - Página inicial do portal
- `/as-bi/termos-de-uso` - Termos de Uso do AS BI
- `/as-bi/politica-de-privacidade` - Política de Privacidade do AS BI

## 🎨 Melhorias Implementadas

### Interface Aprimorada

- Cards interativos com hover effects
- Gradientes e sombras modernas
- Animações suaves de transição
- Favicon personalizado

### Navegação Melhorada

- Breadcrumbs em todas as páginas
- Índices laterais nos documentos
- Navegação entre documentos relacionados
- Header com links úteis

### UX/UI

- Seções coloridas para melhor organização
- Badges de status dos documentos
- Indicadores visuais (LGPD, status atual)
- Grid responsivo adaptativo

## 🔄 Adicionando Novos Aplicativos

Para adicionar documentação de um novo aplicativo:

1. **Crie uma nova pasta** em `src/pages/[nome-do-app]/`
2. **Adicione as páginas** de documentação (Termos de Uso, Política de Privacidade, etc.)
3. **Configure as rotas** no arquivo `src/App.jsx`
4. **Atualize a página inicial** (`src/pages/HomePage.jsx`) para incluir o novo aplicativo

## 🏗️ Build para Produção

```bash
yarn build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

## 📱 Responsividade

O portal foi desenvolvido com abordagem mobile-first:

- **Mobile** (< 768px) - Layout em coluna única
- **Tablet** (768px - 1024px) - Layout adaptativo
- **Desktop** (> 1024px) - Layout completo com índice lateral

## 🔒 Conformidade Legal

- **LGPD** - Política de Privacidade conforme Lei Geral de Proteção de Dados
- **Termos Atualizados** - Documentos sempre com última versão
- **Transparência** - Informações claras sobre coleta e uso de dados

## 📞 Suporte

Para dúvidas ou suporte técnico:

- **Email:** suporte@aguiarsistemas.com.br
- **Site:** www.aguiarsistemas.com.br

---

© 2025 Aguiar Sistemas LTDA. Todos os direitos reservados.
