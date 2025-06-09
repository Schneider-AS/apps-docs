import React from "react";
import { Header } from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Header />
      <main className="flex-grow pt-20 animate-fade-in">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
