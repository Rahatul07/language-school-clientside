import React, { useEffect, useState } from "react";
import InstructorCard from "../InstructorCard/InstructorCard";

const FeaturedInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);

  return (
    <div className="">
      <div className="text-center py-20">
        <h1 className=" text-5xl text-gray-400 hover:text-primary font-bold">
          Featured Instructors
        </h1>
        <h1 className="pt-3 text-xl text-primary font-bold">Meet the Team</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto">
        {" "}
        {instructors.map((instructor) => (
          <InstructorCard key={instructor._id} instructor={instructor} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedInstructors;
