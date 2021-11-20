import React from "react";
import "./card.css";
import StarRating from "./StarRating";
function MovieCard({ allMovies }) {
  return (
    <div className="mCard">
      <div style={{ display: "flex" }}>
        <div className="pic">
          <img src={allMovies.url} />
        </div>
        <div className="all">
          <div className="title">{allMovies.title}</div>
          <div className="des">{allMovies.des}</div>
          <div className="rating">
            <StarRating rating={allMovies.rating}  />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
