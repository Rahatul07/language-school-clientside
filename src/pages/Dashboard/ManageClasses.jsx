import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useGetInstructorClass from "../../hooks/useGetInstructorClass";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes, refetch } = useGetInstructorClass("classes");
  console.log("all classes", classes);

  const handleApproveDeny = (id, status) => {
    axiosSecure
      .patch(`classes/${id}`, {
        status: status,
      })
      .then((res) => {
        console.log("status updated", res.data);
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
            {/* Class Image, Class name, Instructor name, Instructor email, Available seats, Price, Status(pending/approved/denied) 3 buttons( Approve, Deny and send feedback). */}

            <th className="text-base">Image</th>
            <th className="text-base">Class Name</th>
            <th className="text-base">Instructor Name</th>
            <th className="text-base">Instructor Email</th>
            <th className="text-base">Available Seats</th>
            <th className="text-base">Price</th>
            <th className="text-base">Status</th>
            <th className="text-base">Actions</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((singleClass) => (
            <tr key={singleClass._id}>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={singleClass?.image} alt="Profile Image" />
                  </div>
                </div>
              </td>
              <td>{singleClass?.name}</td>
              <td>{singleClass?.teacher_name}</td>
              <td>{singleClass?.teacher_email}</td>
              <td>{singleClass?.seats}</td>
              <td className="text-end">${singleClass?.price}</td>
              <td
                className={`${
                  (singleClass?.status === "approved" && "text-green-500") ||
                  (singleClass?.status === "denied" && "text-red-500")
                } font-semibold`}
              >
                {singleClass?.status}
              </td>
              <td className="">
                <button
                  disabled={
                    singleClass?.status === "approved" ||
                    singleClass?.status === "denied"
                  }
                  onClick={() => handleApproveDeny(singleClass._id, "approved")}
                  className="btn btn-secondary btn-xs"
                >
                  Approve
                </button>
              </td>
              <td>
                <button
                  disabled={
                    singleClass?.status === "approved" ||
                    singleClass?.status === "denied"
                  }
                  onClick={() => handleApproveDeny(singleClass._id, "denied")}
                  className="btn btn-primary btn-xs"
                >
                  Deny
                </button>
              </td>
              <td>
                <Link
                  className={`${singleClass?.status !== "denied" && "hidden"}`}
                  to={`/dashboard/feedback/${singleClass._id}`}
                >
                  <button className="btn btn-accent btn-xs">Feedback</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageClasses;
