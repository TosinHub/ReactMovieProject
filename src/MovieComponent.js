const MovieComponent = ({ movie }) => {
  return (
    <li key={movie.id} className="movie">
      <img src={movie.poster} alt={movie.title} />
      <p>
        {movie.title} by {movie.director} released in {movie.year}
      </p>
      <p>Rating: {movie.rating} </p>
    </li>
  );
};

export default MovieComponent;
