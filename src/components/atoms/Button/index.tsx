import { ButtonHTMLAttributes, ReactNode } from "react";
import tw from "tailwind-styled-components";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "ghost";
}

const Button = ({ children, variant, ...props }: Props) => {
  return (
    <BaseButton variant={variant} {...props}>
      {children}
    </BaseButton>
  );
};

export default Button;

type StyleProps = {
  variant?: "ghost";
};

export const BaseButton = tw.button<StyleProps>`
  h-10 px-4 text-white font-bold disabled:bg-gray-200 disabled:cursor-not-allowed
  ${({ variant }) => (variant === "ghost" ? Ghost : Main)}
`;

const Main = `bg-purple-500 hover:bg-purple-300`;

const Ghost = `bg-transparent hover:bg-purple-100 text-purple-500`;
