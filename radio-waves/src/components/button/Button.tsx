import React from 'react';
import { buttonStyles, ButtonStyles } from './styled';

interface ButtonProps extends ButtonStyles {
  content: string | JSX.Element;
  onClick?: () => void;
}

export const Button = ({
  content,
  onClick,
  ...styleProps
  }:ButtonProps) => {
  const buttonStyle = buttonStyles(styleProps);

  return (
    <button
      type="button"
      onClick={onClick}
      style={buttonStyle}
    >
      {content}
    </button>
  );
};
