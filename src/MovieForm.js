import React from 'react';

export default function MovieForm(props) {
  return (
    <div>
      <form onSubmit={props.submitMovie}>
        <p>Film Title: <input required value={props.movieTitle} onChange={e => props.setMovieTitle(e.target.value)} /></p>
        <p>A Film: <input value={props.fromDirectorOf} onChange={e => props.setFromDirectorOf(e.target.value)} /></p>
        <p>Other Film: <input value={props.fromProducerOf} onChange={e => props.setFromProducerOf(e.target.value)} /></p>
        <p>Tagline: <input value={props.tagline} onChange={e => props.setTagline(e.target.value)} /></p>
        <p>Theme:
          <select required value={props.colorThemeID} onChange={e =>props.setColorThemeID(e.target.value)}>
            <option value="poster-1.PNG">Grey Stone</option>
            <option value="poster-2.PNG">Apocalypse Soon</option>
            <option value="poster-3.PNG">A Long Time Ago</option>
            <option value="poster-4.PNG">Wanderer Above the Smog</option>
          </select>
        </p>
        <button>Save Poster</button>
            
      </form>
    </div>
  );
}
