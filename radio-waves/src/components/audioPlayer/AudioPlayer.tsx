import React from 'react';
import 'react-h5-audio-player/lib/styles.css';
import * as Styled from './styled';

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
          header = {header}
          showJumpControls={false}
          layout={"stacked"}
          footer = {footer}
          src={soundSource}
          customProgressBarSection={[]}
          autoPlayAfterSrcChange={false}
          // other props here
        />
      </Styled.Container>
    </div>

  );
};