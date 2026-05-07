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
      colorPrimary: cssVar('--text-primary'),

      controlItemBgHover: cssVar('--color-control-bg-primary-hover'),

      colorBgContainer: cssVar('--color-bg-default'),
      colorBgElevated: cssVar('--color-bg-default'),

      colorText: cssVar('--text'),
      colorTextSecondary: cssVar('--text-secondary'),
      colorTextDisabled: cssVar('--text-muted'),
      colorLink: cssVar('--text-primary'),
      colorLinkActive: cssVar('--text-primary-active'),
      colorLinkHover: cssVar('--text-primary-hover'),

      colorBorder: cssVar('--border-default'),

      colorSuccess: cssVar('--color-status-success'),
      colorWarning: cssVar('--color-status-warning'),
      colorError: cssVar('--color-status-error'),

      fontFamily: cssVar('--font-sans'),
      fontSize: 14,
      borderRadius: 8,
      padding: 16,
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
