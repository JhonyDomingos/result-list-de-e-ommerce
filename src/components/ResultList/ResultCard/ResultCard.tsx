import { IProduct } from "../../../database/productDatabase";
import compareIcon from "../../../assets/icons/compare-svgrepo-com.svg";
import like from "../../../assets/icons/Heart.svg";
import share from "../../../assets/icons/share.svg";
import cardStyles from "./resultCard.module.css";
import { Button } from "../../Buttons/defaultButtons/buttons";
interface IReusltCardProps {
  product: IProduct;
  
}

export const ResultCard = ({ product }: IReusltCardProps) => {
  
  return (
    <li className={cardStyles.cardList} >
      <div className={cardStyles.overlay}>
        <div className={cardStyles.overlayButton}>
          <Button>See Details</Button>
        </div>
        <div className={cardStyles.overlayItens}>
          <div className={cardStyles.items}>
            <a href="#">
              <img src={share} alt="" />
              Share
            </a>
          </div>
          <div className={cardStyles.items}>
            <a href="#">
              <img src={compareIcon} alt="" />
              Compare
            </a>
          </div>
          <div className={cardStyles.items}>
            <a href="#">
              <img src={like} alt="" />
              Like
            </a>
          </div>
        </div>
      </div>
      <figure>
        <img src={product.image} alt={product.name} />
      </figure>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <div className={cardStyles.price}>
        {product.discountedPrice && product.discountedPrice < product.price ? (
          <>
            <p className={cardStyles.discontedPrice}>
              Rp {product.discountedPrice}
            </p>
            <p className={cardStyles.originalPrice}>Rp {product.price}</p>
          </>
        ) : (
          <p className={cardStyles.defaultPrice}>Rp {product.price}</p>
        )}
      </div>
    </li>
  );
};
