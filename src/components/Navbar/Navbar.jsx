import css from './Navbar.module.css';

import { Link } from 'react-router-dom';

import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavBarAuth from './NavbarAuth/NavbarAuth';

const Navbar = () => {
  return (
    <div className={css.wrapper}>
      <Link to="/">Logo</Link>
      <NavbarMenu />
      <NavBarAuth />
    </div>
  );
};

export default Navbar;
