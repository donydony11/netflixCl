import React from "react";

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
};

const Button = ({ onClick, children, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
