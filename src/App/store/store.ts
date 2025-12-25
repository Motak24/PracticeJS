import { configureStore } from '@reduxjs/toolkit';

import { userSlice }      from '@/shared/api/userSlice';

export const store = configureStore({
    reducer: {
      user: userSlice.reducer
    },
    devTools: true,
});

export type RootState   = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;