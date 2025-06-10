import React from "react";
import { useTheme } from "../hooks/useTheme";
import { Sun, Moon } from "lucide-react";

const ThemeDebugger = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-github-canvas-overlay border border-github-border-default rounded-lg shadow-lg z-50">
      <div className="text-github-fg-default text-sm mb-2">
        Current theme: <strong>{theme}</strong>
      </div>
      <div className="text-github-fg-muted text-xs mb-3">
        HTML class: {document.documentElement.className || "none"}
      </div>
      <button
        onClick={toggleTheme}
        className="flex items-center gap-2 px-3 py-2 bg-github-accent-emphasis text-white rounded-md hover:bg-github-accent-emphasis/90 transition-all duration-200"
      >
        {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        Toggle to {theme === "dark" ? "Light" : "Dark"}
      </button>
    </div>
  );
};

export { ThemeDebugger };
export default ThemeDebugger;
