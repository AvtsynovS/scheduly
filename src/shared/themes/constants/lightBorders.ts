import type { BorderType } from '../types';

import '../_colors/lightThemeColors.css';

// TODO (savtsynov) Проверить как передаются цвета через переменные
export const lightBorders: BorderType = {
  default: `1px solid rgb(210, 210, 210)`,
  secondary: `1px solid rgb(210, 210, 210)`,
  success: `1px solid var(--status-success-1)`,
  warning: `1px solid var(--status-warning-1)`,
  error: `1px solid var(--status-error-1)`,
};
