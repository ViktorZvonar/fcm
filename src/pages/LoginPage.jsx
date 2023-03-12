import LoginForm from './../components/LoginForm/LoginForm';

import { useSelector, useDispatch } from 'react-redux';

import { logInOperation } from 'redux/auth/authOperations';

import { selectAuthError } from 'redux/selectors';

import { Box, Typography } from '@mui/material';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(selectAuthError);

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
      {status && (
        <Typography
          sx={{
            textAlign: 'center',
            marginTop: '20px',
            textTransform: 'uppercase',
            color: 'red',
          }}
          component="h3"
        >
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default LoginPage;
