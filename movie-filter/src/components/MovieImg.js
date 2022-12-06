// import './MovieImage.css';


function MovieImage(props) {
  return (
  <div className="img-container">
            <div className="img-wrapper">
              <img src={props.movie.img.path} alt={props.movie.img.text} />
              {/* <span className="dot"></span> */}
            </div>
          </div>
          );
};



export default MovieImage;