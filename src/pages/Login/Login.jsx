import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [firebaseError, setFirebaseError] = useState("");
  const onSubmit = (data) => {
    setFirebaseError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        Swal.fire({
          position: "center",
          icon: "success",
          title: "User logged in successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => setFirebaseError(error.message));
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200 pt-28">
        <div className=" w-3/4 mx-auto text-center ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold pb-10 text-primary">
              Login now!
            </h1>
          </div>
          <div className="card  w-96 mx-auto shadow-2xl bg-base-100 mb-20">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>

              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  {...register("password", {
                    required: true,
                  })}
                  placeholder="password"
                  className="input input-bordered "
                />
                <button
                  type="button"
                  className=" inset-y-12 right-0 flex items-center px-2 text-gray-500"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                    <AiFillEyeInvisible className="absolute right-5 top-14 " />
                  ) : (
                    <AiFillEye className="absolute right-5 top-14 " />
                  )}
                </button>
                {errors.password?.type === "required" && (
                  <p className="text-red-600 pt-3">Password is required</p>
                )}
                {errors.password?.type === "required" && (
                  <p className="text-red-600 pt-3">Password does not match</p>
                )}
                {firebaseError && (
                  <p className="text-red-600 pt-3">{firebaseError}</p>
                )}
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn  btn-primary text-white"
                  type="submit"
                  value="login"
                />
              </div>
            </form>
            <p>
              <small>
                New here ? Please
                <Link to="/signUp" className="text-blue-600 px-1">
                  register
                </Link>
                first
              </small>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
