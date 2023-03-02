import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from './contacts/contactsSlice';

import filterReducer from './filter/filterSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store;
