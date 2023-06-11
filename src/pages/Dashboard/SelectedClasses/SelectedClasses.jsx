import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import Swal from "sweetalert2";

import useClasses from "../../../hooks/useClasses";

const SelectedClasses = () => {
  const [classes, refetch] = useClasses();
  console.log(classes);
  // how does reduce work!!!
  // const total = classes.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (type) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/classes/${type._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>Language-School | Selected Classes</title>
      </Helmet>
      <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center ">
        <h3 className="text-3xl text-primary">
          My Selected Classes: {classes.length}
        </h3>

        {/* <Link to="/dashboard/payment">
                    <button className="btn btn-warning btn-sm">PAY</button>
                </Link> */}
      </div>
      <div className="overflow-x-auto w-11/12 mx-auto ">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className=" text-xl">
              <th>#</th>
              <th>Class</th>
              <th>Item Name</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>Pay</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((type, index) => (
              <tr key={type._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={type.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{type.courseName}</td>
                <td>{type.instructorName}</td>
                <td>${type.price}</td>
                <td>
                  <button className="btn btn-ghost bg-primary text-xl text-white">
                    <MdPayment />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(type)}
                    className="btn btn-ghost bg-red-600  text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClasses;
