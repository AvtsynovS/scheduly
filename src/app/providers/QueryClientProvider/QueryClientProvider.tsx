import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import type { PropsWithChildren } from 'react';

export const TanQueryClientProvider = ({ children }: PropsWithChildren) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
