import React from 'react';
import Movie from './Movie';

export default function MovieList({ allMovies }) {
  return (
    <div>
      {console.log(allMovies)}
      {allMovies.map((movie) => <Movie key={movie.movieTitle + Math.floor(Math.random() * 1000)} movie={movie}
      />)}
      
    </div>
  );
}
