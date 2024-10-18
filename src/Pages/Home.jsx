import React from "react";
import Slide from "../Components/Slide";
import FAQ from "../Components/FAQ";
import MainHero from "../Components/MainHero";
import MainHero_1 from "../Components/MainHero_1";
import MainHero_2 from "../Components/MainHero_2";
import MainHero_3 from "../Components/MainHero_3";
import MainHero_4 from "../Components/MainHero_4";
import MainHero_5 from "../Components/MainHero_5";
import Factions from "../Components/Factions";
import Experience from "../Components/Experience";
import Businesses from "../Components/Businesses";
import Jobs from "../Components/Jobs";

const Home = () => {
  return (
    <div>
      <MainHero />
      <MainHero_1 />
      <MainHero_2 />
      <MainHero_3 />
      <MainHero_4 />
      <MainHero_5 />
      <Experience />
      <Factions />
      <Businesses />
      <Jobs />
      <Slide />
      <FAQ />
    </div>
  );
};

export default Home;
