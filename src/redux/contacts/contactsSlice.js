import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllContacts,
  fetchAddContact,
  fetchDeleteContact,
} from './contactsOperations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchAllContacts.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [fetchAllContacts.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = payload;
    },
    [fetchAllContacts.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    [fetchAddContact.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [fetchAddContact.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items.push(payload);
    },
    [fetchAddContact.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    [fetchDeleteContact.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [fetchDeleteContact.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = store.items.filter(item => item.id !== payload);
    },
    [fetchDeleteContact.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default contactsSlice.reducer;
