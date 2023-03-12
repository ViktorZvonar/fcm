import { useSelector, useDispatch } from 'react-redux';

import { logOutOperation } from 'redux/auth/authOperations';

import { selectUser } from 'redux/selectors';

import { Box, Button, Typography } from '@mui/material';

const NavbarUser = () => {
  const { email } = useSelector(selectUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logOutOperation());
  };

  return (
    <Box display="flex" justifyContent="center" gap="60px">
      <Typography color="white">{email}</Typography>
      <Button
        onClick={onLogout}
        type="button"
        variant="contained"
        size="small"
        color="secondary"
      >
        Log out
      </Button>
    </Box>
  );
};

export default NavbarUser;
