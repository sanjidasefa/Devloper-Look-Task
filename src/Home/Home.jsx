import React from "react";
import HomeHero from "./HomeComponents/HomeHero";
import PartnerSection from "./HomeComponents/PartnerSection";
import FeatureWork from "./HomeComponents/FeatureWork";
import Service from "./HomeComponents/Service";
import Leagacy from "./HomeComponents/Leagacy";
import Marque from "./HomeComponents/Marque";
import Thaught from "./HomeComponents/Thaught";
import Footer from "./shared/Footer";
import '../index.css'
import ExtraSection from "./HomeComponents/ExtraSection";

const Home = () => {
  return (
    <div>
      <HomeHero></HomeHero>
      <PartnerSection />
      <FeatureWork></FeatureWork>
      <Service></Service>
      <Marque></Marque>
      <Leagacy></Leagacy>
      <Thaught></Thaught>
      <ExtraSection></ExtraSection>
      <Footer></Footer>
    </div>
  );
};

export default Home;

