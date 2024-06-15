import  { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  label: string;
}


export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ errorMessage, label, ...props }, ref) => {
    return (
      <>
      <label>{label}</label>
        <input {...props} ref={ref} />
        {errorMessage && <span >{errorMessage}</span>}
      </>
    );
  }
);


