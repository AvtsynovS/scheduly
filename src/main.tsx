import { createRoot } from 'react-dom/client';
import './index.css';
import { Normalize } from 'styled-normalize';
import { RouterProvider } from 'react-router-dom';
import { router } from 'AppRouter';
import { IntlWrapper } from '@shared';

createRoot(document.getElementById('root')!).render(
  <>
    <Normalize />
    <IntlWrapper>
      <RouterProvider router={router} />
    </IntlWrapper>
  </>,
);
