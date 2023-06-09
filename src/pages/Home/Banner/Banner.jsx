import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/carousel/01.png";
import img2 from "../../../assets/carousel/02.png";
import img3 from "../../../assets/carousel/03.png";
import img4 from "../../../assets/carousel/04.png";
import img5 from "../../../assets/carousel/05.png";
import img6 from "../../../assets/carousel/06.png";

const Banner = () => {
  return (
    <Carousel
      className="text-center"
      autoPlay={true}
      interval={3000}
      infiniteLoop={true}
      transitionTime={500}
    >
      <div>
        <img src={img1} />
      </div>
      <div>
        <img src={img2} />
      </div>
      <div>
        <img src={img3} />
      </div>
      <div>
        <img src={img4} />
      </div>
      <div>
        <img src={img5} />
      </div>
      <div>
        <img src={img6} />
      </div>
    </Carousel>
  );
};

export default Banner;
