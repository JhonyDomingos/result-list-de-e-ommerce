import { useContext } from "react";
import { ResultCard } from "./ResultCard/ResultCard";
import resultListStyle from "./resultList.module.css";
import { ResultListContext } from "../../Provider/ResulListContext";
import { Pagination } from "./Pagination/Pagination";

export const ResultList = () => {
  const { currentItems } = useContext(ResultListContext );

  return (
    <div className={resultListStyle.resulListContainer}>
      <ul className={resultListStyle.cardContainer}>
        {currentItems.map((product) => (
          <ResultCard key={product.id} product={product} />
        ))}
      </ul>
      <Pagination />
    </div>
  );
};
