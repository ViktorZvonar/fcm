import { useState } from 'react';

import PropTypes from 'prop-types';
import css from './LoginForm.module.css';

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

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label} htmlFor="">
        Email
        <input
          className={css.input}
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          required
        />
      </label>
      <label className={css.label} htmlFor="">
        Password
        <input
          className={css.input}
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          autoComplete="true"
          required
        />
      </label>

      <button className={css.btn} type="submit">
        Log in
      </button>
    </form>
  );
};

export default LoginForm;

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
