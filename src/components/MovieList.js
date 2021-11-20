import React, { useState } from "react";
import MovieCard from "./MovieCard";
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
