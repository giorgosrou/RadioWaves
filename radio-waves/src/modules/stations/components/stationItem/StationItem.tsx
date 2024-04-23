import React from 'react';
import * as Styled from './styled';
import { Station } from 'radio-browser-api';
import { StationLogo } from './components/stationLogo/StationLogo';
import { StationName } from './components/stationName';
import { Tilt } from 'react-tilt';
import { SoundButton } from './components/playButton/SoundButton';

export type StationItemProps = {
 station: Station | undefined ;
 onSelectStation: (station: Station) => void;
}

export const StationItem = ({station, onSelectStation }:StationItemProps) => {

  const handleSelectStation = () => {
    if (station) {
      onSelectStation(station);
    }
  };

  return (
    <Tilt options={{ max : 30 }} >
      <Styled.StationContainer>
        <StationLogo logoSource={station?.favicon}/>
        <StationName  name={station?.name}/>
        <SoundButton onPlay={handleSelectStation} />
        <Styled.CountryLabel>{station?.country.slice(0, 40)}</Styled.CountryLabel>
      </Styled.StationContainer>
    </Tilt>
  )
}