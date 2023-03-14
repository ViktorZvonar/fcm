import { useState } from 'react';

import PropTypes from 'prop-types';

import { Button, TextField, InputAdornment, IconButton } from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';

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
    <Form
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
      onSubmit={handleSubmit}
    >
      <TextField
        sx={{ marginBottom: '40px' }}
        name="name"
        type="text"
        label="Name"
        value={state.name}
        onChange={handleChange}
        required
        helperText="Provide your name"
      />

      <TextField
        sx={{ marginBottom: '40px' }}
        name="email"
        type="email"
        label="Email"
        value={state.email}
        onChange={handleChange}
        required
        helperText="Provide the valid email here - example@example.com"
      />

      <TextField
        sx={{ marginBottom: '40px' }}
        name="password"
        type={type}
        label="Password"
        value={state.password}
        onChange={handleChange}
        required
        helperText="The password must be minimum 7 letters AND digits"
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
