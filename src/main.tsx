import { createRoot } from 'react-dom/client';
import { Normalize } from 'styled-normalize';

import { AppProviders } from '@common/providers';

import { AppRouter } from './AppRouter';
import { GlobalStyles } from './GlobalStyles';

createRoot(document.getElementById('root')!).render(
  <>
    <Normalize />
    <AppProviders>
      <GlobalStyles />
      <AppRouter />
    </AppProviders>
  </>,
);
