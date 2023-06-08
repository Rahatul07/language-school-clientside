import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
]);
