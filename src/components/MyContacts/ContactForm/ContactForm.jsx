import Notiflix from 'notiflix';

import { useState, useEffect } from 'react';

import { Button } from '@mui/material';

import { StyledTextField } from 'shared/styles/TextField.styled';

import {
  fetchAllContacts,
  fetchAddContact,
} from 'redux/contacts/contactsOperations';

import { nanoid } from 'nanoid';

import { Form } from 'shared/styles/Form.styled';

import { useSelector, useDispatch } from 'react-redux';

import { selectFilteredContacts } from 'redux/selectors';

const ContactForm = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const onAddContact = payload => {
    const normalizedName = payload.name.toLowerCase();

    Notiflix.Notify.init({
      width: '400px',
      position: 'right-top',
      timeout: 5000,
    });

    contacts.find(
      contact =>
        contact.name.toLowerCase() === normalizedName ||
        contact.number === payload.number
    )
      ? Notiflix.Notify.warning(`This contact is already in your book.`)
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
    <Form
      style={{
        width: '100%',
      }}
      onSubmit={handleSubmit}
    >
      <StyledTextField
        name="name"
        type="text"
        label="A friend's name"
        value={state.name}
        id={nameInputId}
        onChange={handleChange}
        required
        helperText="Provide contact's name"
        autoComplete="current"
      />

      <StyledTextField
        sx={{ marginBottom: '40px' }}
        name="number"
        type="tel"
        label="A friend's number"
        value={state.number}
        id={phoneInputId}
        onChange={handleChange}
        required
        helperText="Phone number can contain - or / and can start with +"
        autoComplete="current"
      />

      <Button
        type="submit"
        variant="contained"
        size="small"
        color="secondary"
        sx={{
          marginRight: 'auto',
          width: '100%',
        }}
      >
        Add contact
      </Button>
    </Form>
  );
};

export default ContactForm;
