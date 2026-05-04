import React, { useState } from 'react';

const MovieForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !genre) return;
    
    onAdd({ title, genre, year: new Date().getFullYear() });
    setTitle('');
    setGenre('');
  };

  return (
    <form className="movie-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Movie Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Genre" 
        value={genre} 
        onChange={(e) => setGenre(e.target.value)} 
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default MovieForm;