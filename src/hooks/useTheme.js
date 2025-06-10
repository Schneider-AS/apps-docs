import { useState, useEffect } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState("dark"); // Dark como padrão

  useEffect(() => {
    // Verifica se há preferência salva, senão usa dark como padrão
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);

    // Aplica o tema ao elemento raiz
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Força a aplicação inicial se não há tema salvo
    if (!localStorage.getItem("theme")) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    console.log("Toggling theme from", theme, "to", newTheme);
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    // Aplica o tema ao elemento raiz
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      console.log("Added dark class to document");
    } else {
      document.documentElement.classList.remove("dark");
      console.log("Removed dark class from document");
    }
  };

  return { theme, toggleTheme };
};
