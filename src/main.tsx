import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Normalize } from 'styled-normalize';

import { IntlWrapper } from '@shared';

import './index.css';
import { router } from 'AppRouter';

createRoot(document.getElementById('root')!).render(
  <>
    <Normalize />
    <IntlWrapper>
      <RouterProvider router={router} />
    </IntlWrapper>
  </>,
);
