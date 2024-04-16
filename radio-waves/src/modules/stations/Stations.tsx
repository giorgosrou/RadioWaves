import { Station } from 'radio-browser-api';
import { StationItem } from './components/stationItem';
import * as Styled from "./styled";
import React, { useState } from 'react';
import { LoadingSpinner } from '../../components/loadingSpinner/LoadingSpinner';
import { useStations } from '../../hooks/useStations';

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

  return(
    <>
      <Styled.FilterWrapper>
        {filters.map(filter => {
          return (
            <Styled.Filter
              key={filter}
              onClick={() => {setSelectedGenre(filter)}}
              isSelected={filter === selectedGenre}
            >
              {filter}
            </Styled.Filter>
          )
        })}
      </Styled.FilterWrapper>
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
