import React from "react";

import Classes from "../Classes/Classes";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import FeaturedInstructors from "../FeaturedInstructors/FeaturedInstructors";

const Home = () => {
  return (
    <>
      <Banner />
      <Features />
      <Classes />
      <FeaturedInstructors />
    </>
  );
};

export default Home;
