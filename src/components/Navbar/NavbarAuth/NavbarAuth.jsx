// import css from './NavbarAuth.module.css';

import { NavLink } from 'react-router-dom';

const NavBarAuth = () => {
  return (
    <div>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log in</NavLink>
    </div>
  );
};

export default NavBarAuth;
