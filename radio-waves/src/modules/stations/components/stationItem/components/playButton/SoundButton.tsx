import React, { useState } from 'react';
import PlayCircle02Icon from '../../../../../../assets/PlayButton';
import PauseIcon from '../../../../../../assets/PauseButton';

export type SoundButtonProps = {
  onPlay: () => void
}

export const SoundButton = ({onPlay}:SoundButtonProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const onClickPlay = () => {
    setIsSelected(true);
    onPlay();
  };

  const onClickPause = () => {
    setIsSelected(false);
  };

  return (
    <div>
      {isSelected ? <PauseIcon onClick={onClickPause}/> : <PlayCircle02Icon onClick={onClickPlay}/>}
    </div>
  )

}