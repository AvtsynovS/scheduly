import { SupportedLocales } from '../constants';

export const isSupportedLocale = (value: string): value is SupportedLocales => {
  return Object.values(SupportedLocales).includes(value as SupportedLocales);
};
