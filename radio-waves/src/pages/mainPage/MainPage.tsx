import { Stations } from '../../modules/stations';
import { Header } from './components/header';
import { MusicQuote } from './components/musicQuote';
import * as Styled from './styled'


export const MainPage = () => {
  return (
    <>
      <Header />
      <Styled.ContentContainer>
        <MusicQuote />
        <Stations />
      </Styled.ContentContainer>
    </>
  )
}