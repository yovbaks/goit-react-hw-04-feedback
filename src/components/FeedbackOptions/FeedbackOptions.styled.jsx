import styled from 'styled-components';

export const Button = styled.button`
  min-width: 80px;
  font-size: 18px;
  font-weight: 500;
  cursor:pointer;
  padding:5px;

  border: 2px solid black;
  border-radius: 10%;
  &:not(:last-child) {
    margin-right: 5px;
  }
  &:hover {
    background-color: #b0c5f0;
  }
  &:active{
    background-color: #335cae;
  }
`;
