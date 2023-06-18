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
      display="flex"
      flexDirection={{ xs: 'column', sm: 'column', md: 'row' }}
      alignItems="center"
      justifyContent="space-evenly"
      sx={{
        padding: {
          xs: '20px',
          md: '50px',
        },
      }}
    >
      <Box
        component="img"
        src={image}
        alt="login-friends"
        sx={{
          width: {
            xs: '90%',
            sm: '90%',
            md: '50%',
            lg: '50%',
          },

          height: '100%',
          objectFit: 'contain',
          borderRadius: {
            xs: '50px',
            sm: '50px',
            md: '5px',
            lg: '5px',
          },
          boxShadow: '5px 5px 15px 5px #000',
          marginBottom: {
            xs: '20px',
            sm: '20px',
            md: '0px',
            lg: '0px',
          },
        }}
      />
      <Box
        sx={{
          width: {
            xs: '90%',
            sm: '90%',
            md: '30%',
            lg: '30%',
          },
        }}
      >
        <Typography
          sx={{
            padding: '5px',
            textAlign: 'center',
            marginBottom: '40px',
            fontSize: {
              xs: '12px',
              sm: '15px',
              md: '18px',
              lg: '18px',
            },
            textTransform: 'uppercase',
            color: '#1976d2',
            borderRadius: '5px',
            boxShadow: '0px 0px 20px 5px orange',
            backgroundColor: 'white',
          }}
          component="h1"
        >
          Be there... Be a friend...
        </Typography>
        <LoginForm onSubmit={onLogin} />
      </Box>
    </Stack>
  );
};

export default LoginPage;
