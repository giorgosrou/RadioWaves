// @ts-ignore
import logo from '../../assets/logo.png'
import * as Styled from './styled';

export const Logo = () => {
  const url = `https://radiowaves-api.onrender.com`;
  //const url = `http://localhost:3000`;
  const handleLogoClick = () => {
    // Redirect to the desired page
    window.location.href = url;
  };
  return (
      <Styled.Logo src= {logo} alt="appLogo" onClick={handleLogoClick} />
    );
}