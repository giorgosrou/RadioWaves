export type ButtonStyles = {
  backgroundColor?: string;
  color?: string;
  borderRadius?: string;
  padding?: string;
  border?: string;
  fontsize?: string;
  outline?: string;
};

export const buttonStyles = ({
  backgroundColor = 'purple',
  color = 'white',
  borderRadius = '',
  padding = '13px',
  border = '3px purple',
  fontsize = '16px',
  outline = 'none'
}: ButtonStyles) => ({
  backgroundColor,
  color,
  borderRadius,
  padding,
  border,
  fontsize,
  outline,
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
