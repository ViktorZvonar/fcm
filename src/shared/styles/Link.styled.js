import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: block;
  font-size: 14px;
  padding: 5px 20px 5px 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 3px 3px grey;
  background-color: #1976d2;
  color: white;
  text-decoration: none;
  font-weight: bold;
  &:hover,
  :focus {
    background-color: #fff;
    color: #1976d2;
  }

  &.active {
    box-shadow: 0px 0px 20px 5px orange;
    border-radius: 5px;
    background-color: #fff;
    color: #1976d2;
  }
`;

export const LinkInscription = styled(Link)`
  display: block;
  font-size: inherit;
  padding: 5px 15px;
  text-decoration: none;
  background-color: transparent;
  box-shadow: none;

  &:hover {
    background-color: #1976d2;
    color: white;
  }

  &:focus {
    border-radius: 5px;
    box-shadow: 0px 0px 10px #5cd3a8;
  }
`;
