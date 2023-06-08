import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { AuthContext } from "../../../provider/AuthProvider";
import logo from "../../../assets/logo.png";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>

      {user ? (
        <>
          <button onClick={handleLogOut} className="btn btn-ghost">
            LogOut
          </button>
          <li>
            <Link to={"/dashboard"}>
              <button>Dashboard</button>
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signUp">Sign Up</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-base-100 border-2 text-black">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </label>
            <ul
              tabIndex={0}
              className={`menu menu-compact dropdown-content  mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-warning text-2xl ${
                isOpen || "hidden"
              }`}
            >
              {navOptions}
            </ul>
          </div>
          <img src={logo} className="h-20 w-44" alt="logo" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-2xl  items-center">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
