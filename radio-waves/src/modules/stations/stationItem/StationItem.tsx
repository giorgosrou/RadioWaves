import { AudioPlayer } from '../../../components/audioPlayer';
import React from 'react';
import * as Styled from "./styled";
import { Station } from "radio-browser-api";

export type StationItemProps = {
 station: Station | undefined;
}
export const StationItem = ({station}:StationItemProps) => {

  return (
    <Styled.StationContainer>
      <AudioPlayer
        footer={station?.country}
        header={station?.name}
        soundSource={station?.urlResolved}
      />
    </Styled.StationContainer>
  )
}