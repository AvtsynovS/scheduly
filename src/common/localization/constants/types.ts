export const SupportedLocales = {
  EN: 'en-US',
  RU: 'ru-RU',
} as const;

export type SupportedLocales =
  (typeof SupportedLocales)[keyof typeof SupportedLocales];
