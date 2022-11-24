import React from "react";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import HeroPage from "../HeroPage/HeroPage";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HeroPage></HeroPage>
      <Categories></Categories>
    </div>
  );
};

export default Home;
