import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  justify-content: start;
  width: 100%;

  margin-bottom: 10px;

  background-color: #1976d2;
  box-shadow: 0px 0px 20px 5px #1976d2;

  @media (min-width: 600px) {
    justify-content: space-evenly;
    padding: 15px 15px;
  }
`;
