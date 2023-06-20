import { FiShoppingCart } from "react-icons/fi";
import { BsBuildingGear, BsCartCheck } from "react-icons/bs";
import { SiGoogleclassroom } from "react-icons/si";
import { FaUsersCog } from "react-icons/fa";

import { BsWallet2 } from "react-icons/bs";
import { MdOutlineLibraryBooks, MdOutlinePostAdd } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";
import { HiOutlineLogout } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const SideMenu = () => {
  const { userRole, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log(logOut);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <ul className="dashboard-links">
        {userRole === "student" && (
          <>
            <li className="mb-3 ">
              <NavLink
                to="/dashboard/my_selected_class"
                className={({ isActive }) =>
                  isActive ? "dashboard_link_active" : "dashboard_link_default"
                }
              >
                <div className="flex items-center">
                  <span className="text-lg text-white pr-3">
                    <FiShoppingCart />
                  </span>{" "}
                  <span>Selected Classes</span>
                </div>
              </NavLink>
            </li>

            <li className="mb-3">
              <NavLink
                to="/dashboard/my_enrolled_class"
                className={({ isActive }) =>
                  isActive ? "dashboard_link_active" : "dashboard_link_default"
                }
              >
                <div className="flex items-center">
                  <span className="text-lg text-white pr-3">
                    <BsCartCheck />
                  </span>{" "}
                  <span> Enrolled Classes</span>
                </div>
              </NavLink>
            </li>

            <li className="mb-3">
              <NavLink
                to="/dashboard/payment_history"
                className={({ isActive }) =>
                  isActive ? "dashboard_link_active" : "dashboard_link_default"
                }
              >
                <div className="flex items-center">
                  <span className="text-lg text-white pr-3">
                    <BsWallet2 />
                  </span>{" "}
                  <span> Payment History</span>
                </div>
              </NavLink>
            </li>
          </>
        )}

        {/* teacher route  */}
        {userRole === "teacher" && (
          <>
            <li className="mb-3">
              <NavLink
                to="/dashboard/add_a_class"
                className={({ isActive }) =>
                  isActive ? "dashboard_link_active" : "dashboard_link_default"
                }
              >
                <div className="flex items-center">
                  <span className="text-lg text-white pr-3">
                    <MdOutlinePostAdd />
                  </span>{" "}
                  <span> Add A Class</span>
                </div>
              </NavLink>
            </li>

            <li className="mb-3">
              <NavLink
                to="/dashboard/my_classes"
                className={({ isActive }) =>
                  isActive ? "dashboard_link_active" : "dashboard_link_default"
                }
              >
                <div className="flex items-center">
                  <span className="text-lg text-white pr-3">
                    <SiGoogleclassroom />
                  </span>{" "}
                  <span> My Classes</span>
                </div>
              </NavLink>
            </li>
          </>
        )}

        {/* admin route  */}
        {userRole === "admin" && (
          <>
            <li className="mb-3 ">
              <NavLink
                to="/dashboard/manage_classes"
                className={({ isActive }) =>
                  isActive ? "dashboard_link_active" : "dashboard_link_default"
                }
              >
                <div className="flex items-center">
                  <span className="text-lg text-white pr-3">
                    <BsBuildingGear />
                  </span>{" "}
                  <span>Manage Classes</span>
                </div>
              </NavLink>
            </li>

            <li className="mb-3">
              <NavLink
                to="/dashboard/manage_students"
                className={({ isActive }) =>
                  isActive ? "dashboard_link_active" : "dashboard_link_default"
                }
              >
                <div className="flex items-center">
                  <span className="text-lg text-white pr-3">
                    <FaUsersCog />
                  </span>{" "}
                  <span>Manage Students</span>
                </div>
              </NavLink>
            </li>
          </>
        )}

        {/* conmmon routes  */}

        <div className="border-b mt-10 border-dashed mb-3"> </div>

        <>
          <li className="mb-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "dashboard_link_active" : "dashboard_link_default"
              }
            >
              <div className="flex items-center">
                <span className="text-lg text-white pr-3">
                  <AiOutlineHome />
                </span>{" "}
                <span> Home</span>
              </div>
            </NavLink>
          </li>

          <li className="mb-3">
            <NavLink
              to="/classes"
              className={({ isActive }) =>
                isActive ? "dashboard_link_active" : "dashboard_link_default"
              }
            >
              <div className="flex items-center">
                <span className="text-lg text-white pr-3">
                  <MdOutlineLibraryBooks />
                </span>{" "}
                <span> Classes</span>
              </div>
            </NavLink>
          </li>
          <li className="mb-3">
            <NavLink
              to="/teachers"
              className={({ isActive }) =>
                isActive ? "dashboard_link_active" : "dashboard_link_default"
              }
            >
              <div className="flex items-center">
                <span className="text-lg text-white pr-3">
                  <GiTeacher />
                </span>{" "}
                <span> Instructors</span>
              </div>
            </NavLink>
          </li>

          {/* logOut button  */}
          <li className="mb-3">
            <label onClick={handleLogOut} className="dashboard_link_default">
              <div className="flex items-center">
                <span className="text-lg text-white pr-3">
                  <HiOutlineLogout />
                </span>{" "}
                <span> LogOut</span>
              </div>
            </label>
          </li>
        </>
      </ul>
    </div>
  );
};

export default SideMenu;
