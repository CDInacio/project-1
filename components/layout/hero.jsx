import classes from "./hero.module.css";
import Menu from "../menu/menu";

const Hero = () => {
  return (
    <section className={classes.image}>
      <div className={classes["section__image"]} />
      <h1 className={classes["section__text"]}>Quitandas da Ana Mares</h1>
      <Menu />
    </section>
  );
};

export default Hero;
