import { boxShadows } from './constants/boxShadows';
import {
  borderRadius,
  darkBorders,
  fontSize,
  lineHeight,
  spaces,
} from './constants';

import type { DefaultTheme } from 'styled-components';

import './_colors/darkThemeColors.css';

export const darkTheme: DefaultTheme = {
  colors: {
    default: 'rgb(156, 163, 175)',
    primary: '',
    secondary: '',
    accent: ``,
    success: 'rgb(19, 168, 46)',
    warning: 'rgb(238, 119, 15)',
    error: 'rgb(219, 21, 21)',
    disabled: 'rgb(148, 148, 149)',
  },
  bg: {
    default: 'rgb(0, 24, 44)',
    primary: 'rgb(3, 39, 72)',
    secondary: 'rgb(0, 0, 0)',
    accent: '',
    success: 'rgb(234, 248, 234)',
    warning: 'rgb(255, 248, 224)',
    error: 'rgb(250, 231, 232)',
    disabled: 'rgb(233, 230, 230)',
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
      },
      border: {
        default: `1px solid rgb(107, 148, 171)`,
      },
    },
    button: {
      color: {
        default: 'rgb(255, 255, 255)',
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
        default: 'linear-gradient(180deg, #0f2027, #203a43, #2c5364)',
        accent: 'rgb(11, 28, 44)',
      },
      color: { default: 'rgb(0, 0, 0)' },
      border: { default: '1px solid rgb(200, 200, 200)' },
    },
  },
  spaces: spaces,
  borders: darkBorders,
  fontSize: fontSize,
  borderRadius: borderRadius,
  boxShadows: boxShadows,
  lineHeight: lineHeight,
};
