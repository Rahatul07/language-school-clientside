import { useContext } from "react";

import { AuthContext } from "../../provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import InstructorClassRow from "../../components/InstructorClassRow";
import { useQuery } from "@tanstack/react-query";

const MyClasses = () => {
  const { user, isLoading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { data: classes = [], refetch } = useQuery({
    queryKey: ["selectedItems", user?.email],
    enabled: !isLoading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/classes/${user?.email}`);
      const data = res.data;
      console.log("myClasses data", classes);
      return data;
    },
  });
  return (
    <div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="border-spacing-3 border-secondary border-b">
                <th className="text-base">Image</th>
                <th className="text-base">Name</th>
                <th className="text-base">Available Seats</th>
                <th className="text-base">Price</th>
                <th className="text-base">Status</th>
                <th className="text-base">Feedback</th>
                <th className="text-base">Enrolled</th>
                <th className="text-base">Actions</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((singleClass) => (
                <InstructorClassRow
                  key={singleClass._id}
                  singleClass={singleClass}
                  refetch={refetch}
                ></InstructorClassRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyClasses;
