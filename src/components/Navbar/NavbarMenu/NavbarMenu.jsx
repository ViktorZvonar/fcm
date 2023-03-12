import { Link } from './NavbarMenu.styled';
import { Box } from '@mui/material';

const NavBarMenu = () => {
  return (
    <Box display="flex" flexdirection="row" gap="100px">
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Log in</Link>
    </Box>
  );
};

export default NavBarMenu;
