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
    label: 'business.menu.item.dashboard',
    icon: <DashboardIcon />,
  },
  {
    key: 'records',
    label: 'business.menu.item.records',
    icon: <CalendarIcon />,
  },
  {
    key: 'clients',
    label: 'business.menu.item.clients',
    icon: <UsersIcon />,
  },
  {
    key: 'employees',
    label: 'business.menu.item.employees',
    icon: <BriefcaseIcon />,
  },
  {
    key: 'services',
    label: 'business.menu.item.services',
    icon: <PackageIcon />,
  },
  {
    key: 'finance',
    label: 'business.menu.item.finance',
    icon: <WalletIcon />,
  },
  {
    key: 'reports',
    label: 'business.menu.item.reports',
    icon: <ChartIcon />,
  },
  {
    key: 'settings',
    label: 'business.menu.item.settings',
    icon: <SettingsIcon />,
  },
];
