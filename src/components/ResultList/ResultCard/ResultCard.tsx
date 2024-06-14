import { IProduct } from "../../../database/productDatabase";
import cardStyles from "./resultCard.module.css";
interface IReusltCardProps {
  product: IProduct;
}

export const ResultCard = ({ product }: IReusltCardProps) => {
  return (
    <li className={cardStyles.cardList}>
      <figure>
        <img src={product.image} alt={product.name} />
      </figure>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <div className={cardStyles.price}>
        <p>Rp {product.originalPrice}</p>
        {product.discountedPrice && <span>Rp {product.discountedPrice}</span>}
      </div>
    </li>
  );
};
