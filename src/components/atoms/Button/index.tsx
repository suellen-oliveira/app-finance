import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className="bg-purple-500 h-10 text-white font-bold hover:bg-purple-300 disabled:bg-gray-200 disabled:cursor-not-allowed">
      {children}
    </button>
  );
};

export default Button;
