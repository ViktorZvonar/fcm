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
      Notiflix.Notify.warning(
        `Please follow the instructitons under the input fields`
      );
      nullStatus();
    }
  }, [status]);

  const onLogin = data => {
    dispatch(logInOperation(data));
  };

  return (
    <Box paddingTop="60px">
      <Typography
        sx={{
          textAlign: 'center',
          marginBottom: '40px',
          fontSize: '28px',
          textTransform: 'uppercase',
          color: '#1976d2',
        }}
        component="h1"
      >
        Please fill in the form to log in
      </Typography>
      <LoginForm onSubmit={onLogin} />
    </Box>
  );
};

export default LoginPage;
