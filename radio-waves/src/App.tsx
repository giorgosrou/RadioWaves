import React from 'react';
import './assets/App.css';
import { MusicQuote } from './modules/musicQuote';
import { Stations } from "./modules/stations";
import { Logo } from "./modules/logo";


function App() {
  return (
    <div className="App">
      <Logo />
      <MusicQuote />
      <Stations />
    </div>
  );
}

export default App;
