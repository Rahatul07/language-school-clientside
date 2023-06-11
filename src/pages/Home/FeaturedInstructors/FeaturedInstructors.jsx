import React from "react";
import InstructorCard from "../InstructorCard/InstructorCard";
import useAllClasses from "../../../hooks/useAllClasses";
import Loader from "../../Shared/Loader";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
AOS.init({
  disable: false,
  startEvent: "DOMContentLoaded",
  initClassName: "aos-init",
  animatedClassName: "aos-animate",
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,
  offset: 120,
  delay: 0,
  duration: 400,
  easing: "ease",
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom",
});
AOS.refresh();
const FeaturedInstructors = () => {
  const { data: instructors, isLoading } = useAllClasses("instructors", 6);
  return (
    <div className="">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div
            className="text-center py-20"
            data-aos="zoom-in-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <h1 className=" text-5xl text-gray-400 hover:text-primary font-bold">
              Featured Instructors
            </h1>
            <h1 className="pt-3 text-xl text-primary font-bold">
              Meet the Team
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto">
            {instructors.map((instructor) => (
              <InstructorCard key={instructor._id} instructor={instructor} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default FeaturedInstructors;
