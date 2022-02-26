import Image from "next/image";

import classes from "./products.module.css";

const Products = ({ products }) => {
  return (
    <section className={classes.container}>
      <div className={classes["section__titles"]}>
        <h1 id="products" className={classes["section__title"]}>
          Produtos
        </h1>
        <p className={classes["section__subtitle"]}>
          Conheça algumas das nossas quitandas que fazem mais sucesso com os
          clientes
        </p>
      </div>
      <div className={classes.products}>
        <div
          className={`${classes["products__item"]} ${classes["products__one"]}`}
        >
          <Image
            height={150}
            width={150}
            alt="product"
            src="/images/meal/meal.jpg"
            className={classes["products__image"]}
          />
          <h3 className={classes["products__name"]}>Nome do produto</h3>
          <p className={classes["products__description"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div
          className={`${classes["products__item"]} ${classes["products__two"]}`}
        >
          <Image
            height={150}
            width={150}
            alt="product"
            src="/images/meal/meal.jpg"
            className={classes["products__image"]}
          />
          <h3 className={classes["products__name"]}>Nome do produto</h3>
          <p className={classes["products__description"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div
          className={`${classes["products__item"]} ${classes["products__three"]}`}
        >
          <Image
            height={150}
            width={150}
            alt="product"
            src="/images/meal/meal.jpg"
            className={classes["products__image"]}
          />
          <h3 className={classes["products__name"]}>Nome do produto</h3>
          <p className={classes["products__description"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div
          className={`${classes["products__item"]} ${classes["products__four"]}`}
        >
          <Image
            height={150}
            width={150}
            alt="product"
            src="/images/meal/meal.jpg"
            className={classes["products__image"]}
          />
          <h3 className={classes["products__name"]}>Nome do produto</h3>
          <p className={classes["products__description"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div
          className={`${classes["products__item"]} ${classes["products__five"]}`}
        >
          <Image
            height={150}
            width={150}
            alt="product"
            src="/images/meal/meal.jpg"
            className={classes["products__image"]}
          />
          <h3 className={classes["products__name"]}>Nome do produto</h3>
          <p className={classes["products__description"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div
          className={`${classes["products__item"]} ${classes["products__six"]}`}
        >
          <Image
            height={150}
            width={150}
            alt="product"
            src="/images/meal/meal.jpg"
            className={classes["products__image"]}
          />
          <h3 className={classes["products__name"]}>Nome do produto</h3>
          <p className={classes["products__description"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incidiimgdunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className={classes.products}></div>
    </section>
  );
};

export default Products;