import { IntlWrapper } from './IntlProvider/IntlWrapper';
import { TanQueryClientProvider } from './QueryClientProvider/QueryClientProvider';
import { ThemeWrapper } from './ThemeProvider/ThemeWrapper';
import { NotificationProvider } from './NotificationProvider';

import type { PropsWithChildren } from 'react';

export const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <IntlWrapper>
      <ThemeWrapper>
        <TanQueryClientProvider>
          <NotificationProvider>{children}</NotificationProvider>
        </TanQueryClientProvider>
      </ThemeWrapper>
    </IntlWrapper>
  );
};
