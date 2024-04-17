import React from 'react';
import * as Styled from "./styled";

export type FilterProps = {
  filters: string[];
  selectedGenre: string;
  onSelectGenre: (genre: string) => void;
}
export const Filters = ({filters, selectedGenre, onSelectGenre}: FilterProps) => {

  return(
    <Styled.FilterWrapper>
      {filters.map(filter => {
        return (
          <Styled.Filter
            key={filter}
            onClick={() => {onSelectGenre(filter)}}
            isSelected={filter === selectedGenre}
          >
            <Styled.FilterLabel>
              {filter}
            </Styled.FilterLabel>
          </Styled.Filter>
        )
      })}
    </Styled.FilterWrapper>
  )
}