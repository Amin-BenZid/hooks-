import React, { useState } from "react";
import "./card.css";
import StarRating from "./StarRating";
const Filter = ({ ratingMovies, rating, handleChange }) => {
  return (
    <div className="navbar">
      <input
        onChange={(event) => {
          handleChange(event.target.value);
        }}
        type="text"
        placeholder="search..."
        style={{
          border: "2px solid #4e66f3",
          borderRadius: "5px",
          marginLeft: "300px",
          marginTop: "40px",
          width: "400px",
          textAlign: "center",
          padding: "5px",
          fontSize: "17px",
        }}
      ></input>
      <div className="stars">
        <StarRating rating={rating} ratingMovies={ratingMovies} />
      </div>
    </div>
  );
};

export default Filter;
