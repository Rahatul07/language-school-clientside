import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router";

import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const UpdateMyClass = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { id } = useParams();
  console.log("id", id);

  const { data: singleClass = [] } = useQuery({
    queryKey: ["class", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myClasses/${id}`);
      const data = res.data;
      console.log("update", data);
      return data;
    },
  });

  const onSubmit = (data) => {
    console.log("for Update", data);

    axiosSecure
      .put(`/classes/${id}`, {
        name: data.name,
        image: data?.image,
        teacher_name: data.teacher_name,
        teacher_email: data.teacher_email,
        seats: parseInt(data.seats),
        price: parseFloat(data.price),
        enrolled: 0,
        status: "pending",
      })
      .then((res) => {
        if (res?.data?.acknowledged) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Update  Successful ",
            showConfirmButton: false,
            timer: 1000,
          });
          reset();
          navigate("/dashboard/my_classes");
        }
      });
  };

  return (
    <div>
      <h3 className="text-center text-2xl font-bold mb-5">Update Class</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          {/* class name  */}
          <input
            className="w-full rounded-lg border-gray-200 p-3 text-sm"
            placeholder="Class Name"
            type="text"
            value={singleClass?.name}
          />

          {/* image  */}
        </div>
        <div className="mb-3">
          <input
            className="w-full rounded-lg border-gray-200 p-3 text-sm"
            placeholder="Name"
            type="text"
            value={singleClass?.image}
            readOnly
          />

          {/* Instructor Name  */}
        </div>
        <div className="mb-3">
          <input
            className="w-full rounded-lg border-gray-200 p-3 text-sm"
            placeholder="Instructor Name"
            type="text"
            value={user?.displayName}
            {...register("instructor_name")}
            readOnly
          />
        </div>

        {/* Instructor email  */}
        <div className="mb-3">
          <input
            className="w-full rounded-lg border-gray-200 p-3 text-sm"
            placeholder="Instructor Email"
            type="email"
            value={user?.email}
            {...register("instructor_email")}
            readOnly
          />
        </div>
        {/* Available seats  */}
        <div className="mb-3">
          <input
            className="w-full rounded-lg border-gray-200 p-3 text-sm"
            placeholder="Available Seats"
            type="number"
            {...register("seats", { required: "Available seat required" })}
          />
          {errors.seats && (
            <p className="text-sm text-red-500">{errors.seats?.message}</p>
          )}
        </div>
        {/* price  */}
        <div className="mb-3">
          <input
            className="w-full rounded-lg border-gray-200 p-3 text-sm"
            placeholder="Price"
            type="number"
            {...register("price", { required: "Price is required" })}
          />
          {errors.price && (
            <p className="text-sm text-red-500">{errors.price?.message}</p>
          )}
        </div>
        <input type="submit" className="btn btn-secondary" />
      </form>
    </div>
  );
};

export default UpdateMyClass;
