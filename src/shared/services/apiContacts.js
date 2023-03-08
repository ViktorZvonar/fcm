import authInstance from './apiAuth';

const contactsInstance = authInstance;

export const fetchContacts = async () => {
  const { data } = await contactsInstance.get('/contacts');
  return data;
};

export const addContact = async data => {
  const { data: result } = await contactsInstance.post('/contacts', data);
  return result;
};

export const deleteContact = async id => {
  const { data } = await contactsInstance.delete(`/contacts/${id}`);
  return data;
};
