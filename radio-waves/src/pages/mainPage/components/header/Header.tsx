import { Station } from 'radio-browser-api';
import { Logo } from '../../../../components/logo';
import { SearchBar } from '../../../../components/searchBar';
import { AudioBar } from './audioBar/AudioBar';
import * as Styled from './styled'
import 'react-h5-audio-player/lib/styles.css';

export type HeaderProps = {
  onSearch: (searchTerm: string) => void;
  selectedStation: Station | null;
}

export const Header = ({ onSearch, selectedStation }: HeaderProps) => {

  return (
    <Styled.HeaderContainer>
      <Styled.ItemsContainer>
        <Logo />
        <AudioBar
          soundSource={selectedStation?.urlResolved}
          title={selectedStation?.name?.replaceAll('_', ' ').slice(0, 40)}
        />
        <SearchBar onSearch={onSearch} />
      </Styled.ItemsContainer>
    </Styled.HeaderContainer>
  )
}
