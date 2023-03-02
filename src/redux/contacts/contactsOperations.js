import * as api from './../../shared/services/apiContacts';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.fetchContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addContact(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchDeleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// import * as api from './../../shared/services/apiContacts';

// import {
//   fetchAllContactsLoading,
//   fetchAllContactsSuccess,
//   fetchAllContactsError,
//   fetchAddContactLoading,
//   fetchAddContactSuccess,
//   fetchAddContactError,
//   fetchDeleteContactLoading,
//   fetchDeleteContactSuccess,
//   fetchDeleteContactError,
// } from './contactsActions';

// export const fetchAllContacts = () => {
//   const func = async dispatch => {
//     try {
//       dispatch(fetchAllContactsLoading());
//       const data = await api.getAllContacts();
//       dispatch(fetchAllContactsSuccess(data));
//     } catch ({ response }) {
//       dispatch(fetchAllContactsError(response.data.message));
//     }
//   };
//   return func;
// };

// export const fetchAddContact = data => {
//   const func = async dispatch => {
//     try {
//       dispatch(fetchAddContactLoading());
//       const result = await api.addContact(data);
//       dispatch(fetchAddContactSuccess(result));
//     } catch ({ response }) {
//       dispatch(fetchAddContactError(response.data.message));
//     }
//   };
//   return func;
// };

// export const fetchDeleteContact = id => {
//   const func = async dispatch => {
//     try {
//       dispatch(fetchDeleteContactLoading());
//       await api.deleteContact(id);
//       dispatch(fetchDeleteContactSuccess(id));
//     } catch (error) {
//       dispatch(fetchDeleteContactError(error.message));
//     }
//   };
//   return func;
// };
