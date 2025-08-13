import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const API_URL = 'https://www.omdbapi.com/?apikey=23283055';

  useEffect(() => {
    fetch(`${API_URL}&i=${id}&plot=full`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="container my-4">
      <Link to="/" className="btn btn-secondary mb-4">Back</Link>
      <div className="row">
        <div className="col-md-4">
          <img src={movie.Poster} alt={movie.Title} className="img-fluid" />
        </div>
        <div className="col-md-8">
          <h2>{movie.Title} ({movie.Year})</h2>
          <p><strong>Rating:</strong> {movie.imdbRating}</p>
          <p>{movie.Plot}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
