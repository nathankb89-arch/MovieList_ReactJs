import React, { useState } from 'react';
import MovieList from './Components/MovieList';
import MovieForm from './Components/MovieForm';
import './App.css';

function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: "Inception", genre: "Sci-Fi", year: 2010 },
    { id: 2, title: "The Dark Knight", genre: "Action", year: 2008 },
    { id: 3, title: "Interstellar", genre: "Sci-Fi", year: 2014 }
  ]);

  // Add a new movie to the list
  const addMovie = (movie) => {
    const newMovie = { ...movie, id: Date.now() };
    setMovies([...movies, newMovie]);
  };

  // Remove a movie by ID
  const deleteMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  return (
    <div className="app-container">
      <h1>My Movie Collection</h1>
      <MovieForm onAdd={addMovie} />
      <MovieList movies={movies} onDelete={deleteMovie} />
    </div>
  );
}

export default App;