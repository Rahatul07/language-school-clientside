import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Loader from "../pages/Shared/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loader />;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/logIn" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
