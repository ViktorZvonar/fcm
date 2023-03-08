import css from './NavbarAuth.module.css';

import { NavLink } from 'react-router-dom';

const getClassName = ({ isActive }) => {
  const className = isActive ? `${css.link} ${css.active}` : css.link;
  return className;
};

const NavBarAuth = () => {
  return (
    <div>
      <NavLink className={getClassName} to="/register">
        Register
      </NavLink>
      <NavLink className={getClassName} to="/login">
        Log in
      </NavLink>
    </div>
  );
};

export default NavBarAuth;
