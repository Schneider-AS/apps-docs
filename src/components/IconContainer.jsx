import React from "react";

const IconContainer = ({
  children,
  size = "md",
  variant = "primary",
  className = "",
  ...props
}) => {
  const sizeClasses = {
    sm: "w-8 h-8 p-2",
    md: "w-12 h-12 p-3",
    lg: "w-16 h-16 p-4",
    xl: "w-20 h-20 p-5",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-br from-primary-400/20 to-primary-600/20 border-primary-200/30",
    secondary:
      "bg-gradient-to-br from-secondary-400/20 to-secondary-600/20 border-secondary-200/30",
    accent:
      "bg-gradient-to-br from-accent-400/20 to-accent-600/20 border-accent-200/30",
    success:
      "bg-gradient-to-br from-green-400/20 to-green-600/20 border-green-200/30",
    warning:
      "bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 border-yellow-200/30",
    danger: "bg-gradient-to-br from-red-400/20 to-red-600/20 border-red-200/30",
  };

  return (
    <div
      className={`
        glassmorphism-card 
        ${sizeClasses[size]} 
        ${variantClasses[variant]}
        border 
        flex items-center justify-center 
        group-hover:scale-110 
        transition-transform duration-300
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default IconContainer;
