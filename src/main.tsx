import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Normalize } from 'styled-normalize';

import { IntlWrapper, ThemeWrapper } from '@shared';

import { GlobalStyles } from './GlobalStyles';

import { router } from 'AppRouter';

createRoot(document.getElementById('root')!).render(
  <>
    <Normalize />
    <IntlWrapper>
      <ThemeWrapper>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeWrapper>
    </IntlWrapper>
  </>,
);
