import React, { useEffect, useState } from "react";
import ClassesCard from "../ClassesCard/ClassesCard";
import { Link } from "react-router-dom";

const Classes = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("https://language-school-server.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  const [showAll, setShowAll] = useState(false);
  const handleShowAll = () => {
    setShowAll(true);
  };
  return (
    <div>
      <div className="text-center py-20">
        <h1 className=" text-5xl text-gray-400 hover:text-primary font-bold">
          Popular Courses
        </h1>
        <h1 className="pt-3 text-xl text-primary font-bold">
          for you to choose
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto mb-16">
        {courses &&
          courses
            .slice(0, showAll ? 12 : 6)
            .map((course) => <ClassesCard key={course._id} course={course} />)}
      </div>
      <div className="  flex justify-center mb-5">
        <Link to={`/allClasses`}>
          <button
            onClick={handleShowAll}
            className="btn btn-primary text-white"
          >
            Show All Classes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Classes;
