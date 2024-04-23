import { Station } from 'radio-browser-api';
import { StationItem } from './components/stationItem';
import * as Styled from "./styled";
import React, { useEffect, useMemo, useState } from 'react';
import { LoadingSpinner } from '../../components/loadingSpinner/LoadingSpinner';
import { useStations } from '../../hooks/useStations';
import { Filters } from './components/filters';

export type StationsProps = {
  searchterm: string;
  onSelectStation: (station: Station) => void;
}

export const Stations = ({searchterm, onSelectStation }: StationsProps) => {
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [url, setUrl] = useState<string>("");

  const filters = useMemo(() => [
    "all", "metal", "rock", "jazz", "rap", "psychedelic rock",
    "psychedelic", "indie", "reggae", "pop", "country", "disco",
    "soul", "ska", "cumbia",
  ], []);

  useEffect(() => {
    if (searchterm.trim() !== '') {
      setUrl(`https://radiowaves-api.onrender.com/api/search?searchterm=${searchterm}`);
      //setUrl(`http://localhost:3002/api/search?searchterm=${searchterm}`);
    } else {
      setUrl(`https://radiowaves-api.onrender.com/api/filters?genre=${selectedGenre}`);
      //setUrl(`http://localhost:3002/api/filters?genre=${selectedGenre}`);
    }
  }, [searchterm, selectedGenre]);

  const { stations, isLoading} = useStations(url);

  const handleGenreChange = (genre: string) => {
    setSelectedGenre(genre);
  };

  const handleSelectStation = (station: Station) => {
    onSelectStation(station);
  };

  return(
    <>
      <Filters filters={filters} selectedGenre={selectedGenre} onSelectGenre={handleGenreChange} />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Styled.StationsContainer>
          {stations.map((station: Station) => (
            <StationItem key={station.id} station={station} onSelectStation={handleSelectStation} />
          ))}
        </Styled.StationsContainer>
      )}
    </>
  );
};
