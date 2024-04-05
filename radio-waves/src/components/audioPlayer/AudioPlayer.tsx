import React from 'react';
import 'react-h5-audio-player/lib/styles.css';
import * as Styled from "./styled";

export type AudioPlayerProps = {
  soundSource: string | undefined
  header: string | undefined
  footer: string | undefined
}

export const AudioPlayer= ({
  soundSource,
  header,
  footer
}: AudioPlayerProps) => {
  return (
    <div>
      <Styled.Container>
        <Styled.AudioPlayer
          autoPlay
          header = {header}
          footer = {footer}
          src={soundSource}
          onPlay={e => console.log("onPlay")}
          // other props here
        />
      </Styled.Container>
    </div>

  );
};