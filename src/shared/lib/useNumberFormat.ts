import { useIntl } from 'react-intl';

import { useTranslate } from '@shared';

import type { NumberFormatConfigType } from '@shared';

export const useNumberFormat = () => {
  const intl = useIntl();
  const translate = useTranslate();

  return (value: number, config?: NumberFormatConfigType): string => {
    if (value == null) return '';

    switch (config?.type) {
      case 'number':
        return intl.formatNumber(value);

      case 'currency':
        return intl.formatNumber(value, {
          style: 'currency',
          currency: config?.currency ?? 'RUB',
        });

      case 'duration': {
        const hours = Math.floor(value / 60);
        const minutes = value % 60;

        const hourLabel = translate('text.hours', {}, { hours });
        const minuteLabel = translate('text.minutes', {}, { minutes });

        if (hours === 0) {
          return minuteLabel;
        }

        if (hours > 0 && minutes === 0) {
          return hourLabel;
        }

        return `${hourLabel} ${minuteLabel}`;
      }

      default:
        return String(value);
    }
  };
};
