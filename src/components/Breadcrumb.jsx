import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const Breadcrumb = ({ items = [], className = "", showHome = true }) => {
  const allItems = showHome
    ? [{ label: "Início", href: "/", icon: Home }, ...items]
    : items;

  if (allItems.length === 0) return null;
  return (
    <nav
      className={`text-github-fg-muted ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-2">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          const isFirst = index === 0;

          return (
            <li key={index} className="flex items-center">
              {!isFirst && (
                <ChevronRight className="w-4 h-4 mx-2 text-github-fg-muted" />
              )}

              {isLast ? (
                <span className="flex items-center text-github-fg-default font-medium">
                  {item.icon && <item.icon className="w-4 h-4 mr-2" />}
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className="flex items-center text-github-fg-muted hover:text-github-fg-default transition-colors duration-200 rounded px-2 py-1 -mx-2 hover:bg-github-canvas-subtle"
                >
                  {item.icon && <item.icon className="w-4 h-4 mr-2" />}
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
