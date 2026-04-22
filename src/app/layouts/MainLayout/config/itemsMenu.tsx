import {
  BriefcaseIcon,
  CalendarIcon,
  ChartIcon,
  DashboardIcon,
  PackageIcon,
  SettingsIcon,
  UsersIcon,
  WalletIcon,
} from '@shared';

import type { ItemType } from '@common/ui-kit/types';

export const items: ItemType[] = [
  {
    key: 'dashboard',
    label: 'menu.item.dashboard',
    icon: <DashboardIcon />,
  },
  {
    key: 'records',
    label: 'menu.item.records',
    icon: <CalendarIcon />,
  },
  {
    key: 'clients',
    label: 'menu.item.clients',
    icon: <UsersIcon />,
  },
  {
    key: 'employees',
    label: 'menu.item.employees',
    icon: <BriefcaseIcon />,
  },
  {
    key: 'services',
    label: 'menu.item.services',
    icon: <PackageIcon />,
  },
  {
    key: 'finance',
    label: 'menu.item.finance',
    icon: <WalletIcon />,
  },
  {
    key: 'reports',
    label: 'menu.item.reports',
    icon: <ChartIcon />,
  },
  {
    key: 'settings',
    label: 'menu.item.settings',
    icon: <SettingsIcon />,
  },
];
