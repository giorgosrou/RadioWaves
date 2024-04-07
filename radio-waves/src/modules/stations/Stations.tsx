import { RadioBrowserApi, Station } from 'radio-browser-api';
import { StationItem } from './stationItem';
import * as Styled from "./styled";
import { useEffect, useState } from 'react';

export const Stations = () => {
  const [stations, setStations] = useState<Station[]>([]);
  const [selectedGenre, setSelectedGenre] = useState("all");

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

  let api: RadioBrowserApi;
  api = new RadioBrowserApi('My Radio App');

  useEffect(() => {
    const fetchStations = async () => {
      try {
        const stationsData = await api.searchStations({
          language: 'english',
          tag: selectedGenre,
          limit: 50,
        });
        setStations(stationsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStations();
  }, [api, selectedGenre]);

  return(
    <>
      <Styled.FilterContainer>
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
      </Styled.FilterContainer>
      <Styled.StationsContainer>
        {stations.map(station => (
          <StationItem key={station.id} station={station} />
        ))}
      </Styled.StationsContainer>
    </>

  );
};
