import { useState } from 'react';
import './App.css';
import Movie from './Movie';
import MovieForm from './MovieForm';
import MovieList from './MovieList';

function App() {
  const [movieTitle, setMovieTitle] = useState('THE TITLE');
  const [fromDirectorOf, setFromDirectorOf] = useState('A FILM');
  const [fromProducerOf, setFromProducerOf] = useState('OTHER FILM');
  const [tagline, setTagline] = useState('A suggestive tagline...');
  const [colorThemeID, setColorThemeID] = useState('poster-1.PNG');
  const [allMovies, setAllMovies] = useState([]);

  function submitMovie(e) {
    e.preventDefault();
    const newMovie = {
      movieTitle: movieTitle,
      fromDirectorOf: fromDirectorOf,
      fromProducerOf: fromProducerOf,
      tagline: tagline,
      colorThemeID: colorThemeID
    };

    setAllMovies([...allMovies, newMovie]);

    setMovieTitle('THE TITLE 2');
    setFromDirectorOf('');
    setFromProducerOf('');
    setTagline('');
    setColorThemeID('poster-2.PNG');
  }

  return (
    <div className="App">
      <Movie movie={{
        movieTitle: movieTitle,
        fromDirectorOf: fromDirectorOf,
        fromProducerOf: fromProducerOf,
        tagline: tagline,
        colorThemeID: colorThemeID
      }}/>
      <MovieForm submitMovie={submitMovie} movieTitle={movieTitle} setMovieTitle={setMovieTitle} fromDirectorOf={fromDirectorOf}
        setFromDirectorOf={setFromDirectorOf} fromProducerOf={fromProducerOf}
        setFromProducerOf={setFromProducerOf} tagline={tagline} setTagline={setTagline}
        colorThemeID={colorThemeID} setColorThemeID={setColorThemeID}/>
      <MovieList allMovies={allMovies.length ? allMovies : allMovies }/>
    </div>
  );
}

export default App;
