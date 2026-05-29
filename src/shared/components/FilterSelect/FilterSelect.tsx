import { useMemo, useState } from 'react';

import { Select } from '@common/ui-kit';

import { EmptyBox } from '../EmptyBox/EmptyBox';

import type { SelectProps } from '@common/ui-kit/types';

type FilterSelectProps = SelectProps & {
  baseOption: { label: string; value: string };
  emptyDescription: string;
};

export const FilterSelect = ({
  baseOption,
  emptyDescription,
  options = [],
  onChange,
  ...props
}: FilterSelectProps) => {
  const [selected, setSelected] = useState<string[]>([baseOption.value]);

  const allValues = useMemo(() => {
    return options
      .map(({ value }) => value)
      .filter(
        (value): value is string =>
          typeof value === 'string' && value !== baseOption.value,
      );
  }, [baseOption.value, options]);

  const handleChange = (value: string[]) => {
    const hasAll = value.includes(baseOption.value);
    const isAllSelected =
      allValues.length > 0 &&
      allValues.every((item) => value.includes(item)) &&
      value.length === allValues.length;

    if (!value.length || isAllSelected) {
      setSelected([baseOption.value]);
      onChange?.([baseOption.value]);

      return;
    }

    if (hasAll && value.length > 1) {
      const last = value[value.length - 1];

      // выбор пользователя
      if (last === baseOption.value) {
        setSelected([baseOption.value]);
        onChange?.([baseOption.value]);

        return;
      }

      const filtered = value.filter((v) => v !== baseOption.value);

      setSelected(filtered);
      onChange?.(filtered);

      return;
    }

    setSelected(value);
    onChange?.(value);
  };

  return (
    <Select
      {...props}
      value={selected}
      options={options}
      onChange={handleChange}
      notFoundContent={<EmptyBox description={emptyDescription} />}
    />
  );
};
