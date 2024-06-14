import shopSectionStyles from "./shopSection.module.css";
import background from "../../assets/background/bg-sections.jpeg";
import arrow from "../../assets/icons/Vector.svg";
import iconFilter from "../../assets/icons/system-uicons_filtering.svg";
import { BgContainer } from "./bgContainer/BgContainer";
import { FilterButton } from "./filterButton/FilterButton";
import { ResultInfo } from "./resultInfo/ResultInfo";
import { Input } from "../input/Input";
export const ShopSection = () => {
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
            props={{ type: "button", title: "Filter Button" }}
            icon={iconFilter}
          />
          <ResultInfo
            classname={shopSectionStyles.resultInfo}
            start={1}
            end={16}
            total={32}
          />
        </div>
        <div className={shopSectionStyles.showItems}>
          <Input label="Show" type="number" min="1" max="32" />
        </div>
      </section>
      
    </div>
  );
};
