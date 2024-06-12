interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, ...props }: IButtonProps) => {
  return <button {...props}>{children}</button>;
};
