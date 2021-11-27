import React, { useState } from "react";
import MovieCard from "./MovieCard";
import Description from "./Description";
function MovieList({ allMovies }) {
  return (
    <div>
      {allMovies.map((e) => (
        <MovieCard allMovies={e} />
      ))}
    </div>
  );
}

export default MovieList;
