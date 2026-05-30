import { Controller, useFormContext } from 'react-hook-form';

import { Select } from '@common/ui-kit';

import { Error } from './Error';
import { FieldWrapper } from './FieldWrapper';
import { Label } from './Label';

import styled from 'styled-components';

import type { SelectProps } from '@common/ui-kit/types';
import type { FieldValues, Path } from 'react-hook-form';

type SelectFieldProps<T extends FieldValues> = {
  name: Path<T>;
  required?: boolean;
  label?: string;
  handleChange?: () => void;
} & SelectProps;

const StyledSelect = styled(Select)`
  padding: ${({ theme }) => `${theme.spaces.xxs} ${theme.spaces.s}`};
  min-height: 37.6px;
`;

export const SelectField = <T extends FieldValues>({
  name,
  required,
  label,
  className,
  handleChange,
  ...props
}: SelectFieldProps<T>) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <FieldWrapper className={className}>
          {label && (
            <Label htmlFor={name} required={required}>
              {label}
            </Label>
          )}
          <StyledSelect
            {...props}
            value={value ?? null}
            onChange={(value) => {
              handleChange?.();
              onChange(value);
            }}
            status={error ? 'error' : undefined}
          />
          {error?.message && <Error error={error.message} />}
        </FieldWrapper>
      )}
    />
  );
};
