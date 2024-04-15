import * as Styled from './styled';

export const LoadingSpinner = () => {
  return (
    <Styled.LoaderContainer>
      <Styled.Loader />
      <p>Loading...</p>
    </Styled.LoaderContainer>
  )
}