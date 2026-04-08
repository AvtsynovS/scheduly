import { IntlWrapper } from './IntlProvider/IntlWrapper';
import { TanQueryClientProvider } from './QueryClientProvider/QueryClientProvider';
import { ThemeWrapper } from './ThemeProvider/ThemeWrapper';

import type { PropsWithChildren } from 'react';

export const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <ThemeWrapper>
      <IntlWrapper>
        <TanQueryClientProvider>{children}</TanQueryClientProvider>
      </IntlWrapper>
    </ThemeWrapper>
  );
};
