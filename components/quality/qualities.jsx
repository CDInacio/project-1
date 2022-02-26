import classes from "./qualities.module.css";

const Qualities = () => {
  return (
    <section className={classes.container}>
      <div className={classes.qualities}>
        <h1 className={classes["qualities__text"]}>O que nos diferencia</h1>
        <div className={classes["qualities__item"]}>
          <span>1</span>
          <div className={classes["qualities__description"]}>
            <h3>What is Lorem Ipsum</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className={classes["qualities__item"]}>
          <span>2</span>
          <div className={classes["qualities__description"]}>
            <h3>What is Lorem Ipsum</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className={classes["qualities__item"]}>
          <span>3</span>
          <div className={classes["qualities__description"]}>
            <h3>What is Lorem Ipsum</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualities;
