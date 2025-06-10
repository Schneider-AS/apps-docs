import React from "react";
import { useTheme } from "../hooks/useTheme";

const ThemeTest = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-4 right-4 z-50 p-4 bg-github-canvas-overlay border border-github-border-default rounded-lg shadow-lg">
      <h3 className="text-github-fg-default font-semibold mb-2">Theme Test</h3>
      <p className="text-github-fg-muted text-sm mb-2">
        Current theme: {theme}
      </p>
      <p className="text-github-fg-muted text-sm mb-3">
        HTML class:{" "}
        {document.documentElement.classList.contains("dark") ? "dark" : "light"}
      </p>
      <button
        onClick={toggleTheme}
        className="w-full px-3 py-2 bg-github-accent-emphasis text-white rounded-md hover:opacity-90 transition-opacity"
      >
        Toggle to {theme === "dark" ? "Light" : "Dark"}
      </button>
      <div className="mt-3 p-2 bg-github-canvas-subtle rounded">
        <div className="w-4 h-4 bg-github-accent-emphasis rounded-full"></div>
      </div>
    </div>
  );
};

export default ThemeTest;
