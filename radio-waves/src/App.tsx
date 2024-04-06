import React from 'react';
import './assets/App.css';
import { MusicQuote } from './modules/musicQuote';
import {Stations} from "./modules/stations";


function App() {
  return (
    <div className="App">
      <MusicQuote />
      <Stations />
    </div>
  );
}

export default App;
