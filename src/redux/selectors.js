// export const getContacts = store => store.contacts;

export const getFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts.items;
  }

  const normalizedFilter = filter.toLowerCase();
  const result = contacts.items.filter(({ name, number }) => {
    const normalizedName = name.toLowerCase();
    const filteredNumber = number;
    return (
      normalizedName.includes(normalizedFilter) ||
      filteredNumber.includes(normalizedFilter)
    );
  });

  return result;
};

export const getFilter = ({ filter }) => filter;
