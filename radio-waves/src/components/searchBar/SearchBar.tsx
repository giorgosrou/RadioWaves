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
    const value = event.target.value;
    setSearchTerm(value);
  };

  const handleSubmit = () => {
    if (searchTerm.trim() !== '') {
      onSearch(searchTerm.trim());
      setSearchTerm('');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSubmit();
    }
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