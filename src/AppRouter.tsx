import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import { PrivateRoute, RootRedirectPage } from '@app/routes';
import { AuthPage } from '@modules/auth';
import { businessRoutes } from '@modules/business';
import { ErrorPage } from '@shared';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PrivateRoute>
        <Outlet />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <RootRedirectPage />,
      },
      {
        path: 'business',
        children: [...businessRoutes],
      },
    ],
  },
  { path: '/auth', element: <AuthPage /> },
  { path: '/error/:status', element: <ErrorPage /> },
  { path: '*', element: <ErrorPage /> },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
