import { createContext } from 'react';

import { SupportedTheme } from './constants';
import { onChangeTheme } from './helpers';

type ThemeContextType = {
  currentTheme: SupportedTheme;
  onChangeTheme: (currentTheme: SupportedTheme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  currentTheme: SupportedTheme.LIGHT,
  onChangeTheme: (currentTheme: SupportedTheme) => onChangeTheme(currentTheme),
});
