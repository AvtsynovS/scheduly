import { useIntl } from 'react-intl';

import { useTranslate } from './useTranslate';

import type { FormatConfigType } from '../config';

export const useNumberFormat = () => {
  const intl = useIntl();
  const translate = useTranslate();

  return (value: number, config: FormatConfigType) => {
    switch (config.type) {
      case 'number':
        return intl.formatNumber(value);

      case 'currency':
        return intl.formatNumber(value, {
          style: 'currency',
          currency: config?.currency ?? 'RUB',
        });

      case 'duration': {
        const unitLabel = config ? translate(`text.${config.unit}`) : '';

        return `${value} ${unitLabel}`;
      }

      default:
        return String(value);
    }
  };
};
