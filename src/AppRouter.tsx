import { createBrowserRouter } from 'react-router-dom';

import { AuthPage } from '@modules/auth';
import { DashboardPage } from '@modules/dashboard';
import { ErrorPage, Layout } from '@shared';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <DashboardPage /> },
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },
    ],
  },
  { path: '/auth', element: <AuthPage /> },
  { path: '/error/:status', element: <ErrorPage /> },
  { path: '*', element: <ErrorPage /> },
]);
