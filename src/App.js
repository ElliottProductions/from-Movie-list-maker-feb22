import { useState } from 'react';
import './App.css';
import Movie from './Movie';
import MovieForm from './MovieForm';

function App() {
  const [movieTitle, setMovieTitle] = useState('THE TITLE');
  const [fromDirectorOf, setFromDirectorOf] = useState('A FILM');
  const [fromProducerOf, setFromProducerOf] = useState('OTHER FILM');
  const [tagline, setTagline] = useState('SOME TAGLINE');
  const [colorThemeID, setColorThemeID] = useState('poster-1.PNG');

  return (
    <div className="App">
      <Movie movieTitle={movieTitle} fromDirectorOf={fromDirectorOf} fromProducerOf={fromProducerOf}
        tagline={tagline} colorThemeID={colorThemeID}/>
      <MovieForm movieTitle={movieTitle} setMovieTitle={setMovieTitle} fromDirectorOf={fromDirectorOf}
        setFromDirectorOf={setFromDirectorOf} fromProducerOf={fromProducerOf}
        setFromProducerOf={setFromProducerOf} tagline={tagline} setTagline={setTagline}
        colorThemeID={colorThemeID} setColorThemeID={setColorThemeID}/>
      <br></br>
      <br></br>

      <br></br>
      <p>Titlsse:</p><input></input>
    </div>
  );
}

export default App;
