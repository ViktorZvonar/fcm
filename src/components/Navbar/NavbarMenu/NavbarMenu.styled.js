import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 5px;
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;

  &.active {
    box-shadow: 0px 0px 20px 5px orange;
    border-radius: 5px;
    background-color: #fff;
    color: #1976d2;
  }
`;
