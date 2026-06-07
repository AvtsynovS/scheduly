import { Controller, useFormContext } from 'react-hook-form';

import { Input } from '@common/ui-kit';

import { Error } from './Error';
import { FieldWrapper } from './FieldWrapper';
import { Label } from './Label';

import type { TextAreaProps } from '@common/ui-kit/types';
import type { FieldValues, Path } from 'react-hook-form';

const { TextArea } = Input;

type TextAreaFieldProps<T extends FieldValues> = {
  name: Path<T>;
  label?: string;
} & TextAreaProps;

export const TextAreaField = <T extends FieldValues>({
  name,
  required,
  label,
  className,
  ...props
}: TextAreaFieldProps<T>) => {
  const { control } = useFormContext();

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
          <TextArea
            {...props}
            {...field}
            status={error ? 'error' : undefined}
          />
          {error?.message && <Error error={error.message} />}
        </FieldWrapper>
      )}
    />
  );
};
