import React from 'react';

export default function Movie(props) {
  return (
    <div className="poster" style={{ backgroundImage: `url(${props.movie.colorThemeID})` }}> 
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
      <h3 style={{ color: 'black' }}>{props.movie.tagline}</h3>
      <div className="middle">
          
        <div>
          <q>CRITIQUE</q>
          <p>CRITIC, PUBLICATION</p>
          <q>CRITIQUE</q>
          <p>CRITIC, PUBLICATION</p>
        </div>
        <div>
          { props.movie.fromDirectorOf ? <h6>FROM THE DIRECTOR OF</h6> : <br/>}
          <h4>{props.movie.fromDirectorOf}</h4>
          { props.movie.fromProducerOf ? <h6>AND THE PRODUCER OF</h6> : <br/>}
          
          <h4>{props.movie.fromProducerOf}</h4>
        </div>
        <div>
          <q>CRITIQUE</q>
          <p>CRITIC, PUBLICATION</p>
          <q>CRITIQUE</q>
          <p>CRITIC, PUBLICATION</p>
        </div>
      </div>
      <h1>{props.movie.movieTitle}</h1>
        
        
    </div>
  );
}
