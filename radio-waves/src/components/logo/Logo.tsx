// @ts-ignore
import logo from '../../assets/logo.png'
import * as Styled from './styled';

export const Logo = () => {
  //const url = `https://wave-radio.netlify.app/`;
  const url = `http://localhost:3000`;
  
  const handleLogoClick = () => {
    window.location.href = url;
  };
  return (
      <Styled.Logo src= {logo} alt="appLogo" onClick={handleLogoClick} />
    );
}