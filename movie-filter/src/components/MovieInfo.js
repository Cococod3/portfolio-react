// import './MovieInfo.css';
function MovieInfo(props) {

  return (
    <div className='info-contanier'>
        <h2>{props.movie.title}</h2>
        <h3>{props.movie.genre}</h3>
    </div>
  );
}

export default MovieInfo;
