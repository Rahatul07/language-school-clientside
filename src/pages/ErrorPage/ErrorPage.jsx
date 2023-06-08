import React from "react";
import errorImg from "../../assets/404.png";
import { Link } from "react-router-dom";

const ErrorMessage = () => {
  return (
    <div className="  text-center mt-8 md:mt-12 lg:mt-10 xl:mt-10 2xl:mt-60 mb-20">
      <h1 className="text-5xl font-bold pb-5 text-primary">Oops! 404 Error</h1>
      <p className="text-2xl  font-bold pb-5  text-gray-600">
        The page you are looking for could not be found.
      </p>
      <img className="h-72  mx-auto w-auto" src={errorImg} alt="" />
      <p className="text-lg pb-3 text-gray-600">
        Sorry, but the page you are looking for does not exist or has been
        moved.
      </p>
      <p className="text-lg pb-3 text-gray-600">
        You can go back to the
        <Link to="/" className="text-blue-700 font-medium underline">
          homepage
        </Link>
        or use the navigation menu to find what you are looking for.
      </p>
      <p className="text-lg pb-3 text-gray-600">
        If you believe this is an error, please contact us for assistance.
      </p>
    </div>
  );
};

export default ErrorMessage;
