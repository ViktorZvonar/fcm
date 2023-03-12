// import { createReducer } from '@reduxjs/toolkit';

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

// const initialState = {
//   items: [],
//   loading: false,
//   error: null,
// };

// const contactsReducer = createReducer(initialState, {
//   [fetchAllContactsLoading]: store => {
//     store.loading = true;
//     store.error = null;
//   },

//   [fetchAllContactsSuccess]: (store, { payload }) => {
//     store.loading = false;
//     store.items = payload;
//   },
//   [fetchAllContactsError]: (store, { payload }) => {
//     store.loading = false;
//     store.error = payload;
//   },

//   [fetchAddContactLoading]: store => {
//     store.loading = true;
//     store.error = null;
//   },

//   [fetchAddContactSuccess]: (store, { payload }) => {
//     store.loading = false;
//     store.items.push(payload);
//   },
//   [fetchAddContactError]: (store, { payload }) => {
//     store.loading = false;
//     store.error = payload;
//   },

//   [fetchDeleteContactLoading]: store => {
//     store.loading = true;
//     store.error = null;
//   },

//   [fetchDeleteContactSuccess]: (store, { payload }) => {
//     // store.loading = false;
//     // const index = store.items.findIndex(item => item.id === payload);
//     // store.items.splice(index, 1);

//     store.loading = false;
//     store.items = store.items.filter(item => item.id !== payload);
//   },
//   [fetchDeleteContactError]: (store, { payload }) => {
//     store.loading = false;
//     store.error = payload;
//   },
// });

// export default contactsReducer;
