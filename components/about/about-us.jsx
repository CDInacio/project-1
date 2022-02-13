import classes from "./about.module.css";

const AboutUs = () => {
  return (
    <div className={classes.container}>
      <section className={classes.about}>
        <div className={classes["about__text"]}>
          <img className={classes["about__icon"]} src="/icon/trigo.png" />
          <h1>Nossa história</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </span>
        </div>
        <div className={classes["about__image"]}>
          <img src="/images/about2.jpg" />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
