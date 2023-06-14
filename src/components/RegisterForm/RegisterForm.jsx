import { useState } from 'react';

import PropTypes from 'prop-types';

import { Button, InputAdornment, IconButton } from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';

import { StyledTextField } from '../../shared/TextField.styled';

import { Form } from '../../shared/Form.styled';

const RegisterForm = ({ onSubmit }) => {
  const initialState = {
    name: '',
    email: '',
    password: '',
  };

  const [state, setState] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
  };

  const [eye, setEye] = useState(false);
  const [isType, setIsType] = useState(true);
  const type = isType ? 'password' : 'text';

  const handleMouseUpPassword = e => {
    e.preventDefault();
    setIsType(true);
    setEye(false);
  };

  const handleMouseDownPassword = e => {
    e.preventDefault();
    setIsType(false);
    setEye(true);
  };

  return (
    <Form style={{ width: '100%' }} onSubmit={handleSubmit}>
      <StyledTextField
        name="name"
        type="text"
        label="Your name"
        value={state.name}
        onChange={handleChange}
        required
        helperText="Provide your name"
        autoComplete="current"
      />

      <StyledTextField
        name="email"
        type="email"
        label="Your email"
        value={state.email}
        onChange={handleChange}
        required
        helperText="Provide the valid email here - example@example.com"
        autoComplete="current"
      />

      <StyledTextField
        name="password"
        type={type}
        label="Password"
        value={state.password}
        onChange={handleChange}
        required
        helperText="The password must be minimum 7 letters AND digits"
        autoComplete="current"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
              >
                {eye ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          marginRight: 'auto',
          marginLeft: 'auto',
          width: '100px',
        }}
      >
        Register
      </Button>
    </Form>
  );
};

export default RegisterForm;

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
