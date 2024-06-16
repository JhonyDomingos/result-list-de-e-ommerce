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
import { FilterSection } from "../Filter/FilterSection";

export const ShopSection = () => {
  const {
    setItemsPerPage,
    productList,
    indexOfFirstItem,
    indexOfLastItem,
    visible,
    setVisible,
  } = useContext(ResultListContext);

  const [inputValue, setInputValue] = useState(""); // Estado local para o valor do input

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim(); // Remove espaços em branco desnecessários

    // Como o input é do tipo "number", o valor já estará vazio ou será um número válido

    const parsedValue = parseInt(value, 10); // converte o valor para um número inteiro
    if (!isNaN(parsedValue) && parsedValue > 0) {
      setItemsPerPage(parsedValue); // Atualiza itemsPerPage com o valor digitado
      setInputValue(value); // Atualiza o estado local do input com o valor digitado
    } else {
      setItemsPerPage(10); // Se o valor não for um número válido, volta para o valor padrão (10 itens por página)
      setInputValue(""); // Limpa o estado local do input se o valor for inválido
    }
    
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
              onClick: () => {setVisible(!visible)},
            }}
            icon={iconFilter}
          />
          <ResultInfo
            classname={shopSectionStyles.resultInfo}
            start={indexOfFirstItem + 1 || 0}
            end={Math.min(indexOfLastItem, productList.length) || 0}
            total={productList.length}
          />
          <FilterSection />
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
