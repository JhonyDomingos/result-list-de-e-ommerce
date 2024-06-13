import  { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ errorMessage, ...props }, ref) => {
    return (
      <>
        <input {...props} ref={ref} />
        {errorMessage && <span style={{ color: "red" }}>{errorMessage}</span>}
      </>
    );
  }
);

export default Input;
