import InstructorCard from "../components/InstructorCard";
import useGetInstructorClass from "../hooks/useGetInstructorClass";
import Loader from "./Shared/Loader";

const Instructors = () => {
  const { data: allInstructors, isLoading } =
    useGetInstructorClass("instructors");

  return (
    <div className="mb-20 mx-10 md:mx-20">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1 className=" text-5xl text-gray-400 hover:text-primary font-bold pt-36 text-center">
            All The Instructors
          </h1>
          <h1 className="pt-3 text-xl text-primary font-bold text-center mb-10">
            Meet the Team
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
            {allInstructors.map((instructor) => (
              <InstructorCard
                key={instructor._id}
                instructor={instructor}
              ></InstructorCard>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Instructors;
