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

```
src/
├── components/
│   ├── Header.jsx          # Cabeçalho da aplicação
│   ├── Footer.jsx          # Rodapé da aplicação
│   └── Layout.jsx          # Layout principal
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
   ```
   http://localhost:5173
   ```

## 📄 Rotas Disponíveis

- `/` - Página inicial do portal
- `/as-bi/termos-de-uso` - Termos de Uso do AS BI
- `/as-bi/politica-de-privacidade` - Política de Privacidade do AS BI

## ✨ Funcionalidades

- **Design Responsivo** - Adaptável a diferentes tamanhos de tela
- **Navegação Intuitiva** - Links claros entre as páginas
- **Estrutura Escalável** - Fácil adição de novos aplicativos e documentos
- **Interface Moderna** - Design limpo e profissional

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

## 📝 Licença

© 2025 Aguiar Sistemas LTDA. Todos os direitos reservados.+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
