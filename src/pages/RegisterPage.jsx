import Notiflix from 'notiflix';

import RegisterForm from 'components/RegisterForm/RegisterForm';
import image from '../assets/photo-1.jpeg';

import { useSelector, useDispatch } from 'react-redux';

import { selectAuthError } from 'redux/selectors';

import { signUpOperation, nullStatus } from 'redux/auth/authOperations';

import { Box, Stack, Typography } from '@mui/material';

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
    <Stack
      padding="30px 0"
      display="flex"
      flexDirection={{ xs: 'column', sm: 'column', md: 'row' }}
      alignItems="center"
      justifyContent="space-evenly"
    >
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
              md: '18px',
              lg: '20px',
            },
            textTransform: 'uppercase',
            color: '#1976d2',
            borderRadius: '5px',
            boxShadow: '0px 0px 20px 5px orange',
            backgroundColor: 'white',
          }}
          component="h1"
        >
          Spend time with your friends...
        </Typography>
        <RegisterForm onSubmit={onRegister} />
      </Box>
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
    </Stack>
  );
};

export default RegisterPage;
