import React from "react";

const LoadingSpinner = ({ size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative">
        {/* Outer ring */}
        <div
          className={`${sizeClasses[size]} border-4 border-white/20 border-t-accent-400 rounded-full animate-spin`}
        ></div>

        {/* Inner ring */}
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
            size === "sm"
              ? "w-2 h-2"
              : size === "md"
              ? "w-4 h-4"
              : size === "lg"
              ? "w-6 h-6"
              : "w-8 h-8"
          } border-2 border-accent-400/40 border-t-accent-600 rounded-full animate-spin`}
          style={{ animationDirection: "reverse", animationDuration: "0.8s" }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
