import styled from "styled-components";
import AudioPlayerComponent from "react-h5-audio-player";

export const AudioPlayer = styled(AudioPlayerComponent)`
    background-color: white;
    display: flex;
    color: #B3B3B3;
    padding: 0.25em 0.75em;
    border-radius: 10px;
    width: 100%;
`;
export const Container = styled.div`
    display: flex;
    width: 250px;
    height: 60px;
    margin: 10px;
    justify-content: center;
`
