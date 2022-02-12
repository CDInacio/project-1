import { MdOutlineMenuBook } from "react-icons/md";

import classes from "./menu.module.css";

const Menu = () => {
  return (
    <section className={classes.menu}>
      <div className={classes["menu__head"]}>
        <MdOutlineMenuBook size={40} />
        <h1>Nosso Menu</h1>
      </div>
      <div className={classes["menu__item1"]}>
        <h3 className={classes["menu__title"]}>Doces</h3>
        <p className={classes["menu__subtitle"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco
        </p>
        <img className={classes["menu__image"]} src="/images/meal/meal.jpg" />
      </div>
      <div className={classes["menu__item2"]}>
        <h3 className={classes["menu__title"]}>Massas</h3>
        <p className={classes["menu__subtitle"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco
        </p>
        <img className={classes["menu__image"]} src="/images/meal/meal.jpg" />
      </div>
      <div className={classes["menu__item3"]}>
        <h3 className={classes["menu__title"]}>Salgados</h3>
        <p className={classes["menu__subtitle"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco
        </p>
        <img className={classes["menu__image"]} src="/images/meal/meal.jpg" />
      </div>
    </section>
  );
};

export default Menu;
