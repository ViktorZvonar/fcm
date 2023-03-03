import { useState } from 'react';

import { useEffect } from 'react';

import {
  fetchAllContacts,
  fetchAddContact,
} from 'redux/contacts/contactsOperations';

import { nanoid } from 'nanoid';

import css from './Form.module.css';

import { useSelector, useDispatch } from 'react-redux';

import { getFilteredContacts } from 'redux/selectors';

const Form = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const onAddContact = payload => {
    const normalizedName = payload.name.toLowerCase();

    contacts.find(
      contact =>
        contact.name.toLowerCase() === normalizedName ||
        contact.number === payload.number
    )
      ? alert(`This contact is already in your book.`)
      : dispatch(fetchAddContact(payload)) && setState({ ...initialState });
  };

  const initialState = {
    name: '',
    number: '',
  };

  const [state, setState] = useState({ ...initialState });

  const nameInputId = nanoid();
  const phoneInputId = nanoid();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAddContact(state);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label} htmlFor={nameInputId}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={state.name}
          id={nameInputId}
          onChange={handleChange}
          required
        />
      </label>
      <label className={css.label} htmlFor={nameInputId}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={state.number}
          id={phoneInputId}
          onChange={handleChange}
          required
        />
      </label>

      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default Form;
