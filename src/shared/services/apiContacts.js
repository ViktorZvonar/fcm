import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://638f3ac89cbdb0dbe320c659.mockapi.io/contacts',
});

export const fetchContacts = async () => {
  const { data } = await contactsInstance.get('/');
  return data;
};

export const addContact = async data => {
  const { data: result } = await contactsInstance.post('/', data);
  return result;
};

export const deleteContact = async id => {
  const { data } = await contactsInstance.delete(`/${id}`);
  return data;
};
