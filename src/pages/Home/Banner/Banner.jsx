import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/carousel/01.png";
import img2 from "../../../assets/carousel/02.png";
import img3 from "../../../assets/carousel/03.png";
import img4 from "../../../assets/carousel/04.png";
import img5 from "../../../assets/carousel/05.png";
import img6 from "../../../assets/carousel/06.png";
import "./Banner.css"; // Import the custom CSS file

const Banner = () => {
  const [focusedIndex, setFocusedIndex] = React.useState(null);

  return (
    <Carousel
      className="text-center"
      autoPlay={true}
      interval={3000}
      infiniteLoop={true}
      transitionTime={500}
      onFocusItem={(index) => setFocusedIndex(index)}
      onBlur={() => setFocusedIndex(null)}
    >
      <div className={`carousel-item ${focusedIndex === 0 ? "focused" : ""}`}>
        <img src={img1} alt="Slide 1" />
      </div>
      <div className={`carousel-item ${focusedIndex === 1 ? "focused" : ""}`}>
        <img src={img2} alt="Slide 2" />
      </div>
      <div className={`carousel-item ${focusedIndex === 2 ? "focused" : ""}`}>
        <img src={img3} alt="Slide 3" />
      </div>
      <div className={`carousel-item ${focusedIndex === 3 ? "focused" : ""}`}>
        <img src={img4} alt="Slide 4" />
      </div>
      <div className={`carousel-item ${focusedIndex === 4 ? "focused" : ""}`}>
        <img src={img5} alt="Slide 5" />
      </div>
      <div className={`carousel-item ${focusedIndex === 5 ? "focused" : ""}`}>
        <img src={img6} alt="Slide 6" />
      </div>
    </Carousel>
  );
};

export default Banner;
