import React from "react";

const LoadingSpinner = ({
  size = "md",
  variant = "primary",
  text = "",
  className = "",
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12",
  };
  const variantClasses = {
    primary: "text-github-accent-emphasis",
    secondary: "text-github-fg-muted",
    white: "text-white",
    success: "text-github-success-fg",
  };

  return (
    <div className={`flex items-center justify-center space-x-3 ${className}`}>
      <div className="relative">
        <div
          className={`
          ${sizeClasses[size]} 
          ${variantClasses[variant]}
          animate-spin
        `}
        >
          <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
      </div>

      {text && (
        <span className={`text-sm font-medium ${variantClasses[variant]}`}>
          {text}
        </span>
      )}
    </div>
  );
};

// Loading overlay component
LoadingSpinner.Overlay = ({ children, isLoading, text = "Carregando..." }) => (
  <div className="relative">
    {children}
    {isLoading && (
      <div className="absolute inset-0 bg-github-canvas-overlay/80 backdrop-blur-sm flex items-center justify-center z-50 rounded-lg">
        <LoadingSpinner text={text} />
      </div>
    )}
  </div>
);

// Loading skeleton component
LoadingSpinner.Skeleton = ({ className = "", lines = 3 }) => (
  <div className={`animate-pulse space-y-3 ${className}`}>
    {Array.from({ length: lines }).map((_, index) => (
      <div
        key={index}
        className={`h-4 bg-github-canvas-subtle rounded ${
          index === lines - 1 ? "w-3/4" : "w-full"
        }`}
      />
    ))}
  </div>
);

export default LoadingSpinner;
