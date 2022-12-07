import "./App.css";
import { useState } from "react";
// import movies from "./db/movies.json";
import { movies } from "./db/movies";
import MovieInfo from "./components/MovieInfo";
import MovieImg from "./components/MovieImg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClapperboard } from "@fortawesome/free-solid-svg-icons";
// import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

// import movie1 from "./assets/moviePosters/movie1.jpg";

function App() {
  const [movieList, setMovieList] = useState(movies);
  const [fadeIn, setFadeIn] = useState(true);
  // Fadi in and out from filter:
  const changeVisibility = (toShow) => {
    setFadeIn(false);
    setTimeout(() => {
      setFadeIn(true);
      setMovieList(toShow);
    }, 200);
  };

  // Movie filters:
  const filterComedy = () => {
    let comedyMovies = movies.filter((movie) => {
      return movie.genre.includes("Comedy");
    });

    changeVisibility(comedyMovies);
  };
  const filterDrama = () => {
    let dramaMovies = movies.filter((movie) => {
      return movie.genre.includes("Drama");
    });
    changeVisibility(dramaMovies);
  };
  const filterThriller = () => {
    let thrillerMovies = movies.filter((movie) => {
      return movie.genre.includes("Thriller");
    });
    changeVisibility(thrillerMovies);
  };
  const filterAction = () => {
    let actionMovies = movies.filter((movie) => {
      return movie.genre.includes("Action");
    });
    // console.log(actionMovies);
    changeVisibility(actionMovies);
  };
  const filterRomance = () => {
    let romanceMovies = movies.filter((movie) => {
      return movie.genre.includes("Romance");
    });
    changeVisibility(romanceMovies);
  };
  const filterWar = () => {
    let romanceMovies = movies.filter((movie) => {
      return movie.genre.includes("War");
    });
    changeVisibility(romanceMovies);
  };
  const filterWestern = () => {
    let westernMovies = movies.filter((movie) => {
      return movie.genre.includes("Western");
    });
    changeVisibility(westernMovies);
  };
  const noFilter = () => {
    changeVisibility(movies);
  };

  return (
    <div className="main">
      <div className="fa-layers fa-fw">
        {" "}
        <FontAwesomeIcon inverse  className="logo-cam" size="4x" icon={faClapperboard} />
        {/* <FontAwesomeIcon
          className="logo-cam2"
          rotation={180}
          transform="shrink-3"
          icon={faVideoCamera}
        /> */}
      </div>
      <h1>Movies to watch</h1>
      <div className="filter-buttons">
        <button className="indiv-button all" onClick={noFilter}>
          All
        </button>
        <button className="indiv-button action" onClick={filterAction}>
          Action
        </button>
        <button className="indiv-button drama" onClick={filterDrama}>
          Drama
        </button>
        <button className="indiv-button comedy" onClick={filterComedy}>
          Comedy
        </button>
        <button className="indiv-button thriller" onClick={filterThriller}>
          Thriller
        </button>
        <button className="indiv-button western" onClick={filterWestern}>
          Western
        </button>
        <button className="indiv-button war" onClick={filterWar}>
          War
        </button>
        <button className="indiv-button romance" onClick={filterRomance}>
          Romance
        </button>
      </div>
      {/* <img src={require("./assets/moviePosters/movie1.jpeg")} alt="movie1" /> */}
      <div className={`movies-wrapper ${fadeIn && "fade-in"}`}>
        {movieList.map((movie) => {
          return (
            <div key={movie.id} className="card">
              <div className="image-card">
                <MovieImg movie={movie}></MovieImg>
              </div>
              <div className="info-card">
                <MovieInfo movie={movie}></MovieInfo>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
