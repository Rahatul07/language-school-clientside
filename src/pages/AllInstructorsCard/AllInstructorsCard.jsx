import React from "react";
import { AiFillStar } from "react-icons/ai";
const AllInstructorsCard = ({ instructor }) => {
  const { className, image, email, instructorName, takenClasses } = instructor;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="course" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{instructorName}</h2>
          <p>
            <strong>Class Name:</strong> {className}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>

          <p>
            <strong>Total Classes:</strong> {takenClasses}
          </p>
          <div className="flex items-center">
            <h1 className="text-gray-600 mr-2">5.0</h1>
            <div className="flex">
              <AiFillStar className="text-warning text-xl" />
              <AiFillStar className="text-warning text-xl" />
              <AiFillStar className="text-warning text-xl" />
              <AiFillStar className="text-warning text-xl" />
              <AiFillStar className="text-warning text-xl" />
            </div>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary text-white">Purchase</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInstructorsCard;
