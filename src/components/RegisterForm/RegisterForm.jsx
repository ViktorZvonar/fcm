import { useState } from 'react';

import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './RegisterForm.module.css';

const RegisterForm = ({ onSubmit }) => {
  const initialState = {
    name: '',
    email: '',
    password: '',
  };

  const [state, setState] = useState({ ...initialState });

  const nameInputId = nanoid();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

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
      <label className={css.label} htmlFor={nameInputId}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces"
          value={state.name}
          id={nameInputId}
          onChange={handleChange}
          required
        />
      </label>
      <label className={css.label} htmlFor={nameInputId}>
        Email
        <input
          className={css.input}
          type="email"
          name="email"
          title="Email must contain @"
          value={state.email}
          id={emailInputId}
          onChange={handleChange}
          required
        />
      </label>
      <label className={css.label} htmlFor={nameInputId}>
        Password
        <input
          className={css.input}
          type="password"
          name="password"
          title="Password must be digits or leters and can contain spaces, dashes, parentheses"
          value={state.password}
          id={passwordInputId}
          onChange={handleChange}
          required
        />
      </label>

      <button className={css.btn} type="submit">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
