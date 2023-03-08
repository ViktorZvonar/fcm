import css from './Navbar.module.css';

import { useSelector } from 'react-redux';

import { selectIsAuth } from 'redux/selectors';

import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavBarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';

const Navbar = () => {
  const isLogin = useSelector(selectIsAuth);

  return (
    <div className={css.wrapper}>
      {isLogin && <NavbarMenu />}
      {isLogin ? <NavbarUser /> : <NavBarAuth />}
    </div>
  );
};

export default Navbar;
