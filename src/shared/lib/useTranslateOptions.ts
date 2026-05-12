import { useMemo } from 'react';

import { useTranslate } from '../localization';

import type { ReactNode } from 'react';

type OptionType = {
  label?: string | ReactNode;
};

export const useTranslateOptions = <T extends OptionType>(
  options: T[],
): T[] => {
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
