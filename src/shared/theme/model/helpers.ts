import { isSupportedTheme } from './guards';
import { SupportedTheme } from './types';

const THEME_KEY = 'theme';

export const getCurrentTheme = (): SupportedTheme => {
  const currentTheme = localStorage.getItem(THEME_KEY);
  const isTheme = currentTheme && isSupportedTheme(currentTheme);

  return isTheme ? currentTheme : SupportedTheme.LIGHT;
};

export const onChangeTheme = (theme: SupportedTheme) => {
  localStorage.setItem(THEME_KEY, theme);
};

export const getThemeClass = (theme: SupportedTheme) => {
  return theme;
};
