// @ts-ignore
import logo from '../../assets/logo.png'
import * as Styled from './styled';

export const Logo = () => {
  return (
    <Styled.LogoContainer>
      <Styled.Logo src= {logo} alt="appLogo" />
    </Styled.LogoContainer>
    );
}