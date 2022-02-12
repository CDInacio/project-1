import classes from "./products.module.css";

const Products = ({ products }) => {
  console.log(products);
  return (
    <section>
      {/* <h3 className={classes["section__title"]}>Nossos produtos</h3> */}
      <div className={classes.products}>
        <div className={classes["products__p1"]}>
          <img
            className={classes["products__image"]}
            src={products[1].imageUrl}
          />
        </div>
        <div className={classes["products__p2"]}>
          <img
            className={classes["products__image"]}
            src={products[4].imageUrl}
          />
        </div>
        <div className={classes["products__p3"]}>
          {" "}
          <img
            className={classes["products__image"]}
            src={products[0].imageUrl}
          />
        </div>
        <div className={classes["products__p4"]}>
          <img
            className={classes["products__image"]}
            src={products[2].imageUrl}
          />
        </div>
        <div className={classes["products__p5"]}>
          <img
            className={classes["products__image"]}
            src={products[3].imageUrl}
          />
        </div>
        <div className={classes["products__p6"]}>p6</div>
      </div>
    </section>
  );
};

export default Products;
