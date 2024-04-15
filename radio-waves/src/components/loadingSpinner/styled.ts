import styled, { keyframes } from 'styled-components';

export const spinAnimation = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const SpinnerContainer = styled.div`
    text-align: center;
`;

export const Spinner = styled.div`
  display: inline-block;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #1a202c;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spinAnimation} 1s linear infinite;
`;

export const LoadingText = styled.div`
  margin-top: 10px;
`;