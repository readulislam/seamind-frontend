import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api, { commonThenResult } from '../api/index';

export const register = createAsyncThunk('auth/register', async (data, { rejectWithValue }) => {
  try {
    const response = await api.post('/auth/register', data);
    return commonThenResult(response);
  } catch (error) {
    console.log(error);
    throw error;
  }
});
export const logIn = createAsyncThunk('auth/login', async (data, { rejectWithValue }) => {
  try {
    const response = await api.post('/auth/login', data);
    return commonThenResult(response);
  } catch (error) {
    console.log(error);
    throw error;
  }
});

// common step for handling authentication

const authFulfilled = (state, action) => {
  state.user = {};
  state.tokens = {};
  const { password, ...rest } = action.payload.user;
  state.loading = false;
  state.user = rest;
  state.tokens = action.payload.tokens;
  state.error = '';
  state.isLoggedIn = true;
};

const initialState = {
  user: {},
  tokens: {},
  loading: false,
  error: '',
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut(state, action) {
      state.user = {};
      state.tokens = {};
      state.isLoggedIn = false;
    },
  },
  extraReducers(builder) {
    builder // register process
      .addCase(register.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        authFulfilled(state, action);
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Login process
      .addCase(logIn.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        authFulfilled(state, action);
      })
      .addCase(logIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
