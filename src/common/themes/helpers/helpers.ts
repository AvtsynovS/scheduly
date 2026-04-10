import { SupportedTheme } from '../constants';
import { darkTheme } from '../darkTheme';
import { lightTheme } from '../lightTheme';

export const getCurrentTheme = () => {
  const currentTheme = localStorage.getItem('theme');
  const isTheme =
    !!currentTheme &&
    Object.values(SupportedTheme).includes(currentTheme as SupportedTheme);

  return isTheme ? currentTheme : SupportedTheme.LIGHT;
};

export const onChangeTheme = (theme: SupportedTheme) => {
  localStorage.setItem('theme', theme);
};

export const getTheme = (theme: SupportedTheme) => {
  switch (theme) {
    case SupportedTheme.DARK:
      return darkTheme;
    default:
      return lightTheme;
  }
};
