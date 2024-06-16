import { ButtonHTMLAttributes } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  active?: boolean;
}

export const Button = ({ children, ...props }: IButtonProps) => {
  return (
    <button {...props}>
      {children}
    </button>
  );
};
