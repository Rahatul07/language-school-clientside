import React, { useEffect, useState } from "react";
import "swiper/css";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css/navigation";
import { Parallax } from "react-parallax";
import img from "../../../assets/02.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <Parallax
      bgImage={img}
      className="mb-20 h-full"
      blur={{ min: -15, max: 15 }}
      renderLayer={() => (
        <div
          style={{
            position: "absolute",
          }}
        />
      )}
    >
      <div>
        <div className="hero w-full h-[500px] ">
          <div className="hero-overlay bg-opacity-30"></div>
          <div className=" text-center text-neutral-content  w-11/12 ">
            <div className=" bg-black h-96 md:w-full bg-opacity-30 px-10   py-1 md:py-10">
              <h1 className="mb-5 uppercase text-5xl font-bold text-gray-300">
                Testimonials
              </h1>
              <p className="mb-5 text-gray-300">Clients Say</p>
              <Carousel
                autoPlay={true}
                interval={3000}
                infiniteLoop={true}
                transitionTime={500}
              >
                {reviews.map((review) => (
                  <div key={review._id}>
                    <div className="text-center flex flex-col items-center text-xl  md:w-full  mx-auto">
                      <FaQuoteLeft className="text-2xl text-gray-300 my-5" />
                      <p className="text-gray-300">{review.details}</p>
                      <p className="text-primary text-2xl uppercase mt-2 mb-20">
                        {review.name}
                      </p>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Testimonials;
