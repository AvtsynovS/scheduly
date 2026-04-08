import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Normalize } from 'styled-normalize';

import { AppProviders } from '@common/providers';

import { router } from './AppRouter';
import { GlobalStyles } from './GlobalStyles';

createRoot(document.getElementById('root')!).render(
  <>
    <Normalize />
    <AppProviders>
      <GlobalStyles />
      <RouterProvider router={router} />
    </AppProviders>
  </>,
);
