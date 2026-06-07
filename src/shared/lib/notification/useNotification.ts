import { useContext } from 'react';

import { NotificationContext } from './NotificationContext';

export const useNotification = () => {
  const { showNotification } = useContext(NotificationContext);

  return { showNotification };
};
