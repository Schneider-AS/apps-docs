import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Breadcrumb = ({ items }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <nav
      className="mb-8 glassmorphism-card p-4 shadow-lg"
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-2 text-sm">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <span className="mx-3 text-text-tertiary">
                <ChevronRight className="w-4 h-4 text-primary-400" />
              </span>
            )}
            {item.href ? (
              <Link
                to={item.href}
                className="text-primary-600 hover:text-primary-700 transition-all duration-300 flex items-center font-medium hover:bg-primary-50 px-3 py-2 rounded-lg"
              >
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.label}
              </Link>
            ) : (
              <span className="text-text-primary font-semibold flex items-center bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-xl shadow-md">
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
