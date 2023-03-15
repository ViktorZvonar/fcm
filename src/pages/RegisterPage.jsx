import Notiflix from 'notiflix';

import RegisterForm from 'components/RegisterForm/RegisterForm';

import { useSelector, useDispatch } from 'react-redux';

import { selectAuthError } from 'redux/selectors';

import { signUpOperation, nullStatus } from 'redux/auth/authOperations';

import { Box, Typography } from '@mui/material';

import { useEffect } from 'react';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(selectAuthError);

  useEffect(() => {
    if (status) {
      Notiflix.Notify.init({
        width: '400px',
        position: 'right-top',
        timeout: 5000,
      });
      Notiflix.Notify.info(message);
      Notiflix.Notify.warning(
        `Please follow the instructitons under the input fields`
      );
      dispatch(nullStatus());
    }
  }, [status, message, dispatch]);

  const onRegister = data => {
    dispatch(signUpOperation(data));
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
        Please provide data to register
      </Typography>
      <RegisterForm onSubmit={onRegister} />
    </Box>
  );
};

export default RegisterPage;
