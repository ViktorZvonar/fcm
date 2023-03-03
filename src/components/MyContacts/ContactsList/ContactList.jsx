import css from './ContactList.module.css';

import { fetchDeleteContact } from 'redux/contacts/contactsOperations';

import { useSelector, useDispatch } from 'react-redux';

import { getFilteredContacts } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  const onRemoveContact = id => {
    dispatch(fetchDeleteContact(id));
  };

  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li
          className={css.item}
          key={contact.id}
          name={contact.name}
          number={contact.number}
        >
          <p className={css.name}>
            {contact.name}: <span>{contact.number}</span>
          </p>
          <button
            className={css.btn}
            onClick={() => onRemoveContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
