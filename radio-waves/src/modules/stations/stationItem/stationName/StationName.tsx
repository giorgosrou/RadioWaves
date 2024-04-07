import React from 'react';
import * as Styled from "./styled";

export type StationNameProps = {
  name: string | undefined;
}
export const StationName = ({name}:StationNameProps) => {
  return (
    <Styled.NameContainer>
      <Styled.Name>{name?.replaceAll('_',' ').slice(0, 40)}</Styled.Name>
    </Styled.NameContainer>
  )
}