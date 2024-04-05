import React from 'react';
import './assets/App.css';
import { AudioPlayer } from "./components/audioPlayer";

function App() {
  return (
    <div className="App">
      <AudioPlayer footer= 'Yoooooo' header='Yohoho and a Bottle of Rum' soundSource= 'https://www.youtube.com/watch?v=Yf2W2nZpkiw&ab_channel=PirateGreekMusic'/>
    </div>
  );
}

export default App;
