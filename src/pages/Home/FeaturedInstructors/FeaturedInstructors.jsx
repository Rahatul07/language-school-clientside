import React from "react";
import img_url from "../../../assets/class/01.png";

const FeaturedInstructors = () => {
  return (
    <div className="">
      <div className="">
        <div className="text-center py-20">
          <h1 className=" text-5xl text-gray-400 hover:text-primary font-bold">
            Featured Instructors
          </h1>
          <h1 className="pt-3 text-xl text-primary font-bold">Meet the Team</h1>
        </div>
        <div className="grid grid-cols-3 w-10/12 mx-auto mb-20">
          <div className="">
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-full h-72 w-72">
              <div className="h-4/6  w-auto">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={img_url}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-2xl text-primary font-bold uppercase -mb-3  animate-bounce">
                  Name
                </h1>
                <p className="mt-5  text-xl italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Recipes:
                </p>

                <div className="card-actions inline-flex items-center justify-between">
                  <button className="btn btn-primary rounded-none bg-neutral-900 py-1 mb-3 px-3.5 font-com text-sm  text-white shadow uppercase shadow-black/60">
                    View Recipes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedInstructors;
