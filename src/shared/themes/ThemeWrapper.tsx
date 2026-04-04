import { type PropsWithChildren, useCallback, useMemo, useState } from 'react';

import { getCurrentTheme, getTheme, onChangeTheme } from './helpers';
import { ThemeContext } from './ThemeContext';

import { ThemeProvider } from 'styled-components';

import type { SupportedTheme } from './constants';

export const ThemeWrapper = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<SupportedTheme>(() => getCurrentTheme());

  const currentTheme = useMemo(() => getTheme(theme), [theme]);

  const handleChangeTheme = useCallback((newTheme: SupportedTheme) => {
    setTheme(newTheme);
    onChangeTheme(newTheme);
  }, []);

  const themeContextValue = useMemo(
    () => ({ currentTheme: theme, onChangeTheme: handleChangeTheme }),
    [theme, handleChangeTheme],
  );

  return (
    <ThemeProvider theme={currentTheme}>
      <ThemeContext.Provider value={themeContextValue}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};
