import Notiflix from 'notiflix';

import LoginForm from './../components/LoginForm/LoginForm';

import { useSelector, useDispatch } from 'react-redux';

import { useEffect } from 'react';

import { logInOperation, nullStatus } from 'redux/auth/authOperations';

import { selectAuthError } from 'redux/selectors';

import { Box, Typography } from '@mui/material';

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
    <Box>
      <Typography
        sx={{
          width: {
            xs: '90%',
            md: '60%',
            lg: '60%',
          },
          padding: '5px',
          textAlign: 'center',
          marginBottom: '40px',
          marginRight: 'auto',
          marginLeft: 'auto',
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
        Please fill in the form
      </Typography>
      <LoginForm onSubmit={onLogin} />
    </Box>
  );
};

export default LoginPage;
