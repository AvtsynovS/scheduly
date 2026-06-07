import { useCallback, useMemo } from 'react';
import { notification } from 'antd';

import { NotificationContext } from '@shared';

import type { NotificationProps } from '@shared';
import type { PropsWithChildren } from 'react';

export const NotificationProvider = ({ children }: PropsWithChildren) => {
  const [api, contextHolder] = notification.useNotification();

  const showNotification = useCallback(
    ({
      type = 'info',
      placement = 'topRight',
      showProgress = false,
      pauseOnHover = false,
      icon,
      ...rest
    }: NotificationProps) => {
      const normalizedIcon =
        typeof icon === 'string' ? <img src={icon} alt="icon" /> : icon;

      api[type]({
        ...rest,
        placement,
        showProgress,
        pauseOnHover,
        icon: normalizedIcon,
      });
    },
    [api],
  );

  const notificationContextValue = useMemo(
    () => ({ showNotification }),
    [showNotification],
  );

  return (
    <NotificationContext.Provider value={notificationContextValue}>
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  );
};
