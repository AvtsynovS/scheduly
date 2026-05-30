import { useMemo } from 'react';

import { useNumberFormat, useTranslate } from '@shared';

import { servicesStatsConfig } from '../config/servicesStatsConfig';

export const useServicesStats = (data: Record<string, number>) => {
  const format = useNumberFormat();
  const { translate } = useTranslate();

  return useMemo(
    () =>
      servicesStatsConfig.map(({ key, label, config }) => {
        const value = data[key];

        return {
          key,
          description: translate(label),
          value: format(value, config),
        };
      }),
    [data, format, translate],
  );
};
