import { useState } from 'react';

import PropTypes from 'prop-types';
import css from './RegisterForm.module.css';

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

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label} htmlFor="">
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          required
        />
      </label>
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
