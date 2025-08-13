import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_URL = 'https://www.omdbapi.com/?apikey=23283055';

  useEffect(() => {
    if (searchTerm) {
      setLoading(true);
      fetch(`${API_URL}&s=${searchTerm}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.Response === "True") {
            setMovies(data.Search);
            setError('');
          } else {
            setMovies([]);
            setError(data.Error);
          }
          setLoading(false);
        });
    }
  }, [searchTerm]);

  return (
    <div className="container text-center my-4">
      <h1 className="mb-4">Movie Search</h1>
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}
      <MovieList movies={movies} />
    </div>
  );
}

export default Home;
