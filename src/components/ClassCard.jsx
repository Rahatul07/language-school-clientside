import { Link, useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
// ..
AOS.init();

const ClassCard = ({ singleClass }) => {
  const [axiosSecure] = useAxiosSecure();
  const { user, userRole } = useContext(AuthContext);
  const navigate = useNavigate();
  const { image, name, price, seats, instructorName, enrolled } =
    singleClass || {};
  console.log("role from select card", userRole);
  const handleSelectClass = (singleClass) => {
    const { image, name, price, instructor_email, _id, seats, enrolled } =
      singleClass || {};
    const selectItem = {
      name,
      image,
      price,
      classId: _id,
      email: user?.email,
      instructor_email,
      instructorName,
      seats,
      enrolled,
      status: "unpaid",
    };
    console.log(selectItem);

    axiosSecure
      .post("/select_classes", {
        ...selectItem,
      })
      .then((res) => {
        if (res?.data?.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Selection successful ",
            showConfirmButton: false,
            timer: 1000,
          });
          navigate("/dashboard/my_selected_class");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div data-aos="fade-down" className="card border relative mt-20">
      <img src={image} className="h-[220px]" alt="" />
      <div className="p-5 py-8">
        <h3 className="text-3xl font-semibold text-center">{name}</h3>
        <p className="text-md text-center text-primary">{instructorName}</p>
        <div className="flex justify-between my-3 w-3/4 mx-auto">
          <div className="text-center bg-primary bg-opacity-10 pr-5   pl-5 py-3">
            <p className="font-bold text-2xl text-secondary">{enrolled || 0}</p>
            <p className="text-md text-slate-500">Enrolled</p>
          </div>
          <div className="text-center bg-primary bg-opacity-10 pr-5   border-l-2 border-primary pl-5 py-3">
            <p className="font-bold text-2xl text-secondary">{seats}</p>
            <p className="text-md text-slate-500">Available</p>
          </div>
          <div className="text-center bg-primary bg-opacity-10 pr-5    border-l-2 border-primary pl-5 py-3">
            <p className="font-bold text-2xl text-secondary">${price}</p>
            <p className="text-md text-slate-500">Price</p>
          </div>
        </div>

        {user ? (
          <button
            disabled={
              userRole === "admin" || userRole === "teacher" || seats < 1
            }
            onClick={() => handleSelectClass(singleClass)}
            className="btn btn-primary rounded-full w-full mt-5"
          >
            Select
          </button>
        ) : (
          <Link to="/login">
            <button className="btn btn-primary rounded-full w-full mt-5">
              Select
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ClassCard;
