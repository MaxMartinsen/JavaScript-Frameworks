import styled from "styled-components";

export const BaseButton = styled.button`
  background-color: white;
  border: 2px solid black;
  border-radius: 6px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color linear 800ms;

  :hover {
    background-color: black;
    color: white;
  }
`;

export const PrimaryButton = styled(BaseButton)`
  background-color: red;
`;