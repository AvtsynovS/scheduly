import { SupportedLocales } from '../config';

export const isSupportedLocale = (value: string): value is SupportedLocales => {
  return Object.values(SupportedLocales).includes(value as SupportedLocales);
};
