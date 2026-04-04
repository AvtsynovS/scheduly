import { SupportedTheme } from '../constants';
import { darkTheme } from '../darkTheme';
import { lightTheme } from '../lightTheme';

export const getCurrentTheme = () => {
  const currentTheme = localStorage.getItem('theme');
  const isTheme =
    !!currentTheme && Object.keys(SupportedTheme).includes(currentTheme);

  if (isTheme) {
    return currentTheme as SupportedTheme;
  } else {
    return SupportedTheme.LIGHT;
  }
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
