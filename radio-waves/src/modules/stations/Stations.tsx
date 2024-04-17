import { Station } from 'radio-browser-api';
import { StationItem } from './components/stationItem';
import * as Styled from "./styled";
import React, { useState } from 'react';
import { LoadingSpinner } from '../../components/loadingSpinner/LoadingSpinner';
import { useStations } from '../../hooks/useStations';
import { Filters } from './components/filters';

export const Stations = () => {
  const [selectedGenre, setSelectedGenre] = useState("all");

  const url = `https://radiowaves-api.onrender.com/api/servers?genre=${selectedGenre}`;
  //const url = `http://localhost:3002/api/servers?genre=${selectedGenre}`;

  const { stations, isLoading } = useStations(url);

  const filters = [
    "all",
    "metal",
    "rock",
    "jazz",
    "rap",
    "psychedelic rock",
    "psychedelic",
    "indie",
    "reggae",
    "pop",
    "country",
    "disco",
    "soul",
    "ska",
    "cumbia",
  ]

  const handleGenreChange = (genre: string) => {
    setSelectedGenre(genre);
  };

  return(
    <>
      <Filters filters={filters} selectedGenre={selectedGenre} onSelectGenre={handleGenreChange} />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Styled.StationsContainer>
          {stations.map((station: Station) => (
            <StationItem key={station.id} station={station} />
          ))}
        </Styled.StationsContainer>
      )}
    </>
  );
};
