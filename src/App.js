import "./App.css";
import Home from "./components/Home";
import Description from "./components/Description";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState } from "react";

function App() {
  const addMovies = (newMovie) => {
    setMovies(movies.concat(newMovie));
  };
  const [moviesRating, setRating] = useState(1);
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([
    {
      title: "School of Rock",
      des: "Based on the hit film, this hilarious new musical follows Dewey Finn, a failed, wannabe rock star who decides to earn a few extra bucks by posing as a substitute teacher at a prestigious prep school. There he turns a class of straight-A students into a guitar-shredding, bass-slapping, mind-blowing rock band.",
      url: "https://upload.wikimedia.org/wikipedia/en/1/11/School_of_Rock_Poster.jpg",
      rating: 4,
      trailer: "https://www.youtube.com/watch?v=TExoc0MG4I4",
    },
    {
      title: "The Tomorrow War",
      des: "A family man is drafted to fight in a future war where the fate of humanity relies on his ability to confront the past. A family man is drafted to fight in a future war where the fate of humanity relies on his ability to confront the past.",
      url: "https://upload.wikimedia.org/wikipedia/en/6/60/The_Tomorrow_War_%282021_film%29_official_theatrical_poster.jpg",
      rating: 2,
      trailer: "https://www.youtube.com/watch?v=QPistcpGB8o",
    },
    {
      title: "The Guilty",
      des: "The Guilty is inspired by the 2018 film of the same name, directed by Gustav Moller. This 2021 adaptation has been written by Nic Pizzolatto and directed by Antoine Fuqua. ... The film takes you on a journey where you see a protagonist burdened by guilt, and everything he touches just breaks into fragments.",
      url: "https://fr.web.img4.acsta.net/c_310_420/pictures/21/08/31/11/07/4346618.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/watch?v=NaB_ERMAZu4",
    },
  ]);
  const ratingMovies = (x) => {
    setRating(x);
  };
  const handleChange = (x) => {
    setSearch(x);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              setMovies={setMovies}
              ratingMovies={ratingMovies}
              handleChange={handleChange}
              movies={movies}
              moviesRating={moviesRating}
              search={search}
              addMovies={addMovies}
            />
          }
        ></Route>
        <Route
          exact
          path="/description/:title"
          element={<Description movies={movies} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
