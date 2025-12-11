import React, { Suspense } from 'react';
import { Route, Routes }   from 'react-router-dom';

import { HomePage }        from '@/pages/HomePage';
import { SignupPage }      from '@/pages/SignupPage';
import { LoginPage }       from '@/pages/LoginPage';
import { ROUTES }          from '@/shared/routes/routes';

export const AppRoutes = () => {
    return (
        <Suspense>
            <Routes>
                <Route
                  element = {<HomePage />}
                  path    = {ROUTES.HOME}
                  index
                />
                <Route
                  element = {<SignupPage />}
                  path    = {ROUTES.SIGNUP}
                />
                <Route
                  element = {<LoginPage />}
                  path    = {ROUTES.LOGIN}
                />
            </Routes>
        </Suspense>
    );
};