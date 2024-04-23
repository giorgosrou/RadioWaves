import { useState } from 'react';
import { Stations } from '../../modules/stations';
import { Header } from './components/header';
import { MusicQuote } from './components/musicQuote';
import * as Styled from './styled'
import { Station } from 'radio-browser-api';


export const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedStation, setSelectedStation] = useState<Station | null>(null);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleSelectStation = (station: Station) => {
    setSelectedStation(station);
  };

  return (
    <>
      <Header
        onSearch={handleSearch} selectedStation={selectedStation}/>
      <Styled.ContentContainer>
        <MusicQuote />
        <Stations searchterm={searchTerm} onSelectStation={handleSelectStation} />
      </Styled.ContentContainer>
    </>
  )
}