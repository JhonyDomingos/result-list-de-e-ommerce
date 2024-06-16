import throphy from "../../assets/icons/trophy1.svg";
import custumerSuport from "../../assets/icons/customer-support.svg";
import guarantee from "../../assets/icons/guarantee.svg";
import shipping from "../../assets/icons/shipping.svg";
import customerAssurances from "./customerAssurances.module.css";

export const CustomerAssurances = () => {
  return (
    <div className="container">
      <div className={customerAssurances.serviceContainer}>
        <figure>
          <img src={throphy} alt="Trophy Icon" />
          <div className={customerAssurances.textBox}>
            <h2>High Quality </h2>
            <figcaption>crafted from top materials.</figcaption>
          </div>
        </figure>
        <figure>
          <img src={guarantee} alt="Icon Guarantee" />
          <div className={customerAssurances.textBox}>
            <h2>Warranty Protection </h2>
            <figcaption>crafted from top materials.</figcaption>
          </div>
        </figure>
        <figure>
          <img src={shipping} alt="Free Shipping Icon" />
          <div className={customerAssurances.textBox}>
            <h2>Free Shipping </h2>
            <figcaption>crafted from top materials.</figcaption>
          </div>
        </figure>

        <figure>
          <img src={custumerSuport} alt="Customer Suporte Icon" />
          <div className={customerAssurances.textBox}>
            <h2>24 / 7 Support</h2>
            <figcaption>crafted from top materials.</figcaption>
          </div>
        </figure>
      </div>
    </div>
  );
};
