import React, { Suspense } from 'react';
import { Route, Routes }   from 'react-router-dom';

import { HomePage }        from '@/pages/HomePage';
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
            </Routes>
        </Suspense>
    );
};