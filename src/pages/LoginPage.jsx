import Notiflix from 'notiflix';

import LoginForm from './../components/LoginForm/LoginForm';
import image from '../assets/photo-2.jpg';

import { useSelector, useDispatch } from 'react-redux';

import { useEffect } from 'react';

import { logInOperation, nullStatus } from 'redux/auth/authOperations';

import { selectAuthError } from 'redux/selectors';

import { Stack, Box, Typography } from '@mui/material';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { status } = useSelector(selectAuthError);

  useEffect(() => {
    if (status) {
      Notiflix.Notify.init({
        width: '400px',
        position: 'right-top',
        timeout: 5000,
      });
      Notiflix.Notify.info(`No such user found`);
      Notiflix.Notify.warning(
        `Please follow the instructitons under the input fields`
      );
      dispatch(nullStatus());
    }
  }, [status, dispatch]);

  const onLogin = data => {
    dispatch(logInOperation(data));
  };

  return (
    <Stack
      padding="30px 0"
      display="flex"
      flexDirection={{ xs: 'column', sm: 'column', md: 'row' }}
      alignItems="center"
      justifyContent="space-evenly"
    >
      <Box
        component="img"
        src={image}
        alt="register-friends"
        sx={{
          width: {
            xs: '90%',
            sm: '90%',
            md: '43%',
            lg: '43%',
          },

          height: '100%',
          objectFit: 'contain',
          borderRadius: '5px',
          boxShadow: '5px 5px 15px 5px #000',
        }}
      />
      <Box
        sx={{
          width: {
            xs: '90%',
            sm: '90%',
            md: '40%',
            lg: '40%',
          },
        }}
      >
        <Typography
          sx={{
            padding: '5px',
            textAlign: 'center',
            marginBottom: '40px',
            fontSize: {
              xs: '15px',
              md: '20px',
              lg: '28px',
            },
            textTransform: 'uppercase',
            color: '#1976d2',
            borderRadius: '5px',
            boxShadow: '0px 0px 20px 5px orange',
            backgroundColor: 'white',
          }}
          component="h1"
        >
          Be a friend...
        </Typography>
        <LoginForm onSubmit={onLogin} />
      </Box>
    </Stack>
  );
};

export default LoginPage;
