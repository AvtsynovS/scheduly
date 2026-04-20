import { createContext } from 'react';

import { onChangeTheme } from './helpers';
import { SupportedTheme } from './types';

type ThemeContextType = {
  currentTheme: SupportedTheme;
  onChangeTheme: (currentTheme: SupportedTheme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  currentTheme: SupportedTheme.LIGHT,
  onChangeTheme: (currentTheme: SupportedTheme) => onChangeTheme(currentTheme),
});
