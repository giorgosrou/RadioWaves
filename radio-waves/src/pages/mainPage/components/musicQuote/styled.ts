import styled from "styled-components";
// @ts-ignore
import backgroundImage from '../../../../assets/backgroundimage.jpg'


export const TextContainer = styled.div`
    background: purple;
    padding: 60px;
    border-radius: 20px;
    margin-bottom: 30px;
    margin-top: 15px;
    background-image: url(${backgroundImage});
    background-size: cover; /* Cover the entire container */
    background-position: center; /* Center the background image */
    fill-opacity: 10%;

`;
