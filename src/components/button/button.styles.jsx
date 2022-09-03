import styled from 'styled-components';

export const BaseButton = styled.button`
  min-width: 50px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 12px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Oswald', sans-serif;
  font-weight: bolder;
  letter-spacing: 3px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const AddButton = styled(BaseButton)`
  background-color: #1ea4ce;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: lightgray;
  color: #357ae8;
  border: 1px solid black;

  &:hover {
    background-color: gray;
    color: #1ea4ce;
    border: none;
  }
`;
