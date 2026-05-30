import { buttonTokens } from './antd/button';
import { getCardTokens } from './antd/cardTokens';
import { getDropdownTokens } from './antd/dropdown';
import { inputTokens } from './antd/input';
import { getLayoutTokens } from './antd/layoutTokens';
import { getMenuTokens } from './antd/menuTokens';
import { getSegmentedTokens } from './antd/segmented';
import { getSelectTokens } from './antd/select';
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
      colorBgElevated: cssVar('--color-container-bg-elevated'),
      colorBorder: cssVar('--color-base-grey-4'),
      colorSplit: cssVar('--color-base-grey-5'),
      colorIcon: cssVar('--color-icon'),
      colorTextPlaceholder: cssVar('--color-placeholder'),
      colorTextQuaternary: 'var(--text-muted)',
      colorTextDescription: cssVar('--text-muted'),

      colorText: cssVar('--text'),
      colorTextSecondary: cssVar('--text-secondary'),
      colorTextDisabled: cssVar('--text-muted'),
      colorLink: cssVar('--text-primary'),
      colorLinkActive: cssVar('--text-primary-active'),
      colorLinkHover: cssVar('--text-primary-hover'),

      colorSuccess: cssVar('--color-status-success'),
      colorWarning: cssVar('--color-status-warning'),
      colorError: cssVar('--color-status-error'),

      // cards, buttons, surfaces
      boxShadow: cssVar('--shadow-card'),
      // dropdown, tooltip, popover, modal
      boxShadowSecondary: cssVar('--shadow-dropdown'),

      fontFamily: cssVar('--font-sans'),
      fontSize: 14,
      borderRadius: 8,
      padding: 16,
    },
    components: {
      Button: buttonTokens,
      Card: getCardTokens(cssVar),
      Dropdown: getDropdownTokens(cssVar),
      Input: inputTokens,
      Layout: getLayoutTokens(cssVar),
      Menu: getMenuTokens(cssVar),
      Segmented: getSegmentedTokens(cssVar),
      Select: getSelectTokens(cssVar),
      Spin: getSpinTokens(cssVar),
      Typography: typographyTokens,
    },
  };
};
