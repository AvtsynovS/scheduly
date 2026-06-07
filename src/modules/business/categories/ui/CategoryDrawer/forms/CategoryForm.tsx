import { useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { blue, Button, Flex } from '@common/ui-kit';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  ColorPickerField,
  spaces,
  TextAreaField,
  TextField,
  useTranslate,
} from '@shared';

import { categorySchema } from './schemas/categorySchema';

import styled from 'styled-components';

import type { CategoryValueType } from './model/types';

type CategoryFormProps = {
  defaultValues?: CategoryValueType;
  onSubmit: (data: CategoryValueType) => void;
  onClose: () => void;
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces.xl};

  height: 100%;
`;

export const CategoryForm = ({
  defaultValues,
  onSubmit,
  onClose,
}: CategoryFormProps) => {
  const { translate } = useTranslate();

  const resolver = useMemo(
    () => yupResolver(categorySchema(translate)),
    [translate],
  );

  const methods = useForm<CategoryValueType>({
    resolver,
    defaultValues: defaultValues
      ? defaultValues
      : {
          color: blue[7],
        },
  });

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Flex vertical gap={spaces.xl} flex={1}>
          <TextField
            name="name"
            required
            label={translate('business.input.category.name.label')}
            placeholder={translate('business.input.category.name.placeholder')}
          />
          <TextAreaField
            name="description"
            label={translate('business.input.category.description.label')}
            placeholder={translate(
              'business.input.category.description.placeholder',
            )}
            maxLength={1000}
            showCount
            rows={6}
          />
          <ColorPickerField
            name="color"
            required
            label={translate('business.input.category.color.label')}
            text={translate('business.input.category.color.text')}
            placement="bottom"
            format="hex"
            disabledFormat
          />
        </Flex>

        <Flex gap={spaces.m} align="center" justify="space-between">
          <Button htmlType="submit" block type="primary">
            {translate('button.label.create')}
          </Button>
          <Button block onClick={onClose}>
            {translate('button.label.cancel')}
          </Button>
        </Flex>
      </StyledForm>
    </FormProvider>
  );
};
