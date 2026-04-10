import { SupportedLocales } from './types';

export const LOCALE_OPTIONS = [
  { key: SupportedLocales.EN, label: 'EN' },
  { key: SupportedLocales.RU, label: 'RU' },
] satisfies { key: SupportedLocales; label: string }[];
