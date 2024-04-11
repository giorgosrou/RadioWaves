import { Logo } from '../../components/logo';
import { Stations } from '../../modules/stations';
import { MusicQuote } from './components/musicQuote';


export const MainPage = () => {
  return (
    <>
      <Logo/>
      <MusicQuote/>
      <Stations/>
    </>
  )
}