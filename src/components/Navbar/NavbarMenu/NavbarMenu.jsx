import { useState } from 'react';
import { Link } from './NavbarMenu.styled';
import image from '../../../assets/napis-friends-1.jpeg';
import {
  Box,
  useMediaQuery,
  useTheme,
  IconButton,
  Drawer,
  List,
  ListItem,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

const NavBarMenu = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = isOpen => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(isOpen);
  };

  const list = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      width="30vh"
      height="90vh"
    >
      <List>
        {['Home', 'Register', 'Login'].map((text, index) => (
          <ListItem key={text}>
            <Link to={text === 'Home' ? '/' : `/${text.toLowerCase()}`}>
              {text}
            </Link>
          </ListItem>
        ))}
      </List>
      <Box
        sx={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          borderRadius: '50px',
          boxShadow: '5px 5px 15px 5px #000',
          width: '80%',
          height: '100%',
          margin: '10px auto',
        }}
      ></Box>
      {/* <Box
        component="img"
        src={image}
        alt="just_friends"
        sx={{
          width: '80%',
          objectFit: 'contain',
          borderRadius: '5px',
          boxShadow: '5px 5px 15px 5px #000',
          margin: '50px 20px 20px 20px',
        }}
      /> */}
    </Box>
  );

  return (
    <Box>
      {isMobile ? (
        <>
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon style={{ color: 'white' }} />
          </IconButton>

          <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
            {list()}
          </Drawer>
        </>
      ) : (
        <Box display="flex" flexdirection="row" gap="100px">
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </Box>
      )}
    </Box>
  );
};

export default NavBarMenu;
