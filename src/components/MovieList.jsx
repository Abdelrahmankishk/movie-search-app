import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  return (
    <div className="row">
      {movies.map((movie) => (
        <div className="col-md-3 mb-4" key={movie.imdbID}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
}

export default MovieList;
