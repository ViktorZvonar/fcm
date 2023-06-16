import { useSelector, useDispatch } from 'react-redux';

import { logOutOperation } from 'redux/auth/authOperations';

import { selectUser } from 'redux/selectors';

import { Box, Button, Typography, IconButton } from '@mui/material';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import LogoutIcon from '@mui/icons-material/Logout';

const NavbarUser = () => {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const onLogout = () => {
    dispatch(logOutOperation());
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
    >
      <Typography sx={{ color: 'white' }}>{name}</Typography>
      {isMobile ? (
        <IconButton onClick={onLogout} color="secondary">
          <LogoutIcon />
        </IconButton>
      ) : (
        <Button
          onClick={onLogout}
          type="button"
          variant="contained"
          size="small"
          color="secondary"
        >
          Log out
        </Button>
      )}
    </Box>
  );
};

export default NavbarUser;
