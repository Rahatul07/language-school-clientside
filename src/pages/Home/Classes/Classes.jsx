import React from "react";
import ClassesCard from "../ClassesCard/ClassesCard";

import useAllClasses from "../../../hooks/useAllClasses";
import Loader from "../../Shared/Loader";

const Classes = () => {
  const { data: classes, isLoading } = useAllClasses("classes", 6);
  // const [courses, setCourses] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/classes")
  //     .then((res) => res.json())
  //     .then((data) => setCourses(data));
  // }, []);
  // const [showAll, setShowAll] = useState(false);
  // const handleShowAll = () => {
  //   setShowAll(true);
  // };
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="text-center py-20">
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
