import React from "react";
import { Parallax } from "react-parallax";
import img from "../../../assets/01.jpg";
import { Link } from "react-router-dom";
const ResourcesCenter = () => {
  return (
    <Parallax
      bgImage={img}
      className="mb-20"
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
          <div className="hero-content text-center text-neutral-content  ">
            <div className=" bg-black h-96 md:w-11/12 bg-opacity-30 px-10 flex-row items-center justify-center py-10 md:py-28">
              <h1 className="mb-5 uppercase text-5xl font-bold text-gray-300">
                Visit Our Language Resources Centre
              </h1>
              <p className="mb-5 text-gray-300">
                State-of-the-art language learning facilities and online
                resources
              </p>
              <Link to={`/allClasses`}>
                <button className="btn btn-primary w-36 text-white ">
                  Visit Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default ResourcesCenter;
