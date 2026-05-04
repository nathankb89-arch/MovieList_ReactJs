import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ movies, onDelete }) => {
  return (
    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map(movie => (
          <MovieItem key={movie.id} movie={movie} onDelete={onDelete} />
        ))
      ) : (
        <p>No movies left in your collection!</p>
      )}
    </div>
  );
};

export default MovieList;