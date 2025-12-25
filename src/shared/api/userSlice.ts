import { createAsyncThunk, createSlice, SerializedError } from "@reduxjs/toolkit";

import { loginFetch, sessionFetch, type TLoginData }      from '@/shared/libs/fetch/fetch'

export const recoverSession = createAsyncThunk(
  'user/recoverSession',
  async (token: string, thunkAPI) => {
    try {
      const response = await sessionFetch(token);
      return response;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
)

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (data: TLoginData, thunkAPI) => {
    try {
      const response = await loginFetch(data);
      return response;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
)

interface TUserSliceInitialState {
  isLoading: boolean;
  firstName: string;
  lastName:  string;
  userId:    string;
  email:     string;
  error?:    string;
}

const userSliceInitialState: TUserSliceInitialState = {
  isLoading: false,
  firstName: '',
  lastName:  '',
  userId:    '',
  email:     '',
};

export const userSlice = createSlice({
    name:         "user",
    initialState: userSliceInitialState,
    reducers:     {},
    extraReducers: (builder) => {
      builder
        .addCase(loginUser.pending, state => {
          state.isLoading = true;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error     = undefined;

          state.userId    = action.payload.userId;
          state.email     = action.payload.email;
          state.firstName = action.payload.firstName;
          state.lastName  = action.payload.lastName;

          sessionStorage.setItem('token', action.payload.token);
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.isLoading = false;
          state.error    = action.error.message;

          console.error('Login failed:', action.error.message);
        })
        
        .addCase(recoverSession.pending, state => {
          state.isLoading = true;
        })
        .addCase(recoverSession.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error     = undefined;

          state.userId    = action.payload.userId;
          state.email     = action.payload.email;
          state.firstName = action.payload.firstName;
          state.lastName  = action.payload.lastName;

          sessionStorage.setItem('token', action.payload.token);
        })
        .addCase(recoverSession.rejected, (state, action) => {
          state.isLoading = false;
          state.error    = action.error.message;

          console.error('Session recovery failed:', action.error.message);
        })
    }
})