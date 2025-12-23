import { createAsyncThunk, createSlice, PayloadAction, SerializedError } from "@reduxjs/toolkit";

import { loginFetch, TLoginRequest, type TLoginData }   from '@/shared/libs/fetch/fetch'

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
  userId:    string;
  email:     string;
  firstName: string;
  lastName:  string;
  isLoading: boolean;
  error?:    SerializedError;
}

const userSliceInitialState: TUserSliceInitialState = {
  userId:    '',
  email:     '',
  firstName: '',
  lastName:  '',
  isLoading: false,
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
          state.error    = action.error;

          console.error('Login failed:', action.error.message);
        })
    }
})