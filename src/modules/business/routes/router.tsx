import { Navigate } from 'react-router-dom';

import { DashboardPage } from '../dashboard';
import { BusinessLayout } from '../layout/BusinessLayout';
import { ServicesPage } from '../services';
import { BusinessRedirectPage } from './BusinessRedirectPage';

export const businessRoutes = [
  {
    index: true,
    element: <BusinessRedirectPage />,
  },
  {
    path: ':businessId',
    element: <BusinessLayout />,
    children: [
      { index: true, element: <Navigate to="dashboard" replace /> },
      { path: 'dashboard', element: <DashboardPage /> },
      { path: 'records', element: <DashboardPage /> },
      { path: 'clients', element: <DashboardPage /> },
      { path: 'employees', element: <DashboardPage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'finance', element: <DashboardPage /> },
      { path: 'reports', element: <DashboardPage /> },
      { path: 'settings', element: <DashboardPage /> },
    ],
  },
];
