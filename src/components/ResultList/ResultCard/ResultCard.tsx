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
        {product.discountedPrice && product.discountedPrice < product.price ? (
          <>
            <p className={cardStyles.discontedPrice}>Rp {product.discountedPrice}</p>
            <p className={cardStyles.originalPrice}>Rp {product.price}</p>
          </>
        ) : (
          <p className={cardStyles.defaultPrice}>Rp {product.price}</p>
        )}
      </div>
    </li>
  );
};
