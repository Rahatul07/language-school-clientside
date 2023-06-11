import React from "react";

import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
const InstructorCard = ({ instructor }) => {
  const { image, instructorName } = instructor;

  return (
    <div data-aos="flip-left" data-aos-easing="linear" data-aos-duration="1500">
      <div className="grid grid-cols-3 w-10/12 mx-auto mb-20 gap-10">
        <div className="">
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-full h-72 w-72">
            <div className="h-full  w-auto ">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 "
                src={image}
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 -mb-10">
              <h1 className="font-dmserif text-2xl text-primary font-bold uppercase    animate-bounce">
                {instructorName}
              </h1>

              <div className="card-actions inline-flex items-center  justify-between">
                <button className="rounded-none  py-1 mb-3 px-3.5    text-primary text-4xl   flex gap-5">
                  <BsFacebook />
                  <BsLinkedin />
                  <BsInstagram />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
