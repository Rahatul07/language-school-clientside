import ClassCard from "../components/ClassCard";
import useGetInstructorClass from "../hooks/useGetInstructorClass";
import Loader from "./Shared/Loader";

const Classes = () => {
  const { data: classes, isLoading } = useGetInstructorClass("classes");
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-20">
            {classes.map((singleClass) => (
              <ClassCard
                key={singleClass._id}
                singleClass={singleClass}
              ></ClassCard>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Classes;
