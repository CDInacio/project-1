import classes from "./main-navigation.module.css";

const MainNavigation = () => {
  return (
    <nav>
      <ul className={classes.menu}>
        <li className={classes["menu__item"]}>
          <a className={classes["menu__link"]}>Home</a>
        </li>
        <li className={classes["menu__item"]}>
          <a className={classes["menu__link"]}>Sobre nós</a>
        </li>
        <li className={classes["menu__item"]}>
          <a className={classes["menu__link"]}>Comprar</a>
        </li>
        <li className={classes["menu__item"]}>
          <a className={classes["menu__link"]}> Produtos</a>
        </li>
        <li className={classes["menu__item"]}>
          <a className={classes["menu__link"]}>Contato</a>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
