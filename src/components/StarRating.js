import { useState } from "react";
import StarRatingComponent from "react-star-rating-component";
const StarRating = ({ ratingMovies, rating }) => {
  const onStarClick = (nextValue) => {
    ratingMovies && ratingMovies(nextValue);
  };

  return (
    <StarRatingComponent
      name="rate1"
      starCount={5}
      value={rating}
      onStarClick={onStarClick}
    />
  );
};

export default StarRating;
