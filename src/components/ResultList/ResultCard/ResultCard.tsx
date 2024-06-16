import { IProduct } from "../../../database/productDatabase";
import compareIcon from "../../../assets/icons/compare-svgrepo-com.svg";
import like from "../../../assets/icons/Heart.svg";
import share from "../../../assets/icons/share.svg";
import cardStyles from "./resultCard.module.css";
import { Button } from "../../Buttons/defaultButtons/buttons";
import { useEffect, useState } from "react";
interface IReusltCardProps {
  product: IProduct;
}

export const ResultCard = ({ product }: IReusltCardProps) => {
  const [discontPercent, setDiscontPercent] = useState<number | undefined>(
    undefined
  ); // Estado para armazenar o percentual de desconto com valor inicial indefinido
  const { price, discountedPrice } = product;
  const calcularValorDesconto = (
    // Função que calcula o valor do desconto
    price: number, // Preço original do produto
    discountedPrice: number | undefined //
  ) => {
    if (discountedPrice !== undefined) {
      const percentualDesconto = Math.ceil(
        ((price - discountedPrice) / price) * 100 //  Calcula o percentual de desconto
      );
      return setDiscontPercent(Number(percentualDesconto.toFixed(2)));
      //  Define o percentual de desconto no estado discontPercent
    }
    return null;
  };
  useEffect(() => {
    // Efeito que calcula o percentual de desconto toda vez que o desconto muda
    //obs chamar a funcao fora do useEffect vai gerar um loop infinito
    calcularValorDesconto(price, discountedPrice);
  }, [discontPercent, price, discountedPrice]);

  return (
    <li className={cardStyles.cardList}>
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
      {}
      <h2>{} </h2>
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
      {discontPercent !== undefined && (
        <span className={cardStyles.discountPercent}>-{discontPercent}%</span>
      )}
      {product.isNew && <span className={cardStyles.itemIsNew}>New</span>}
    </li>
  );
};
