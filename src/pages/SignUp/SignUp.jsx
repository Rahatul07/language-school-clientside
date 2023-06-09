import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile, logOut, setLoading } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      logOut();
      navigate("/login");
      console.log(loggedUser);
      setLoading(true);

      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const saveUser = {
            name: data.name,
            email: data.email,
          };
          fetch("https://language-school-server.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "User created successfully.",
                  showConfirmButton: false,
                  timer: 1500,
                });
                setLoading(false);
              }
            });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200 pt-28">
        <div className=" w-3/4 mx-auto text-center ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold pb-10">Sign up now!</h1>
          </div>
          <div className="card  w-96 mx-auto shadow-2xl bg-base-100 mb-20">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>
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
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                  })}
                  placeholder="password"
                  className="input input-bordered "
                />
                <button
                  type="button"
                  className="absolute inset-y-12 right-0 flex items-center px-2 text-gray-500"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                    <AiFillEyeInvisible className="h-5 w-5 mt-7" />
                  ) : (
                    <AiFillEye className="h-5 w-5 mt-7" />
                  )}
                </button>
                {errors.password?.type === "required" && (
                  <p className="text-red-600 pt-3">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600 pt-3">
                    Password must be 6 characters
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600 pt-3">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600 pt-3">
                    Password must have one Uppercase and one special character.
                  </p>
                )}
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) => value === watch("password"),
                  })}
                  placeholder="Confirm password"
                  className="input input-bordered"
                />
                <button
                  type="button"
                  className="absolute inset-y-12 right-0 flex items-center px-2 bg-primary text-gray-500"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                    <AiFillEyeInvisible className="h-5 w-5 mt-7" />
                  ) : (
                    <AiFillEye className="h-5 w-5 mt-7" />
                  )}
                </button>
                {errors.confirmPassword?.type === "required" && (
                  <p className="text-red-600">Confirm Password is required</p>
                )}
                {errors.confirmPassword?.type === "validate" && (
                  <p className="text-red-600 pt-3">Passwords do not match</p>
                )}
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p>
              <small>
                Already have an account{" "}
                <Link to="/login" className="text-blue-600">
                  Login
                </Link>
              </small>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
