import { useEffect, useRef } from 'react';
import { Controller, get, useFormContext } from 'react-hook-form';

import { Input as InputKit, Select, Space } from '@common/ui-kit';

import { Error } from './Error';
import { FieldWrapper } from './FieldWrapper';
import { Label } from './Label';

import type { InputProps, InputRef, SelectProps } from '@common/ui-kit/types';
import type { FieldValues, Path } from 'react-hook-form';

const { Compact } = Space;

type TextFieldProps<T extends FieldValues> = {
  name: Path<T>;
  required?: boolean;
  label?: string;
  autoFocus?: boolean;
  amount?: InputProps;
  currency?: SelectProps;
  className?: string;
};

export const PriceField = <T extends FieldValues>({
  name,
  required = false,
  label,
  autoFocus,
  amount,
  currency,
  className,
}: TextFieldProps<T>) => {
  const inputRef = useRef<InputRef>(null);

  const {
    control,
    formState: { errors },
  } = useFormContext();

  const error =
    get(errors, `${name}.amount`) || get(errors, `${name}.currency`);

  useEffect(() => {
    if (inputRef.current && autoFocus) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  return (
    <FieldWrapper className={className}>
      {label && (
        <Label htmlFor={name} required={required}>
          {label}
        </Label>
      )}
      <Compact>
        <Controller
          control={control}
          name={`${name}.amount`}
          render={({ field }) => (
            <InputKit
              {...amount}
              {...field}
              status={error ? 'error' : undefined}
              ref={inputRef}
            />
          )}
        />
        <Controller
          control={control}
          name={`${name}.currency`}
          render={({ field }) => (
            <Select
              {...currency}
              {...field}
              status={error ? 'error' : undefined}
            />
          )}
        />
      </Compact>
      {error?.message && <Error error={error.message} />}
    </FieldWrapper>
  );
};
