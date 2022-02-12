import { MdOutlineMenuBook } from "react-icons/md";

import classes from "./menu.module.css";

const Menu = () => {
  return (
    <section className={classes.menu}>
      <div className={classes["menu__item1"]}>
        <img
          className={classes["menu__icon"]}
          src="https://img.icons8.com/external-others-iconmarket/64/000000/external-cake-canada-others-iconmarket-4.png"
        />
        <h3 className={classes["menu__title"]}>Doces</h3>
        <p className={classes["menu__description"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className={classes["menu__item2"]}>
        <h3 className={classes["menu__title"]}>Salgagos</h3>
        <p className={classes["menu__description"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className={classes["menu__item3"]}>
        <h3 className={classes["menu__title"]}>Massas</h3>
        <p className={classes["menu__description"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </section>
  );
};

export default Menu;
