import { Logo } from '../../../../components/logo';
import { SearchBar } from '../../../../components/searchBar';
import * as Styled from './styled'
import 'react-h5-audio-player/lib/styles.css';

export type HeaderProps = {
  onSearch: (searchTerm: string) => void;
}

export const Header = ({ onSearch }: HeaderProps) => {

  return (
    <Styled.HeaderContainer>
      <Styled.ItemsContainer>
        <Logo />
        <SearchBar onSearch={onSearch} />
      </Styled.ItemsContainer>
    </Styled.HeaderContainer>
  )
}
