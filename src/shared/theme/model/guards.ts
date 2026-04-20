import { SupportedTheme } from '../model/types';

export const isSupportedTheme = (value: string): value is SupportedTheme => {
  return Object.values(SupportedTheme).includes(value as SupportedTheme);
};
