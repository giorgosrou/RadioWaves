import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi'
import { Button } from '../button';
import * as Styled from './styled';

export type SearchBarProps = {
  onSearch: (searchTerm: string) => void;
}

export const SearchBar = ({onSearch}:SearchBarProps) => {

  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    onSearch(searchTerm.trim());
    setSearchTerm('');
  };

  return (
    <Styled.Form>
      <Styled.Input
        type="text"
        placeholder="Search stations"
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <Button content={<BiSearch size={14}/>} onClick={handleSubmit} />
    </Styled.Form>
  )
}