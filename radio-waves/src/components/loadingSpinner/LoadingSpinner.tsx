import * as Styled from './styled';

export const LoadingSpinner = () => {
  return (
    <Styled.SpinnerContainer>
      <Styled.Spinner />
      <Styled.LoadingText>Loading...</Styled.LoadingText>
    </Styled.SpinnerContainer>
  )
}