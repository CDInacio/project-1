import Head from "next/head";

import MainNavigation from "../components/layout/main-navigation";
import Hero from "../components/layout/hero";
import Menu from "../components/menu/menu";
import AboutUs from "../components/about/about-us";
import Products from "../components/products/products";

const Home = ({ documents }) => {
  return (
    <main>
      <Head>
        <title>Quitandas da Ana Mares</title>
        <meta title="description" content="quitandas artesanais" />
      </Head>
      <MainNavigation />
      <Hero />
      <AboutUs />
      <Products products={documents} />{" "}
    </main>
  );
};

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:3000/api/products", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  return {
    props: {
      documents: data,
    },
  };
};

export default Home;
