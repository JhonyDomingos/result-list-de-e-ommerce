import { useState } from "react";
import { Button } from "../Buttons/defaultButtons/buttons";
import { Input } from "../input/Input";
import footerStyles from "./footer.module.css";
import { LinksSection } from "./Links/LinksSection";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setError("Invalid email address");
      setSuccess("");
      setTimeout(() => setError(""), 3000); 
    } else {
      setSuccess("Thank you for subscribing!");
      setEmail("");
      setTimeout(() => setSuccess(""), 3000); 
      console.log("Form submitted with email:", email);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="container">
      <div className={footerStyles.container}>
        <footer className={footerStyles.footer}>
          <h3>Footer.</h3>
          <p>
            Rua Alexandre Dumas, 1711 - 6º andar - Chácara Santo Antônio, São
            Paulo - SP, 04717-004
          </p>
        </footer>

        <LinksSection />

        <section className={footerStyles.helpSection}>
          <h3>Help</h3>
          <ul>
            <li>
              <a href="">Payment Options</a>
            </li>
            <li>
              <a href="">Returns </a>
            </li>
            <li>
              <a href="">Privacy Policies</a>
            </li>
          </ul>
        </section>

        <section className={footerStyles.newsLetter}>
          <h3>Newsletter</h3>
          <div>
            <form onSubmit={handleSubmit}>
              {error && <p className={footerStyles.error}>{error}</p>}
              {success && <p className={footerStyles.success}>{success}</p>}
              <div>
                <Input
                  placeholder="Enter Your Email Address"
                  type="text"
                  value={email}
                  onChange={handleChange}
                />
                <Button type="submit">subscribe</Button>
              </div>
            </form>
          </div>
        </section>
      </div>
      <section>
        <div className={footerStyles.copyright}>
          <p>2024 Compass UOL</p>
        </div>
      </section>
    </div>
  );
};
