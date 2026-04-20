import { SupportedTheme } from '../model/types';

export const THEME_OPTIONS = [
  { key: SupportedTheme.LIGHT, label: 'dropdown.option.light' },
  { key: SupportedTheme.DARK, label: 'dropdown.option.dark' },
] satisfies { key: SupportedTheme; label: string }[];
