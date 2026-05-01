import { buttonTokens } from './antd/button';
import { dropdownTokens } from './antd/dropdown';
import { getLayoutTokens } from './antd/layoutTokens';
import { getMenuTokens } from './antd/menuTokens';
import { getSpinTokens } from './antd/spinTokens';
import { typographyTokens } from './antd/typography';

export const getCssVariables = (root: HTMLElement, variables: string[]) => {
  return variables.reduce(
    (acc, variable) => {
      acc[variable] = getComputedStyle(root)
        .getPropertyValue(`--${variable}`)
        .trim();

      return acc;
    },
    {} as Record<string, string>,
  );
};

export const getAntdTheme = () => {
  const root = document.documentElement;
  const styles = getComputedStyle(root);

  const cssVar = (name: string) => styles.getPropertyValue(name).trim();

  return {
    token: {
      colorPrimary: cssVar('--primary'),

      controlItemBgHover: cssVar('--primary-hover'),

      colorBgBase: cssVar('--background'),
      colorBgContainer: cssVar('--card'),
      colorBgElevated: cssVar('--card'),

      colorTextBase: cssVar('--foreground'),
      colorText: cssVar('--foreground'),
      colorTextSecondary: cssVar('--secondary-foreground'),
      colorTextDisabled: cssVar('--muted-foreground'),
      colorLink: cssVar('--primary'),
      colorLinkActive: cssVar('--primary-active'),
      colorLinkHover: cssVar('--primary-hover'),

      colorBorder: cssVar('--border-color'),

      colorSuccess: cssVar('--status-success'),
      colorWarning: cssVar('--status-warning'),
      colorError: cssVar('--status-error'),

      fontFamily: cssVar('--font-sans'),
      fontSize: 14,
      borderRadius: 8,
      padding: 16,
      controlHeight: 40,
    },
    components: {
      Button: buttonTokens,
      Dropdown: dropdownTokens,
      Layout: getLayoutTokens(cssVar),
      Menu: getMenuTokens(cssVar),
      Spin: getSpinTokens(cssVar),
      Typography: typographyTokens,
    },
  };
};
