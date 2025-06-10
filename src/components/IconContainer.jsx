import React from "react";

const IconContainer = ({
  children,
  size = "md",
  variant = "primary",
  shape = "rounded",
  className = "",
  ...props
}) => {
  const sizeClasses = {
    xs: "w-6 h-6 p-1",
    sm: "w-8 h-8 p-1.5",
    md: "w-10 h-10 p-2",
    lg: "w-12 h-12 p-2.5",
    xl: "w-16 h-16 p-3",
    "2xl": "w-20 h-20 p-4",
  };
  const variantClasses = {
    primary:
      "bg-blue-50 text-blue-600 border border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800",
    secondary:
      "bg-github-canvas-subtle text-github-fg-muted border border-github-border-default",
    success:
      "bg-green-50 text-green-600 border border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800",
    warning:
      "bg-yellow-50 text-yellow-600 border border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800",
    danger:
      "bg-red-50 text-red-600 border border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800",
    accent:
      "bg-purple-50 text-purple-600 border border-purple-200 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-800",
    info: "bg-cyan-50 text-cyan-600 border border-cyan-200 dark:bg-cyan-900/20 dark:text-cyan-400 dark:border-cyan-800",
    neutral:
      "bg-github-canvas-subtle text-github-fg-muted border border-github-border-muted",
  };

  const shapeClasses = {
    rounded: "rounded-lg",
    square: "rounded-none",
    circle: "rounded-full",
    pill: "rounded-full",
  };

  return (
    <div
      className={`
        flex items-center justify-center
        transition-all duration-200
        ${sizeClasses[size]} 
        ${variantClasses[variant]} 
        ${shapeClasses[shape]}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default IconContainer;
