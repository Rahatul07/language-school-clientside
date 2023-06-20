import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Loader from "../Shared/Loader";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const EnrolledClass = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { data: enrolledData = [], isLoading } = useQuery({
    queryKey: ["enrolledClasses", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/enrolledClasses/${user?.email}`);
      console.log("enrolled data", res.data);
      return res.data;
    },
  });

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <table className="table">
          {/* head */}
          <thead>
            <tr className="border-spacing-3 border-secondary border-b">
              <th className="text-base">Image</th>
              <th className="text-base">Name</th>
              <th className="text-base">Class Id</th>
              <th className="text-base">Teacher Name</th>
              <th className="text-base">Price</th>
              <th className="text-base">Enrolled Date</th>
              <th className="text-base">Status</th>
            </tr>
          </thead>
          <tbody>
            {enrolledData.map((enroll) => (
              <tr key={enroll._id}>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={enroll?.image} alt="Class Image" />
                    </div>
                  </div>
                </td>
                <td>{enroll?.className}</td>
                <td>{enroll?.classId}</td>
                <td>{enroll?.teacher_name}</td>
                <td>${enroll?.price}</td>
                <td>{moment(enroll?.enrolled_date).format(" Do MMMM YYYY")}</td>
                <td>{enroll?.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EnrolledClass;
