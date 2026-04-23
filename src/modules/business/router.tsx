import { DashboardPage } from './dashboard';
import { ServicesPage } from './services';

export const businessRoutes = [
  { index: true, element: <DashboardPage /> },
  { path: 'dashboard', element: <DashboardPage /> },
  { path: 'services', element: <ServicesPage /> },
];
