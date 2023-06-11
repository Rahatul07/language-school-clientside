import React from "react";
import ClassesCard from "../ClassesCard/ClassesCard";
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
const Classes = () => {
  const { data: classes, isLoading } = useAllClasses("classes", 6);

  return (
    <div>
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
              Popular Courses
            </h1>
            <h1 className="pt-3 text-xl text-primary font-bold">
              for you to choose
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto mb-16">
            {classes &&
              classes.map((course) => (
                <ClassesCard key={course._id} course={course} />
              ))}
          </div>
          <div className="  flex justify-center mb-5"></div>
        </>
      )}
    </div>
  );
};

export default Classes;
