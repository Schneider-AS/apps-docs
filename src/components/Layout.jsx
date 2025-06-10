import React from "react";
import { Header } from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Header />
      <main
        className="flex-grow pt-0 animate-fade-in focus:outline-none"
        tabIndex={-1}
        id="main-content"
        aria-label="Conteúdo principal"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
