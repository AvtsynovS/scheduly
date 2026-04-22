import { useMemo } from 'react';

import { useTranslate } from '../localization';

import type { ItemType } from '@common/ui-kit/types';

export const useTranslateOptions = (options?: ItemType[]) => {
  const translate = useTranslate();

  return useMemo(() => {
    return options
      ? options.map((option) =>
          option && 'label' in option && typeof option.label === 'string'
            ? { ...option, label: translate(option.label) }
            : option,
        )
      : [];
  }, [options, translate]);
};
