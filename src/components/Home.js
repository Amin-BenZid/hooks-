import React from "react";
import AddMovies from "./AddMovies";
import Filter from "./Filter";
import MovieList from "./MovieList";
import { useState } from "react";
import Description from "./Description";

function Home(
  {
setMovies,
ratingMovies,
moviesRating,
handleChange,
movies,
search,
addMovies,
  }
) {

  return (
    <div>
      <Filter
        movies={setMovies}
        ratingMovies={ratingMovies}
        rating={moviesRating}
        handleChange={handleChange}
      />
      <MovieList
        allMovies={movies.filter(
          (el) =>
            el.rating >= moviesRating &&
            el.title.toLowerCase().includes(search.toLowerCase().trim())
        )}
      />
      <AddMovies addMovies={addMovies} />
    </div>
  );
}
export default Home;
