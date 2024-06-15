import shopSectionStyles from "./shopSection.module.css";
import background from "../../assets/background/bg-sections.jpeg";
import arrow from "../../assets/icons/Vector.svg";
import iconFilter from "../../assets/icons/system-uicons_filtering.svg";
import { BgContainer } from "./bgContainer/BgContainer";
import { FilterButton } from "./filterButton/FilterButton";
import { ResultInfo } from "./resultInfo/ResultInfo";
import { ResultListContext } from "../../Provider/ResulListContext";
import { useContext, useState } from "react";
import { Input } from "../input/Input";

export const ShopSection = () => {
  const {setItemsPerPage, productList, indexOfFirstItem, indexOfLastItem } =
    useContext(ResultListContext);

    const [inputValue, setInputValue] = useState(""); // Estado local para o valor do input

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.trim(); // Remove espaços em branco desnecessários
  
      // Verifica se o valor é um número válido
      if (/^\d*$/.test(value)) {
        const parsedValue = parseInt(value, 10); // Parse o valor para um número inteiro
        setItemsPerPage(parsedValue); // Atualiza itemsPerPage com o valor digitado
        setInputValue(value); // Atualiza o estado local do input com o valor digitado
      }
      if(value === "") setItemsPerPage(10); 
      // Se o valor for vazio, volta para o valor padrão (10 itens por página)
    };
  return (
    <div className="container">
      <section className={shopSectionStyles.wrapper}>
        <div className={shopSectionStyles.textBox}>
          <h1 className={shopSectionStyles.title}>Shop Section</h1>
          <p className={shopSectionStyles.path}>
            <span>home</span>
            <span>
              <img src={arrow} alt="arrow" />
            </span>
            Shop
          </p>
        </div>
        <BgContainer
          classname={shopSectionStyles.bgContainer}
          background={background}
        />
      </section>
      <section className={shopSectionStyles.filterBar}>
        <div className={shopSectionStyles.filterBtnContainer}>
          <FilterButton
            classname={shopSectionStyles.filterBtn}
            props={{
              type: "button",
              title: "Filter Button",
              onClick: () => {},
            }}
            icon={iconFilter}
          />
          <ResultInfo
            classname={shopSectionStyles.resultInfo}
            start={indexOfFirstItem + 1 || 0}
            end={Math.min(indexOfLastItem, productList.length) || 0}
            total={productList.length}
          />
        </div>
        <div className={shopSectionStyles.showItems}>
          <Input
           label="Show"
           type="number"
           value={inputValue}
           onChange={handleChange}
           placeholder="16"
          />
        </div>
      </section>
    </div>
  );
};
