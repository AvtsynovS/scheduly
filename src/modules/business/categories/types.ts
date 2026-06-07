import type { NumberFormatConfigType } from '@shared';

export type CategoriesStatsConfigType = {
  key: string;
  label: string;
  config: NumberFormatConfigType;
};

export type ViewModeType = 'table' | 'card';

export type CategoryActionType =
  | { type: 'create' }
  | { type: 'edit'; id: string }
  | { type: 'delete'; id: string; name: string };

export type ModeType = Extract<
  CategoryActionType,
  { type: 'create' | 'edit' }
> | null;

export type ConfirmActionType = Extract<
  CategoryActionType,
  { type: 'delete' }
> | null;
