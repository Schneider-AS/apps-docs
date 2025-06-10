import React from "react";

const GlassCard = ({
  children,
  className = "",
  variant = "default",
  padding = "default",
  hover = true,
  ...props
}) => {
  const variants = {
    default:
      "bg-github-canvas-overlay border border-github-border-default rounded-lg",
    outline:
      "border-2 border-github-border-default bg-github-canvas-default rounded-lg",
    flat: "bg-github-canvas-subtle border border-github-border-muted rounded-lg",
    elevated:
      "bg-github-canvas-overlay border border-github-border-default rounded-lg shadow-lg",
  };

  const paddings = {
    none: "",
    sm: "p-4",
    default: "p-6",
    lg: "p-8",
  };

  const hoverEffect = hover
    ? "hover:shadow-md hover:-translate-y-0.5 hover:border-github-border-muted"
    : "";

  return (
    <div
      className={`
        ${variants[variant]} 
        ${paddings[padding]} 
        ${hoverEffect}
        transition-all duration-200 
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

// Sub-components for better organization
GlassCard.Header = ({ children, className = "", ...props }) => (
  <div
    className={`text-github-fg-default font-semibold ${className}`}
    {...props}
  >
    {children}
  </div>
);

GlassCard.Body = ({ children, className = "", ...props }) => (
  <div className={`text-github-fg-default ${className}`} {...props}>
    {children}
  </div>
);

GlassCard.Footer = ({ children, className = "", ...props }) => (
  <div
    className={`text-github-fg-muted border-t border-github-border-muted pt-4 mt-4 ${className}`}
    {...props}
  >
    {children}
  </div>
);

export default GlassCard;
