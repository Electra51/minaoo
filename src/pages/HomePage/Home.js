import React from "react";
import Banner from "./Banner/Banner";
import Discountsection from "./DiscountFeaturedSection/Discountsection";
import ProductBenefit from "./ProductBenefit/ProductBenefit";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <Discountsection />
      <ProductBenefit />
      <Footer />
    </div>
  );
};

export default Home;
