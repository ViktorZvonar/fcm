import { useSelector } from 'react-redux';
import { Header } from './NavBar.styled';

import { selectIsAuth } from 'redux/selectors';

import NavBarMenu from './NavbarMenu/NavbarMenu';
import NavbarUser from './NavbarUser/NavbarUser';

const Navbar = () => {
  const isLogin = useSelector(selectIsAuth);

  return <Header>{isLogin ? <NavbarUser /> : <NavBarMenu />}</Header>;
};

export default Navbar;
