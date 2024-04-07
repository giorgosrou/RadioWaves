import { AudioPlayer } from '../../../components/audioPlayer';
import React from 'react';
import * as Styled from "./styled";
import { Station } from "radio-browser-api";
import { StationLogo } from "./stationLogo/StationLogo";
import { StationName } from "./stationName";
import { Tilt } from 'react-tilt';


export type StationItemProps = {
 station: Station | undefined ;
}

export const StationItem = ({station}:StationItemProps) => {

  return (
    <Tilt options={{ max : 30 }} >
      <Styled.StationContainer>
        <StationLogo logoSource={station?.favicon}/>
        <StationName  name={station?.name}/>
        <AudioPlayer
          soundSource={station?.urlResolved}
        />
        <Styled.CountryLabel>{station?.country}</Styled.CountryLabel>
      </Styled.StationContainer>
    </Tilt>
  )
}