import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/services/apiAuth';

export const signUpOperation = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.signUp(data);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
