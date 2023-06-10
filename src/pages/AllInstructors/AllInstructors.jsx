import React from "react";

import AllInstructorsCard from "../AllInstructorsCard/AllInstructorsCard";
import useAllClasses from "../../hooks/useAllClasses";
import Loader from "../Shared/Loader";

const AllInstructors = () => {
  // const [instructors, setInstructors] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/instructors")
  //     .then((res) => res.json())
  //     .then((data) => setInstructors(data));
  // }, []);
  const { data: instructors, isLoading } = useAllClasses("instructors", 0);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="text-center py-20">
            <h1 className=" text-5xl text-gray-400 hover:text-primary font-bold">
              All The Instructors
            </h1>
            <h1 className="pt-3 text-xl text-primary font-bold">
              Meet the Team
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto mb-28">
            {instructors.map((instructor) => (
              <AllInstructorsCard
                key={instructor._id}
                instructor={instructor}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AllInstructors;
