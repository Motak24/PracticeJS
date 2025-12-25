import React, { useEffect } from 'react';

import { AppRoutes }        from './routes/Routes';
import { recoverSession }   from '@/shared/api/userSlice';
import {
  useAppDispatch,
  useAppSelector
}                           from '@/shared/libs/hooks/rtkHooks';

import '@/App/styles/index.scss';

export const App = () => {
  const dispatch = useAppDispatch();

  const sessionToken = sessionStorage.getItem('token');

  const currentUserId = useAppSelector(state => state.user.userId);

  useEffect(() => {
    if (sessionToken && !currentUserId) {
      console.log('recoverSession', sessionToken, currentUserId);
      dispatch(recoverSession(sessionToken))
    }
  }, [ sessionToken ]);

  return (
    <>
      <AppRoutes />
    </>
  );
};
