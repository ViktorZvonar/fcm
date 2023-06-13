import { useState } from 'react';
import { Link } from './NavbarMenu.styled';
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
            <MenuIcon />
          </IconButton>

          <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
            {list()}
          </Drawer>
        </>
      ) : (
        <Box display="flex" flexdirection="row" gap="100px">
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Log in</Link>
        </Box>
      )}
    </Box>
  );
};

export default NavBarMenu;
