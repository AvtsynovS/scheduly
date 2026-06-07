import type { NotificationArgsProps } from '@common/ui-kit/types';
import type { ReactNode } from 'react';

type NotificationPlacement = NotificationArgsProps['placement'];

type NotificationType = 'success' | 'info' | 'warning' | 'error';

export type NotificationProps = {
  title: string;
  description: string;
  type?: NotificationType;
  placement?: NotificationPlacement;
  icon?: ReactNode | string;
  showProgress?: boolean;
  pauseOnHover?: boolean;
  onClick?: () => void;
};
