import { useState } from 'react';

import { Select, Tag } from '@common/ui-kit';

import { EmptyBox } from '../EmptyBox/EmptyBox';

import type { SelectProps } from '@common/ui-kit/types';
import type { ReactNode } from 'react';

type FilterSelectProps = SelectProps & {
  baseOption: { label: string; value: string };
  allTagLabel: string;
  emptyDescription: string;
};

type TagRenderProps = {
  label: ReactNode;
  value: string;
  closable: boolean;
  onClose: (event?: React.MouseEvent<HTMLElement>) => void;
};

export const FilterSelect = ({
  baseOption,
  allTagLabel,
  emptyDescription,
  options,
  onChange,
  ...props
}: FilterSelectProps) => {
  const [selected, setSelected] = useState<string[]>([baseOption.value]);

  const handleSelect = (value: string) => {
    if (value === baseOption.value) {
      setSelected([baseOption.value]);
    }
  };

  const handleChange = (value: string[]) => {
    if (!value || value.length === 0) {
      setSelected([baseOption.value]);
      onChange?.([baseOption.value]);

      return;
    }

    const newValues = value.filter((val) => val !== baseOption.value);

    setSelected(newValues);
    onChange?.(newValues);
  };

  const tagRender = (props: TagRenderProps) => {
    const { label, closable, onClose, value } = props;

    if (value === baseOption.value) {
      return (
        <Tag closable={false} onClose={onClose}>
          {allTagLabel}
        </Tag>
      );
    }

    return (
      <Tag closable={closable} onClose={onClose}>
        {label}
      </Tag>
    );
  };

  return (
    <Select
      {...props}
      value={selected}
      options={options}
      onSelect={handleSelect}
      onChange={handleChange}
      tagRender={tagRender}
      notFoundContent={<EmptyBox description={emptyDescription} />}
    />
  );
};
