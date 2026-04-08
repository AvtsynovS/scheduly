import { createContext } from 'react';

import { SupportedTheme } from '../../themes/constants';
import { onChangeTheme } from '../../themes/helpers';

type ThemeContextType = {
  currentTheme: SupportedTheme;
  onChangeTheme: (currentTheme: SupportedTheme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  currentTheme: SupportedTheme.LIGHT,
  onChangeTheme: (currentTheme: SupportedTheme) => onChangeTheme(currentTheme),
});
