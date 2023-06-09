import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const ClassesCard = ({ course }) => {
  const { courseName, image, availableSeats, totalStudents } = course;

  const [seats, setSeats] = useState(availableSeats);
  const [students, setStudents] = useState(totalStudents);
  const [isSoldOut, setIsSoldOut] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => {
    if (!isSelected && seats > 0) {
      setSeats(seats - 1);
      setStudents(students + 1);
      setIsSelected(true);
      if (seats === 1) {
        setIsSoldOut(true);
      }
    }
  };

  return (
    <div>
      <div
        className={`card w-96 bg-base-100 shadow-xl ${
          isSoldOut ? "bg-red-500" : ""
        }`}
      >
        <figure>
          <img src={image} alt="course" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{courseName}</h2>

          <p>
            <strong>Total Students:</strong> {students}
          </p>
          <p>
            <strong>Available Seats:</strong> {seats}
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
            {seats > 0 ? (
              <button
                className="btn btn-primary text-white"
                onClick={handleSelect}
                disabled={isSoldOut || isSelected}
              >
                {isSelected ? "Selected" : "Select"}
              </button>
            ) : (
              <button className="btn btn-disabled" disabled>
                Sold Out
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
