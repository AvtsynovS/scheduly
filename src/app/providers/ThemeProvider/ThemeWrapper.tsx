import { useCallback, useMemo, useState } from 'react';
import { ConfigProvider } from 'antd';

import {
  getAntdTheme,
  getCurrentTheme,
  getThemeClass,
  GlobalStyles,
  onChangeTheme,
  theme,
  ThemeContext,
} from '@shared';

import { ThemeProvider } from 'styled-components';

import type { SupportedTheme } from '@shared';
import type { PropsWithChildren } from 'react';

export const ThemeWrapper = ({ children }: PropsWithChildren) => {
  const [themeName, setThemeName] = useState<SupportedTheme>(() =>
    getCurrentTheme(),
  );

  const antdTheme = useMemo(() => {
    const root = document.documentElement;

    root.classList.remove('light', 'dark');
    root.classList.add(getThemeClass(themeName));

    return getAntdTheme();
  }, [themeName]);

  const handleChangeTheme = useCallback((newTheme: SupportedTheme) => {
    setThemeName(newTheme);
    onChangeTheme(newTheme);
  }, []);

  const contextValue = useMemo(
    () => ({
      currentTheme: themeName,
      onChangeTheme: handleChangeTheme,
    }),
    [themeName, handleChangeTheme],
  );

  return (
    <ConfigProvider theme={antdTheme}>
      <ThemeProvider theme={theme}>
        <ThemeContext.Provider value={contextValue}>
          <GlobalStyles />
          {children}
        </ThemeContext.Provider>
      </ThemeProvider>
    </ConfigProvider>
  );
};
