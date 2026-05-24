import { useEffect, useRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { Input as InputKit } from '@common/ui-kit';

import { Error } from './Error';
import { FieldWrapper } from './FieldWrapper';
import { Label } from './Label';

import type { InputProps, InputRef } from '@common/ui-kit/types';
import type { FieldValues, Path } from 'react-hook-form';

type TextFieldProps<T extends FieldValues> = {
  name: Path<T>;
  required?: boolean;
  label?: string;
  autoFocus?: boolean;
} & InputProps;

export const TextField = <T extends FieldValues>({
  name,
  required = false,
  label,
  autoFocus,
  className,
  ...props
}: TextFieldProps<T>) => {
  const inputRef = useRef<InputRef>(null);

  const { control } = useFormContext();

  useEffect(() => {
    if (inputRef.current && autoFocus) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FieldWrapper className={className}>
          {label && (
            <Label htmlFor={name} required={required}>
              {label}
            </Label>
          )}
          <InputKit
            {...props}
            {...field}
            id={name}
            status={error ? 'error' : undefined}
            ref={inputRef}
          />
          {error?.message && <Error error={error.message} />}
        </FieldWrapper>
      )}
    />
  );
};
