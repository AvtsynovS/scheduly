import { createContext } from 'react';

import type { NotificationProps } from './types';

type NotificationContextType = {
  showNotification: ({ title, description }: NotificationProps) => void;
};

export const NotificationContext = createContext<NotificationContextType>({
  showNotification: () => {
    throw new Error();
  },
});
