import { useState } from 'react';
import { Stations } from '../../modules/stations';
import { Header } from './components/header';
import { MusicQuote } from './components/musicQuote';
import * as Styled from './styled'


export const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <Styled.ContentContainer>
        <MusicQuote />
        <Stations searchterm={searchTerm} />
      </Styled.ContentContainer>
    </>
  )
}