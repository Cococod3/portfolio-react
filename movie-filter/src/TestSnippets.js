import "./App.css";
import { useState } from "react";
import movies from "./db/movies.json";
function App() {
  const [movieList, setMovieList] = useState(movies);
  // Movie filters:
  const filterComedy = () => {
    let comedyMovies = movies.filter((movie) => {
      return movie.genre.includes("Comedy");
    });
    setMovieList(comedyMovies);
  };
  const filterDrama = () => {
    let dramaMovies = movies.filter((movie) => {
      return movie.genre.includes("Drama");
    });
    setMovieList(dramaMovies);
  };
  const filterThriller = () => {
    let thrillerMovies = movies.filter((movie) => {
      return movie.genre.includes("Thriller");
    });
    setMovieList(thrillerMovies);
  };
  const filterAction = () => {
    let actionMovies = movies.filter((movie) => {
      return movie.genre.includes("Action");
    });
    // console.log(actionMovies);
    setMovieList(actionMovies);
  };
  const filterRomance = () => {
    let romanceMovies = movies.filter((movie) => {
      return movie.genre.includes("Romance");
    });
    setMovieList(romanceMovies);
  };
  const filterWar = () => {
    let romanceMovies = movies.filter((movie) => {
      return movie.genre.includes("War");
    });
    setMovieList(romanceMovies);
  };
  const filterWestern = () => {
    let westernMovies = movies.filter((movie) => {
      return movie.genre.includes("Western");
    });
    setMovieList(westernMovies);
  };
  const noFilter = () => {
    setMovieList(movies);
  };

  return (
    <div className="main">
      <h1>Your favorite movies</h1>
      <div className="filter-buttons">
        <button onClick={noFilter}>All</button>
        <button onClick={filterAction}>Action</button>
        <button onClick={filterDrama}>Drama</button>
        <button onClick={filterComedy}>Comedy</button>
        <button onClick={filterThriller}>Thriller</button>
        <button onClick={filterWestern}>Western</button>
        <button onClick={filterWar}>War</button>
        <button onClick={filterRomance}>Romance</button>
      </div>
      <div className="movies-wrapper">
        {movieList.map((movie) => (
          <div key={movie.id} className="card">
            <h2>{movie.title}</h2>
            <h3>{movie.genre}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
