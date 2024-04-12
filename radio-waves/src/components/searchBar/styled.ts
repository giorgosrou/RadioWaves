import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
    gap: 1px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  display: flex;
    background-color: #191414;
    color: white;

  &::placeholder {
      color: #999; 
      font-weight: lighter;
      font-family: "roboto";
  }

  &:focus {
    border-color: purple;
  }
`;