import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/services/apiAuth';

export const signUpOperation = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.signUp(data);
      return result;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data._message,
      };
      return rejectWithValue(error);
    }
  }
);

export const logInOperation = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.logIn(data);
      return result;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const logOutOperation = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.logOut();
      return result;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const currentOperation = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    const { auth } = getState();
    if (!auth.token) {
      return rejectWithValue('No token');
    }

    try {
      const result = await api.getCurrent(auth.token);
      return result;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const nullStatus = createAsyncThunk(
  'auth/noError',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.signUp(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.status);
    }
  }
);
