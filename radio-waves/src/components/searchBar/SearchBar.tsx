import { useState } from 'react';
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm.trim());
    setSearchTerm('');
  };

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <Styled.Input
        type="text"
        placeholder="Search stations"
        value={searchTerm}
        onChange={handleChange}
      />
      <Button content={<BiSearch size={14}/>} onClick={() => handleSubmit} />
    </Styled.Form>
  )
}