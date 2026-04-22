import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { MainLayout } from '@app';
import { DashboardRoute } from '@app/routes';
import { AuthPage } from '@modules/auth';
import { ServicesPage } from '@modules/business';
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
      {
        path: '/business/:businessId',
        children: [
          { index: true, element: <DashboardRoute /> },
          { path: 'services', element: <ServicesPage /> },
        ],
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
