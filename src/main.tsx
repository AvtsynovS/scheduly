import { createRoot } from 'react-dom/client';
import { Normalize } from 'styled-normalize';

import { AppProviders } from '@app';

import { AppRouter } from './AppRouter';

import '@shared/theme/tokens';

createRoot(document.getElementById('root')!).render(
  <>
    <Normalize />
    <AppProviders>
      <AppRouter />
    </AppProviders>
  </>,
);
