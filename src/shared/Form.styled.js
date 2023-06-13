import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 15px;
  width: 90%;
  box-shadow: 0px 0px 20px 5px #1976d2;
  border-radius: 5px;
  margin-bottom: 40px;
  @media (min-width: 600px) {
    width: 60%;
  }
`;
