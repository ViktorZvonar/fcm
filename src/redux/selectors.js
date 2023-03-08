export const selectFilteredContacts = ({ contacts, filter }) => {
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

export const selectFilter = ({ filter }) => filter;

export const selectAuthError = ({ auth }) => auth.error || [];
export const selectIsAuth = ({ auth }) => auth.isLogin;
export const selectUser = ({ auth }) => auth.user;
