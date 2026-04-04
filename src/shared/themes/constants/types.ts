export const SupportedTheme = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

export type SupportedTheme =
  (typeof SupportedTheme)[keyof typeof SupportedTheme];
