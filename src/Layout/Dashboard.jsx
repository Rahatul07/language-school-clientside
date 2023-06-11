import { NavLink, Outlet } from "react-router-dom";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GiClassicalKnowledge } from "react-icons/gi";
import { BiPurchaseTag } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { AiOutlineSelect } from "react-icons/ai";
// import useAdmin from "../hooks/useAdmin";
const Dashboard = () => {
  // const [isAdmin] = useAdmin();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open Dashboard
        </label>
      </div>
      <div className="drawer-side bg-primary">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 text-xl text-white gap-3">
          <li>
            <NavLink to="/dashboard/manageClasses">Manage Classes</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manageUsers">Manage Users</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/selectedClasses">
              <AiOutlineSelect /> My Selected Classes
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/enrolledClasses">
              <BiPurchaseTag /> Enrolled Classes
            </NavLink>
          </li>
          {/* {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/manageClasses">Manage Classes</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageUsers">Manage Users</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/selectedClasses">
                  <AiOutlineSelect /> My Selected Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/enrolledClasses">
                  <BiPurchaseTag /> Enrolled Classes
                </NavLink>
              </li>
            </>
          )} */}

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/instructors">
              <FaChalkboardTeacher /> Instructors
            </NavLink>
          </li>
          <li>
            <NavLink to="/allClasses">
              <GiClassicalKnowledge /> Classes
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
