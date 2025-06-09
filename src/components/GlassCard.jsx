import React from "react";

const GlassCard = ({
  children,
  className = "",
  hover = true,
  gradient = false,
  padding = "p-6",
  ...props
}) => {
  const baseClasses = `
    glassmorphism-card
    border border-white/20
    transition-all duration-300
    ${padding}
    ${hover ? "hover:shadow-2xl hover:scale-105" : ""}
    ${gradient ? "bg-gradient-to-br from-white/80 to-white/40" : "bg-white/80"}
    ${className}
  `;

  return (
    <div className={baseClasses} {...props}>
      {children}
    </div>
  );
};

export default GlassCard;
