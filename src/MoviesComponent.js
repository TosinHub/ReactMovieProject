import { movies } from "./data/movies";

import "./movies.css";

import MovieComponent from "./MovieComponent";

const MoviesComponent = () => {
  const fetchData = () => {
    return movies;
  };

  const movieData = fetchData();

  return (
    <div className="movie-container">
      <ul className="movie-list">
        {movieData.map((movie) => (
          <MovieComponent key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MoviesComponent;
