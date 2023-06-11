import React from "react";

import Classes from "../Classes/Classes";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import FeaturedInstructors from "../FeaturedInstructors/FeaturedInstructors";
import { Helmet } from "react-helmet-async";
import ResourcesCenter from "../ResourcesCenter/ResourcesCenter";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Language-School | Home</title>
      </Helmet>
      <Banner />
      <Features />
      <Classes />
      <Testimonials />
      <FeaturedInstructors />
      <ResourcesCenter />
    </>
  );
};

export default Home;
