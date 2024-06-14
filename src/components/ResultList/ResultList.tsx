import { productDatabase } from "../../database/productDatabase";
import { ResultCard } from "./ResultCard/ResultCard";
import resultListStyle from "./resultList.module.css"
export const ResultList = () => {
  return (
    <div className={resultListStyle.resulListContainer}>
      <ul className={resultListStyle.cardContainer}>
        {productDatabase.map((product) => (
         <ResultCard key={product.id} product={product} />
        ))}        
      </ul>   
    </div>
  );
};
