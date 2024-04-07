import React, { SyntheticEvent } from "react";
// @ts-ignore
import logo from "../../../../assets/radio.png";
import * as Styled from "./styled";

export type LogoProps = {
  logoSource: string | undefined;
}

export const StationLogo = ({logoSource}:LogoProps) => {

  const defaultLogo = (event: SyntheticEvent<HTMLImageElement>) => {
    const target = event.target as HTMLImageElement;
    target.src = logo;
  }

  return (
    <Styled.Logo
      src={logoSource}
      alt="logo"
      onError={defaultLogo}
    />
  )
}