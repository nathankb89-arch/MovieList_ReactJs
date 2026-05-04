import React from 'react';

const MovieItem = ({ movie, onDelete }) => {
  return (
    <div className="movie-card">
      <div>
        <h3>{movie.title}</h3>
        <p>{movie.genre} • {movie.year}</p>
      </div>
      <button className="delete-btn" onClick={() => onDelete(movie.id)}>
        Delete
      </button>
    </div>
  );
};

export default MovieItem;