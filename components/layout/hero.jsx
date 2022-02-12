import classes from "./hero.module.css";
import Menu from "../menu/menu";

const Hero = () => {
  return (
    <section className={classes.image}>
      <div className={classes["section__image"]} />
      <Menu />
    </section>
  );
};

export default Hero;
