import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import useRole from "../hooks/useRole";
import Loader from "../pages/Shared/Loader";

const StudentRoute = ({ children }) => {
  const { logOut } = useContext(AuthContext);
  const { role, roleLoading } = useRole();
  const navigate = useNavigate();

  if (roleLoading) {
    return <Loader />;
  }

  if (role === "student") {
    return children;
  }
  logOut();
  navigate("/login");
};

export default StudentRoute;
