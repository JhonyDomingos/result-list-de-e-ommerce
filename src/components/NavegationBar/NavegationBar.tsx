import { Button } from "../Buttons/defaultButtons/buttons";
import navegationStyle from "./navegationBar.module.css";
import iconCart from "../../assets/icons/icon-cart.svg";
import iconSeacrh from "../../assets/icons/icon-search.svg";
import iconHeart from "../../assets/icons/icont-heart.svg";
import iconAccountAlert from "../../assets/icons/icon-account-alert.svg";

interface INavegationBarProps {
  isOpen: boolean;
  onClickItem: () => void;
}

export const NavegationBar = ({ onClickItem, isOpen }: INavegationBarProps) => {
  return (
    <nav
      className={`${navegationStyle.navegationBar} ${isOpen ? navegationStyle.navegationBarOpen : ""}`}
    >
      
      <ul className={navegationStyle.menuItem}>
        <li>
          <a href="#" onClick={onClickItem} title="Home Page">
            Home
          </a>
        </li>
        <li>
          <a href="#" onClick={onClickItem} title="Shop Page">
            Shop
          </a>
        </li>
        <li>
          <a href="#" onClick={onClickItem} title="About Page">
            About
          </a>
        </li>
        <li>
          <a href="#" onClick={onClickItem} title="Contact Page">
            Contact
          </a>
        </li>
      </ul>
      <div className={navegationStyle.actionsBtn}>
        <Button type="button" title="Account Alert Icon" onClick={onClickItem}>
          <img src={iconAccountAlert} alt="" />
        </Button>
        <Button type="button" title="Seach Icon" onClick={onClickItem}>
          <img src={iconSeacrh} alt="" />
        </Button>
        <Button type="button" title="Like Icon" onClick={onClickItem}>
          <img src={iconHeart} alt="" />
        </Button>
        <Button type="button" title="Cart Icon" onClick={onClickItem}>
          <img src={iconCart} alt="" />
        </Button>
      </div>
 
    </nav>
  );
};
