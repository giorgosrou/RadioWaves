import React from 'react';
import 'react-h5-audio-player/lib/styles.css';
import * as Styled from './styled';

export type AudioPlayerProps = {
  soundSource?: string | undefined
  onPlay: () => void
}

export const AudioPlayer= ({
  soundSource,
  onPlay,
}: AudioPlayerProps) => {
  
  return (
    <>
      <Styled.Container>
        <Styled.AudioPlayer
          showJumpControls={false}
          layout={"stacked"}
          src={soundSource}
          customProgressBarSection={[]}
          customAdditionalControls={[]}
          autoPlayAfterSrcChange={false}
          onPlay = {onPlay}
          // other props here
        />
      </Styled.Container>
    </>

  );
};