import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="poster">
        <div className="top">
          <div className="actor">
            <p>NAME</p>
            <p>SURNAME</p>
          </div>
          <div className="actor">
            <p>NAME</p>
            <p>SURNAME</p>
          </div>
          <div className="actor">
            <p>NAME</p>
            <p>SURNAME</p>
          </div>
        </div>
        <p>TAGLINE</p>
        <div className="middle">
          
          <div>
            <q>CRITIQUE</q>
            <p>CRITIC, PUBLICATION</p>
            <q>CRITIQUE</q>
            <p>CRITIC, PUBLICATION</p>
          </div>
          <div>
            <h4>FROM THE DIRECTOR OF</h4>
            <h3>A FILM</h3>
          </div>
          <div>
            <q>CRITIQUE</q>
            <p>CRITIC, PUBLICATION</p>
            <q>CRITIQUE</q>
            <p>CRITIC, PUBLICATION</p>
          </div>
        </div>
        <h1>THE TITLE</h1>
        
        
      </div>
    </div>
  );
}

export default App;
