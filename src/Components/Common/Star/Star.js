import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import "./star.css";
const Star = ({ ratingPoint }) => {
  // console.log(ratingPoint);
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {ratingPoint >= index + 1 ? (
          <FaStar className="start-color" />
        ) : ratingPoint >= number ? (
          <FaStarHalfAlt className="start-color" />
        ) : (
          <AiOutlineStar className="start-color" />
        )}
      </span>
    );
  });
  return (
    <div>
      {ratingPoint == "NaN" ? (
        <span className="text-[0.8rem]">no reviews</span>
      ) : (
        <div className="rating-point">{ratingStar}</div>
      )}
    </div>
  );
};

export default Star;
