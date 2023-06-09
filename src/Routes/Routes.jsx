import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home/Home";
import Login from "../../src/pages/Login/Login";
import ErrorMessage from "../pages/ErrorPage/ErrorPage";
import Dashboard from "../Layout/Dashboard";
import AllClasses from "../pages/AllClasses/AllClasses";
import AllInstructors from "../pages/AllInstructors/AllInstructors";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorMessage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/allClasses",
        element: <AllClasses />,
      },
      {
        path: "/instructors",
        element: <AllInstructors />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
