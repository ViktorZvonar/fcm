import { useSelector } from 'react-redux';

import { Box } from '@mui/material';

import { selectIsAuth } from 'redux/selectors';

import NavBarMenu from './NavbarMenu/NavbarMenu';
import NavbarUser from './NavbarUser/NavbarUser';

const Navbar = () => {
  const isLogin = useSelector(selectIsAuth);

  return (
    <Box
      sx={{
        padding: '0 15px',
        marginBottom: '10px',
        backgroundColor: '#1976d2',
        boxShadow: '0px 0px 20px 5px #1976d2',
        '@media (min-width: 600px)': {
          padding: '15px 15px',
        },
      }}
    >
      {isLogin ? <NavbarUser /> : <NavBarMenu />}
    </Box>
  );
};

export default Navbar;
