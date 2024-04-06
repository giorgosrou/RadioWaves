import { RadioBrowserApi, Station } from 'radio-browser-api';
import { StationItem } from './stationItem';
import * as Styled from "./styled";
import { useEffect, useState } from "react";

export const Stations = () => {
  const api = new RadioBrowserApi('My Radio App');
  const [stations, setStations] = useState<Station[]>([]);

  useEffect(() => {
    const fetchStations = async () => {
      try {
        const stationsData = await api.searchStations({
          language: 'english',
          tag: 'rock',
          limit: 100
        });
        setStations(stationsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStations();
  }, [api]);

  return(
    <Styled.StationsContainer>
      {stations.map(station => (
        <StationItem key={station.id} station={station} />
      ))}
    </Styled.StationsContainer>
  );
};
