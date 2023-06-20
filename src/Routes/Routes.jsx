import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorMessage from "../pages/ErrorPage/ErrorMessage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Instructors from "../pages/Instructors";
import Classes from "../pages/Classes";
import PrivetRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import StudentRoute from "./StudentRoute";
import SelectedClass from "../pages/Dashboard/SelectedClass";
import EnrolledClass from "../pages/Dashboard/EnrolledClass";
import Payment from "../pages/Dashboard/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory";
import AddClass from "../pages/Dashboard/AddClass";
import InstructorRoute from "./InstructorRoute";
import MyClasses from "../pages/Dashboard/MyClasses";
import UpdateMyClass from "../pages/Dashboard/UpdateMyClass";
import AdminRoute from "./AdminRoute";
import ManageStudents from "../pages/Dashboard/ManageStudents";
import ManageClasses from "../pages/Dashboard/ManageClasses";
import Feedback from "../pages/Dashboard/Feedback";

const router = createBrowserRouter([
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
        path: "login",
        element: <Login />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
      {
        path: "instructors",
        element: <Instructors />,
      },
      {
        path: "classes",
        element: <Classes />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivetRoute>
        <Dashboard></Dashboard>
      </PrivetRoute>
    ),
    errorElement: <ErrorMessage />,
    children: [
      // student routes
      {
        path: "my_selected_class",
        element: (
          <StudentRoute>
            <SelectedClass></SelectedClass>
          </StudentRoute>
        ),
      },
      {
        path: "my_enrolled_class",
        element: (
          <StudentRoute>
            <EnrolledClass />
          </StudentRoute>
        ),
      },
      {
        path: "payment/:id",
        element: (
          <StudentRoute>
            <Payment></Payment>
          </StudentRoute>
        ),
      },
      {
        path: "payment_history",
        element: (
          <StudentRoute>
            <PaymentHistory></PaymentHistory>
          </StudentRoute>
        ),
      },
      // teacher routes
      {
        path: "add_a_class",
        element: (
          <InstructorRoute>
            <AddClass></AddClass>
          </InstructorRoute>
        ),
      },
      {
        path: "my_classes",
        element: (
          <InstructorRoute>
            <MyClasses></MyClasses>
          </InstructorRoute>
        ),
      },
      {
        path: "update/:id",
        element: (
          <InstructorRoute>
            <UpdateMyClass></UpdateMyClass>
          </InstructorRoute>
        ),
      },

      // Admin routes
      {
        path: "manage_students",
        element: (
          <AdminRoute>
            <ManageStudents></ManageStudents>
          </AdminRoute>
        ),
      },
      {
        path: "manage_classes",
        element: (
          <AdminRoute>
            <ManageClasses></ManageClasses>
          </AdminRoute>
        ),
      },
      {
        path: "feedback/:id",
        element: (
          <AdminRoute>
            <Feedback></Feedback>
          </AdminRoute>
        ),
      },
    ],
  },
]);
export default router;
