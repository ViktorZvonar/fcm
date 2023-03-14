import { createSlice } from '@reduxjs/toolkit';

import {
  signUpOperation,
  logInOperation,
  logOutOperation,
  currentOperation,
  nullStatus,
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
    [nullStatus.pending]: store => {
      store.error = null;
    },
    [nullStatus.fulfilled]: store => {
      console.log(store);
      store.error = null;
    },
    [nullStatus.rejected]: store => {
      store.error = null;
    },
  },
});

export default authSlice.reducer;
