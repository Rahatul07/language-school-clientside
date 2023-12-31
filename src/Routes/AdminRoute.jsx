import { useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loader from "../pages/Shared/Loader";
import useRole from "../hooks/useRole";

const AdminRoute = ({ children }) => {
  const { logOut } = useContext(AuthContext);
  const { role, roleLoading } = useRole();
  const navigate = useNavigate();

  if (roleLoading) {
    return <Loader />;
  }

  if (role === "admin") {
    return children;
  }
  logOut();
  navigate("/login");
};

export default AdminRoute;
