import { useContext } from "react";

import { AuthContext } from "../../provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ManageStudents = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users by admin"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      const data = res.data;
      console.log("all users", data);
      return data;
    },
  });

  const handleSetRole = (userEmail, role) => {
    axiosSecure
      .patch(`/users/${userEmail}`, {
        role: role,
        logged_admin: user?.email,
      })
      .then((res) => {
        if (res.data.acknowledged) {
          refetch();
        }
      });
  };

  return (
    <div>
      <table className="table">
        {/* head */}
        <thead>
          <tr className="border-spacing-3 border-secondary border-b">
            <th className="text-base">Image</th>
            <th className="text-base">Name</th>
            <th className="text-base">Email</th>
            <th className="text-base">Role</th>
            <th className="text-base">Make Admin</th>
            <th className="text-base">Make Instructor</th>
          </tr>
        </thead>
        <tbody>
          {users.map((singleUser) => (
            <tr key={singleUser._id}>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={singleUser?.photo} alt="Profile Image" />
                  </div>
                </div>
              </td>
              <td>{singleUser?.name}</td>
              <td>{singleUser?.email}</td>
              <td>{singleUser?.role || "Student"}</td>
              <td>
                <button
                  disabled={singleUser?.role === "admin"}
                  onClick={() => handleSetRole(singleUser?.email, "admin")}
                  className="btn btn-secondary btn-xs"
                >
                  Make Admin
                </button>
              </td>
              <td>
                <button
                  disabled={
                    singleUser?.role === "instructor" ||
                    singleUser?.role === "admin"
                  }
                  onClick={() => handleSetRole(singleUser?.email, "instructor")}
                  className="btn btn-secondary btn-xs"
                >
                  Make Instructor
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageStudents;
