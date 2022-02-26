import Head from "next/head";

import MainNavigation from "../components/layout/main-navigation";
import Hero from "../components/layout/hero";
import AboutUs from "../components/about/about-us";
import Products from "../components/products/products";
import Qualities from "../components/quality/qualities";
import Footer from "../components/footer/footer";

const Home = ({ documents }) => {
  return (
    <main>
      <Head>
        <title>Quitandas da Ana Mares</title>
        <meta title="description" content="quitandas artesanais" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainNavigation />
      <Hero />
      <Products products={documents} />
      <Qualities />
      <AboutUs />
      <Footer />
    </main>
  );
};


export default Home;
