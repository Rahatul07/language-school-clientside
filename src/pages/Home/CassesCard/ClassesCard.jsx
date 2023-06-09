import React from "react";
import { AiFillStar } from "react-icons/ai";
const ClassesCard = ({ course }) => {
  console.log(course);
  const { courseName, image, instructorName, price, totalStudents } = course;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="course" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{courseName}</h2>
          <p>
            <strong>Instructor:</strong> {instructorName}
          </p>
          <p>
            <strong>Price:</strong> ${price}
          </p>
          <p>
            <strong>Total Students:</strong> {totalStudents}
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
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
