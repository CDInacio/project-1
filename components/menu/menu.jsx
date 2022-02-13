import classes from "./menu.module.css";

const Menu = () => {
  return (
    <section className={classes.menu}>
      <div className={classes["menu__item1"]}>
        <img className={classes["menu__icon"]} src="icon/icon1.png" />
        <h2 className={classes["menu__title"]}>Doces</h2>
        <p className={classes["menu__description"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className={classes["menu__item2"]}>
        <img className={classes["menu__icon"]} src="icon/icon2.png" />
        <h2 className={classes["menu__title"]}>Salgagos</h2>
        <p className={classes["menu__description"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className={classes["menu__item3"]}>
        <img className={classes["menu__icon"]} src="icon/icon3.png" />
        <h2 className={classes["menu__title"]}>Massas</h2>
        <p className={classes["menu__description"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </section>
  );
};

export default Menu;
