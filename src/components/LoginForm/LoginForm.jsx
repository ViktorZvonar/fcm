import { useState } from 'react';
import {
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Stack,
} from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';

import { Form } from 'shared/Form.styled';

import PropTypes from 'prop-types';

const LoginForm = ({ onSubmit }) => {
  const initialState = {
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
    onSubmit(state);
    setState({ ...initialState });
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
    <Stack
      sx={{
        marginRight: 'auto',
        marginLeft: 'auto',
      }}
    >
      <Form
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          sx={{ marginBottom: '40px' }}
          name="email"
          type="email"
          label="Email"
          value={state.email}
          onChange={handleChange}
          required
          helperText="Provide valid email here"
        />

        <TextField
          sx={{ marginBottom: '40px' }}
          name="password"
          type={type}
          label="Password"
          value={state.password}
          onChange={handleChange}
          required
          helperText="Password must be numbers AND digits"
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
          Log in
        </Button>
      </Form>
    </Stack>
  );
};

export default LoginForm;

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
