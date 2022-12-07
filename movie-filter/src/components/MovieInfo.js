import "./MovieInfo.css";
function MovieInfo(props) {
  const formatGenre = () => {
    return props.movie.genre.replaceAll("|", " | ");
  };

  return (
    <div className="info-contanier">
      {/* <h2>{props.movie.title}</h2> */}
      <h3>{formatGenre()}</h3>
    </div>
  );
}

export default MovieInfo;
