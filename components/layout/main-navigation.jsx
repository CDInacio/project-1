import Link from "next/link";

import { BsList, BsXLg } from "react-icons/bs";

import classes from "./main-navigation.module.css";

const MainNavigation = () => {
  const openSidenavHandler = () => {
    document.getElementById("sidenav").style.width = "250px";
  };

  const hideSidenavHandler = () => {
    document.getElementById("sidenav").style.width = "0px";
  };

  return (
    <nav>
      <ul className={classes.menu}>
        <li className={classes["menu__item"]}>
          <a className={classes["menu__link"]}>
            <Link href="#about">Sobre nós</Link>
          </a>
        </li>

        <li className={classes["menu__item"]}>
          <a className={classes["menu__link"]}>
            {" "}
            <Link href="#products">Produtos</Link>
          </a>
        </li>
        <li className={classes["menu__item"]}>
          <a className={classes["menu__link"]}>
            <Link href="#contact">Contato</Link>
          </a>
        </li>
      </ul>
      <div className={classes["menu__sidenavbtn"]}>
        <BsList
          style={{ cursor: "pointer" }}
          onClick={openSidenavHandler}
          color="aa6122"
          size={35}
        />
      </div>
      <div id="sidenav" className={classes["menu__sidenav"]}>
        <span className="closebtn">
          <BsXLg
            size={30}
            style={{
              marginLeft: "13%",
              marginBottom: "10%",
              cursor: "pointer",
            }}
            onClick={hideSidenavHandler}
          />
        </span>
        <Link href="#about">Sobre nós</Link>
        <Link href="#products">Produtos</Link>
        <Link href="#contact">Contato</Link>
      </div>
    </nav>
  );
};

export default MainNavigation;
