import { useContext } from "react";
import { Button } from "../Buttons/defaultButtons/buttons";
import { Input } from "../input/Input";
import filter from "./filterSection.module.css";
import { ResultListContext } from "../../Provider/ResulListContext";

export const FilterSection = () => {
  const {
    visible,    
    alphabeticalOrder,
    setAlphabeticalOrder,
    priceOrder,
    setPriceOrder,
    applyFilter,
    clearFilters,
  } = useContext(ResultListContext);

  const handleApplyFilters = () => {
    applyFilter();
  };

  return (
    <div
      role="dialog"
      className={`${filter.container} ${
        visible ? filter.visible : filter.hidden
      }`}
    >
      <div className={filter.filterSection}>
        <h2>Filter Section</h2>

        <div className={filter.filterControllers}>
          <p>Order by A-Z or Z-A</p>
          <div className={filter.orderInputs}>
            <Input
              type="radio"
              name="alphabeticalOrder"
              title="Order A-Z"
              label="a-z"
              onChange={() => setAlphabeticalOrder("a-z")}
              checked={alphabeticalOrder === "a-z"}
            />
            <Input
              type="radio"
              name="alphabeticalOrder"
              title="Order Z-A"
              label="z-a"
              onChange={() => setAlphabeticalOrder("z-a")}
              checked={alphabeticalOrder === "z-a"}
            />
          </div>

          <p>Order by price</p>
          <div className={filter.orderInputsPrice}>
            <Input
              type="radio"
              name="priceOrder"
              title="Order By Higher Price"
              label="higher"
              onChange={() => setPriceOrder("higher-price")}
              checked={priceOrder === "higher-price"}
            />
            <Input
              type="radio"
              name="priceOrder"
              title="Order by Lower Price"
              label="lower"
              onChange={() => setPriceOrder("lower-price")}
              checked={priceOrder === "lower-price"}
            />
          </div>
        </div>
        <div className={filter.applyButtons}>
          <Button
            type="button"
            title="Aplicar Filtros"
            onClick={handleApplyFilters}
          >
            Aplicar Filtros
          </Button>
          <Button type="reset" title="Limpar Filtros" onClick={clearFilters}>
            Limpar Filtros
          </Button>
        </div>
      </div>
    </div>
  );
};
