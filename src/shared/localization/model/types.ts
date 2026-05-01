export const SupportedLocales = {
  EN: 'en-US',
  RU: 'ru-RU',
} as const;

export type SupportedLocales =
  (typeof SupportedLocales)[keyof typeof SupportedLocales];

export type FormatConfigType =
  | { type: 'currency'; currency?: string }
  | { type: 'duration'; unit: 'minute' | 'hour' }
  | { type: 'number' };
