import Notiflix from 'notiflix';

import RegisterForm from 'components/RegisterForm/RegisterForm';

import { useSelector, useDispatch } from 'react-redux';

import { selectAuthError } from 'redux/selectors';

import { signUpOperation } from 'redux/auth/authOperations';

import { Box, Typography } from '@mui/material';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { status } = useSelector(selectAuthError);

  const onRegister = data => {
    status
      ? Notiflix.Notify.failure(
          `User validation failed. Please follow the instructitons under the input fields`
        )
      : dispatch(signUpOperation(data));
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
