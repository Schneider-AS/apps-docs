/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Habilita dark mode com classe
  theme: {
    extend: {
      colors: {
        // GitHub Theme Colors - Using CSS Variables for automatic theme switching
        github: {
          canvas: {
            default: "rgb(var(--github-canvas-default) / <alpha-value>)",
            overlay: "rgb(var(--github-canvas-overlay) / <alpha-value>)",
            subtle: "rgb(var(--github-canvas-subtle) / <alpha-value>)",
          },
          fg: {
            default: "rgb(var(--github-fg-default) / <alpha-value>)",
            muted: "rgb(var(--github-fg-muted) / <alpha-value>)",
          },
          border: {
            default: "rgb(var(--github-border-default) / <alpha-value>)",
            muted: "rgb(var(--github-border-muted) / <alpha-value>)",
            emphasis: "rgb(var(--github-accent-emphasis) / <alpha-value>)",
          },
          accent: {
            emphasis: "rgb(var(--github-accent-emphasis) / <alpha-value>)",
            fg: "rgb(var(--github-accent-fg) / <alpha-value>)",
          },
          success: {
            emphasis: "rgb(var(--github-success-fg) / <alpha-value>)",
            fg: "rgb(var(--github-success-fg) / <alpha-value>)",
            subtle: "rgb(var(--github-success-fg) / 0.15)",
          },
          attention: {
            emphasis: "rgb(var(--github-attention-fg) / <alpha-value>)",
            fg: "rgb(var(--github-attention-fg) / <alpha-value>)",
            subtle: "rgb(var(--github-attention-fg) / 0.15)",
          },
          danger: {
            emphasis: "rgb(var(--github-danger-fg) / <alpha-value>)",
            fg: "rgb(var(--github-danger-fg) / <alpha-value>)",
          },
        },
        primary: {
          DEFAULT: "#1976D2",
          light: "#42A5F5",
          dark: "#0D47A1",
          50: "#E3F2FD",
          100: "#BBDEFB",
          500: "#2196F3",
          600: "#1565C0",
          700: "#0D47A1",
          800: "#0A3A8B",
          900: "#072D75",
        },
        secondary: {
          DEFAULT: "#37474F", // Cinza azulado elegante (Blue Grey 600)
          light: "#62727B",
          dark: "#263238",
          50: "#ECEFF1",
          100: "#CFD8DC",
          600: "#546E7A",
          700: "#455A64",
          800: "#37474F",
          900: "#263238",
        },
        accent: {
          DEFAULT: "#00BCD4", // Cyan vibrante e moderno
          light: "#4DD0E1",
          dark: "#0097A7",
        },
        success: {
          DEFAULT: "#4CAF50",
          light: "#81C784",
          dark: "#388E3C",
        },
        background: {
          DEFAULT: "#F8F9FA", // Background mais suave
          card: "#FFFFFF",
          "card-muted": "#F5F7FA",
          gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        },
        surface: "#FFFFFF",
        "on-primary": "#FFFFFF",
        "on-secondary": "#FFFFFF",
        "on-background": "#263238", // Cor primária para texto sobre o fundo claro
        "on-surface": "#263238", // Cor primária para texto sobre superfícies brancas
        error: "#D32F2F", // Vermelho Material Design para erros
        "text-primary": "#212121", // Cinza escuro para texto principal (Material Grey 900)
        "text-secondary": "#757575", // Cinza médio para texto secundário (Material Grey 600)
        "text-tertiary": "#9E9E9E", // Cinza claro para texto terciário ou hints (Material Grey 500)
        "text-secondary-on-primary": "#B0BEC5", // Texto secundário sobre fundo primário
        "text-tertiary-on-primary": "#90A4AE", // Texto terciário sobre fundo primário
        "border-color": "#E0E0E0", // Cinza claro para bordas (Material Grey 300)
        "border-color-on-primary": "#546E7A", // Cor da borda sobre fundo primário
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        display: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ], // Usar Inter para títulos também para consistência
      },
      boxShadow: {
        // Sombras Material Design (elevações)
        dp1: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
        dp2: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
        dp3: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
        dp4: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
        dp5: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "12px",
        md: "16px",
        lg: "20px",
        xl: "24px",
        "2xl": "32px",
        "3xl": "48px",
        full: "9999px",
      },
      // Adicionando utilitários de backdrop blur para Glassmorphism
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "40px",
        "3xl": "64px",
      },
    },
  },
  plugins: [
    // Considerar adicionar require('@tailwindcss/forms') se houver formulários complexos
    // ou require('@tailwindcss/typography') para estilização de conteúdo de markdown/html (prose)
  ],
};
