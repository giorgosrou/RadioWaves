import { Station } from 'radio-browser-api';
import { StationItem } from './components/stationItem';
import * as Styled from "./styled";
import React, { useEffect, useState } from 'react';
import { LoadingSpinner } from '../../components/loadingSpinner/LoadingSpinner';

export const Stations = () => {
  const [stations, setStations] = useState<Station[]>([]);
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [loading, setLoading] = useState(true);

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

  /* To be used when https call is fixed

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

 */
  useEffect(() => {
    const fetchStations = async () => {
      setLoading(true);
      try {
        const apiUrl = `https://radiowaves-api.onrender.com/api/servers?genre=${selectedGenre}`;
        //const apiUrl = `http://localhost:3002/api/servers?genre=${selectedGenre}`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch stations');
        }
        const stationsData: Station[] = await response.json();
        setStations(stationsData);
      } catch (error) {
        console.error('Error fetching data from backend:', error);
        // Handle error
      } finally {
        setLoading(false);
      }
    };

    fetchStations();
  }, [selectedGenre]);


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
      {loading ? (
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
