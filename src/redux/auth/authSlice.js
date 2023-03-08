import { createSlice } from '@reduxjs/toolkit';

import {
  signUpOperation,
  logInOperation,
  logOutOperation,
  currentOperation,
} from './authOperations';

const initialState = {
  user: {},
  isLogin: false,
  token: '',
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signUpOperation.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [signUpOperation.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload.user;
      store.token = payload.token;
      store.isLogin = true;
    },
    [signUpOperation.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [logInOperation.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [logInOperation.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload.user;
      store.token = payload.token;
      store.isLogin = true;
    },
    [logInOperation.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [logOutOperation.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [logOutOperation.fulfilled]: store => {
      store.loading = false;
      store.user = {};
      store.token = '';
      store.isLogin = false;
    },
    [logOutOperation.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [currentOperation.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [currentOperation.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload;
      store.isLogin = true;
    },
    [currentOperation.rejected]: (store, { payload }) => {
      store.loading = false;
      store.token = '';
      store.error = payload;
    },
  },
});

export default authSlice.reducer;
