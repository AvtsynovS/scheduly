import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { MainLayout } from '@app';
import { AuthPage } from '@modules/auth';
import { DashboardPage } from '@modules/dashboard';
import { ErrorPage } from '@shared';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
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

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
