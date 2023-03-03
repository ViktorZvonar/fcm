import { NavLink } from 'react-router-dom';
import css from './NavbarMenu.module.css';

const getClassName = ({ isActive }) => {
  const className = isActive ? `${css.link} ${css.active}` : css.link;
  return className;
};

const NavbarMenu = () => {
  return (
    <ul className={css.menu}>
      <li>
        <NavLink className={getClassName} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={getClassName} to="/contacts">
          Contacts
        </NavLink>
      </li>
    </ul>
  );
};

export default NavbarMenu;
