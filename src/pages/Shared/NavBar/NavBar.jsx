import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { AuthContext } from "../../../provider/AuthProvider";
import logo from "../../../assets/logo.png";
import profileImage from "../../../assets/profile/profile.jpg";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const { user, logOut, userRole } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link
          to="/"
          aria-label="Home"
          title="Home"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          to="/instructors"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Instructors
        </Link>
      </li>

      <li>
        <Link
          to="/allClasses"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Classes
        </Link>
      </li>
      {user && (
        <li>
          <Link
            to={`${
              (userRole === "student" && "/dashboard/my_selected_class") ||
              (userRole === "admin" && "/dashboard/manage_classes") ||
              (userRole === "teacher" && "/dashboard/my_classes")
            }`}
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Dashboard
          </Link>
        </li>
      )}
    </>
  );

  return (
    <>
      <div className="navbar fixed  z-10 border-b-2 border-primary max-w-screen-2xl bg-base-100  text-black">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost  lg:hidden">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </label>
            <ul
              tabIndex={0}
              className={`menu menu-compact dropdown-content  mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-gray-600 text-2xl ${
                isOpen || "hidden"
              }`}
            >
              <div className="space-y-5">
                {user && (
                  <img
                    className="w-12 h-12 rounded-full mx-auto mt-5 border-2 border-primary"
                    src={user && user.photoURL ? user.photoURL : profileImage}
                  />
                )}
                {navOptions}
                {/* login logout button  */}
                {user ? (
                  <button
                    onClick={handleLogOut}
                    className="btn btn-error text-white"
                  >
                    LogOut
                  </button>
                ) : (
                  <Link to="/login">
                    {" "}
                    <button className="btn btn-neutral">Login</button>
                  </Link>
                )}
              </div>
            </ul>
          </div>
          <img src={logo} className="h-16 w-48" alt="logo" />
        </div>
        <div className="hidden md:flex space-x-5 mr-20">
          <ul className="menu menu-horizontal px-1 text-2xl  items-center">
            <div className="flex justify-between items-center ">
              <ul className="hidden md:flex gap-5">{navOptions}</ul>

              <div className="hidden md:flex space-x-5">
                {user && (
                  <img
                    className="w-12 h-12 rounded-full ml-10"
                    src={user && user.photoURL ? user.photoURL : profileImage}
                  />
                )}
                {user ? (
                  <button
                    onClick={handleLogOut}
                    className="btn btn-error text-white"
                  >
                    LogOut
                  </button>
                ) : (
                  <Link to="/login">
                    <button className="btn btn-neutral">Login</button>
                  </Link>
                )}
              </div>

              <div onClick={() => setOpen(!isOpen)} className="md:hidden">
                <Hamburger hideOutline={false} />
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
