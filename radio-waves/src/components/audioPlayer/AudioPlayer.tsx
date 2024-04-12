import React from 'react';
import 'react-h5-audio-player/lib/styles.css';
import * as Styled from './styled';

export type AudioPlayerProps = {
  soundSource: string | undefined
}

export const AudioPlayer= ({
  soundSource,
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
          // other props here
        />
      </Styled.Container>
    </>

  );
};