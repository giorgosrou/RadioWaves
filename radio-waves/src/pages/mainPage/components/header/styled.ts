import styled from "styled-components";
import AudioPlayerComponent from 'react-h5-audio-player';

export const HeaderContainer = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    background: linear-gradient(to bottom, rgba(25, 20, 20, 0.9), rgba(0, 0, 0, 0.7));
    justify-items: center;
    justify-content: center;
    z-index: 1000;
    
`;

export const ItemsContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    margin: 20px;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 768px) {
        flex-direction: row;
    }

    @media (max-width: 767px) {
        flex-direction: column; 
    }
`;

export const AudioPlayer = styled(AudioPlayerComponent)`
    background-color: #f2f2f2;
    display: flex;
    color: #B3B3B3;
    border-radius: 10px;
    padding: 0.10em 0.40em;

    width: 100%;
`;
