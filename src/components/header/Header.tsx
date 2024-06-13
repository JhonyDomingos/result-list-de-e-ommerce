import logo from "/logo-icon.svg";
import burgerStyle from "./burgerMenu.module.css";
import headerStyle from "./header.module.css";
import { Button } from "../Buttons/defaultButtons/buttons";
import { useState } from "react";
import { NavegationBar } from "../NavegationBar/NavegationBar";

interface IHeaderProps {
  name: string;
}
export const Header = ({ name }: IHeaderProps) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const handleMenuItemClick = () => {
    setOpenMenu(false);
  };

  const handleClick = () => {
    setOpenMenu(!openMenu);
    console.log("click", openMenu);
  };
  return (
    <div className="container">
      <header className={headerStyle.header}>
        <div className={headerStyle.headerLogo}>
          <img src={logo} alt="Store Logotype" />
          <h1>{name}</h1>
        </div>
        <div
          className={`${headerStyle.navContainer} ${
            openMenu ? headerStyle.navContainerOpen : ""
          }`}
        ></div>
        <NavegationBar onClickItem={handleMenuItemClick} isOpen={openMenu} />

        <Button
          className={`${burgerStyle.burgerBtn} ${
            openMenu ? burgerStyle.menuOpen : ""
          } }`}
          type="button"
          onClick={handleClick}
          title="Burger Menu"
        >
          <span className={burgerStyle.btnMenuBars} aria-hidden="true"></span>
        </Button>
      </header>


    </div>
  );
};
