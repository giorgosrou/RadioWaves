import styled from "styled-components";
import AudioPlayerComponent from 'react-h5-audio-player';

export const AudioBar = styled(AudioPlayerComponent)`
    background-color: rgba(0, 0, 0, 0.5);;
    display: flex;
    padding: 0.25em 0.75em;
    border-bottom: 3px solid purple;
    width: 100%;
    font-weight: lighter;

    @media (max-width: 768px) {
        border-bottom: 2px solid purple;
        padding: 0.2em 0.5em;
        position: fixed;
        bottom: 0;
        left: 0;
        margin: 10px;
        width: 100%;
    }
    
    
`;

export const AudioContainer = styled.div`
    display: flex;
    width: 700px;
    margin-bottom:10px;

    @media (max-width: 768px) {
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }
`;