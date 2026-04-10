import { boxShadows } from './constants/boxShadows';
import {
  borderRadius,
  fontSize,
  lightBorders,
  lineHeight,
  spaces,
} from './constants';

import type { DefaultTheme } from 'styled-components';

import './_colors/lightThemeColors.css';

export const lightTheme: DefaultTheme = {
  colors: {
    default: 'rgb(107, 99, 117)',
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
    accent: '',
    success: 'var(--status-success-2)',
    warning: 'var(--status-warning-2)',
    error: 'var(--status-error-2)',
    disabled: 'var(--color-disabled)',
  },
  bg: {
    default: 'var(--color-bg-default)',
    primary: 'var(--color-bg-primary)',
    secondary: 'var(--color-bg-secondary)',
    accent: '',
    success: 'var(--status-success-3)',
    warning: 'var(--status-warning-3)',
    error: 'var(--status-error-3)',
    disabled: 'var(--color-bg-disabled)',
  },
  controls: {
    avatar: {
      bg: { default: 'rgb(135, 208, 104)' },
      color: { default: 'rgb(0, 0, 0)' },
      border: { default: '1px solid rgb(200, 200, 200)' },
    },
    card: {
      color: {
        default: 'rgb(78, 142, 177)',
      },
      bg: {
        default: 'rgb(28, 43, 54)',
        primary: `rgb(38, 59, 76)`,
        active: 'rgb(42, 64, 81)',
        link: 'rgb(224, 243, 255)',
        warning: 'var(--status-warning-3)',
        success: 'var(--status-success-3)',
        secondary: 'var(--color-bg-secondary)',
      },
      border: {
        default: `1px solid rgb(75, 102, 118)`,
        primary: '1px solid  var(--color-bg-primary)',
      },
    },
    button: {
      color: {
        default: 'var(--white)',
        hover: 'rgb(70, 109, 132)',
      },
      bg: {
        default: 'rgb(22, 119, 255)',
      },
      border: {
        default: 'none',
      },
    },
    themeSwitcher: {
      bg: {
        default: 'linear-gradient(180deg, #89c2ff, #d7ecff)',
        accent: 'rgb(236, 200, 127)',
      },
      color: { default: 'rgb(0, 0, 0)' },
      border: { default: '1px solid rgb(200, 200, 200)' },
    },
  },
  spaces: spaces,
  borders: lightBorders,
  fontSize: fontSize,
  borderRadius: borderRadius,
  boxShadows: boxShadows,
  lineHeight: lineHeight,
};
