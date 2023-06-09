import React from "react";
import { GiTeacher } from "react-icons/gi";
import { HiOutlineStar } from "react-icons/hi2";
import { DiCoffeescript } from "react-icons/di";
import { TbAward } from "react-icons/tb";
const Features = () => {
  return (
    <div>
      <div className="text-center py-20">
        <h1 className="text-5xl  text-gray-400 hover:text-primary font-bold">
          Welcome, Folks!
        </h1>
        <h1 className="pt-3 text-xl text-primary font-bold">
          Why Study With Us
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 w-11/12 mx-auto">
        <div className="w-full text-center">
          <div className="mx-auto mb-20 flex flex-col items-center">
            <div className="text-5xl flex items-center justify-center text-center bg-gray-400 h-36 w-36 rounded-full hover:bg-primary   transition-colors duration-300">
              <TbAward className="text-white text-7xl " />
            </div>
            <h1 className="text-2xl font-bold py-5 hover:text-primary">
              Certification
            </h1>
            <small className="text-gray-400">
              Get certification from a respected organization
            </small>
          </div>
        </div>
        <div className="w-full text-center">
          <div className="mx-auto mb-20 flex flex-col items-center">
            <div className="text-5xl flex items-center justify-center text-center bg-gray-400 h-36 w-36 rounded-full hover:bg-primary   transition-colors duration-300">
              <GiTeacher className="text-white text-7xl " />
            </div>
            <h1 className="text-2xl font-bold py-5 hover:text-primary">
              Teaching Materials
            </h1>
            <small className="text-gray-400">
              Use modern learning materials for over 15 language courses
            </small>
          </div>
        </div>
        <div className="w-full text-center">
          <div className="mx-auto mb-20 flex flex-col items-center">
            <div className="text-5xl flex items-center justify-center text-center bg-gray-400 h-36 w-36 rounded-full hover:bg-primary   transition-colors duration-300">
              <HiOutlineStar className="text-white text-7xl " />
            </div>
            <h1 className="text-2xl font-bold py-5 hover:text-primary">
              Career Upgrade
            </h1>
            <small className="text-gray-400">
              Enhance your professional and academic CV as you travel the world
            </small>
          </div>
        </div>
        <div className="w-full text-center">
          <div className="mx-auto mb-20 flex flex-col items-center">
            <div className="text-5xl flex items-center justify-center text-center bg-gray-400 h-36 w-36 rounded-full hover:bg-primary   transition-colors duration-300">
              <DiCoffeescript className="text-white text-7xl " />
            </div>
            <h1 className="text-2xl font-bold py-5 hover:text-primary">
              Sup Accommodation
            </h1>
            <small className="text-gray-400">
              Over 100 rooms in premium residences and welcoming homestays
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
