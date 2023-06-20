import { Navigate, useLocation } from "react-router";
import Loader from "../pages/Shared/Loader";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const PrivetRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  const location = useLocation();

  if (isLoading) {
    return <Loader />;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivetRoute;
