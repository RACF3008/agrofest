import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string;
};

const Button = ({ children, className, text, ...props }: ButtonProps) => {
  return (
    <button
      className={`py-2 px-4 rounded hover:opacity-80 cursor-pointer font-semibold transition-all duration-300 ${className ?? ""}`}
      {...props}
    >
      {children ?? text}
    </button>
  );
};

export default Button;
