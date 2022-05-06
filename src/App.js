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
  const [filteredMovies, setFilteredMovies] = useState([]);

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
    setFromDirectorOf('WHOMST');
    setFromProducerOf('THE RETURN OF BRUH');
    setTagline('Here come dat boi...');
    setColorThemeID('poster-2.PNG');
  }

  function handleFilterMovies(search) {
    const someMovies = allMovies.filter(movie => movie.movieTitle.toLowerCase().includes(search.toLowerCase()));
    search ? setFilteredMovies(someMovies) : setFilteredMovies(allMovies);
  }

  function handleDeleteMovie(movieTitle) {
    const movie = allMovies.findIndex(movie => movie.movieTitle === movieTitle);
    allMovies.splice(movie, 1);
    setAllMovies([...allMovies]);

  }

  return (
    <div className="App">
      <div className="left">
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
        
      </div>
      <div className="serp">
        <p>Search:<input onChange={(e) => handleFilterMovies(e.target.value)} /></p>
        <MovieList allMovies={filteredMovies.length ? filteredMovies : allMovies } handleDeleteMovie={handleDeleteMovie}/>
      </div>
      
    </div>
  );
}

export default App;
