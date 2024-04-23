import React from 'react';
import 'react-h5-audio-player/lib/styles.css';
import * as Styled from './styled';

export type AudioBarProps = {
  soundSource: string | undefined
  title: string | undefined
}

export const AudioBar = ({soundSource, title}: AudioBarProps) => {
  
  return (
    <Styled.AudioContainer>
      <Styled.AudioBar
        showJumpControls={false}
        showSkipControls={false}
        layout="stacked"
        src={soundSource}
        customProgressBarSection={[]}
        customAdditionalControls={[]}
        autoPlayAfterSrcChange={true}
        footer={title? title: 'Select a radio station'}
        // other props here
      />
    </ Styled.AudioContainer>
  )
}