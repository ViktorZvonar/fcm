import { useState } from 'react';

import { Button, TextField } from '@mui/material';

import { useEffect } from 'react';

import {
  fetchAllContacts,
  fetchAddContact,
} from 'redux/contacts/contactsOperations';

import { nanoid } from 'nanoid';

import { Form } from 'shared/Form.styled';

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
    <Form onSubmit={handleSubmit}>
      <TextField
        sx={{ marginBottom: '40px' }}
        name="name"
        type="text"
        label="Name"
        value={state.name}
        id={nameInputId}
        onChange={handleChange}
        required
        helperText="Provide contact's name"
      />

      <TextField
        sx={{ marginBottom: '40px' }}
        name="number"
        type="tel"
        label="Number"
        value={state.number}
        id={phoneInputId}
        onChange={handleChange}
        required
        helperText="Phone number can cantain - or / and can start with +"
      />

      <Button
        type="submit"
        variant="contained"
        size="small"
        color="secondary"
        sx={{
          marginRight: 'auto',

          width: '200px',
        }}
      >
        Add contact
      </Button>
    </Form>
  );
};

export default ContactForm;
