import { Logo } from '../../../../components/logo';
import { SearchBar } from '../../../../components/searchBar';
import * as Styled from './styled'
import 'react-h5-audio-player/lib/styles.css';

export const Header = () => {

  const handleSearch = (searchTerm: string) => {
    console.log('Performing search for:', searchTerm);
  };

  return (
    <Styled.HeaderContainer>
      <Styled.ItemsContainer>
        <Logo />
        <SearchBar onSearch={handleSearch} />
      </Styled.ItemsContainer>
    </Styled.HeaderContainer>
  )
}